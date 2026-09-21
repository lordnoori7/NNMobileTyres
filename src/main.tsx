import { StrictMode, Suspense, lazy, type ComponentType } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import './index.css'
import App from './App.tsx'
import { installLeadTracking } from './lib/analytics'

// The homepage stays in the main bundle so the prerendered HTML hydrates in
// one pass. Every other route is code-split — the prerender step waits for
// #root to have children, so the split chunks still render into static HTML.
const loaders = {
  areasIndex: () => import('./components/AreasIndex.tsx'),
  locationPage: () => import('./components/LocationPage.tsx'),
  blogIndex: () => import('./components/BlogIndex.tsx'),
  blogPost: () => import('./components/BlogPost.tsx'),
  servicesIndex: () => import('./components/ServicesIndex.tsx'),
  servicePage: () => import('./components/ServicePage.tsx'),
  pricesPage: () => import('./components/PricesPage.tsx'),
}

type RouteKey = keyof typeof loaders

const lazyComponents: Record<RouteKey, ComponentType> = {
  areasIndex: lazy(loaders.areasIndex),
  locationPage: lazy(loaders.locationPage),
  blogIndex: lazy(loaders.blogIndex),
  blogPost: lazy(loaders.blogPost),
  servicesIndex: lazy(loaders.servicesIndex),
  servicePage: lazy(loaders.servicePage),
  pricesPage: lazy(loaders.pricesPage),
}

// Which chunk the current URL needs. The homepage returns null: it ships in
// the main bundle and has nothing to wait for.
function routeKeyForPath(pathname: string): RouteKey | null {
  const [head, ...rest] = pathname.split('/').filter(Boolean)
  switch (head) {
    case 'areas':
      return rest.length > 0 ? 'locationPage' : 'areasIndex'
    case 'blog':
      return rest.length > 0 ? 'blogPost' : 'blogIndex'
    case 'services':
      return rest.length > 0 ? 'servicePage' : 'servicesIndex'
    case 'prices':
      return 'pricesPage'
    default:
      return null
  }
}

// Filled in before hydration with the one component this URL is prerendered
// for. Everything else stays lazy and is fetched on navigation as before.
const resolved: Partial<Record<RouteKey, ComponentType>> = {}

// A lazy route can never hydrate: React.lazy suspends on first render even
// when its chunk is already in the module cache (the payload is only primed
// once React itself has called the factory), and a Suspense boundary can't
// hydrate against our prerendered HTML anyway — real SSR brackets every
// boundary in <!--$-->/<!--/$--> comment markers, and a DOM snapshot of a
// client render has none of them. React therefore threw away the prerendered
// markup with error #418 and re-rendered the whole page.
//
// So the route the visitor actually landed on is awaited up front and rendered
// as a plain component, with no boundary in its tree. The rest keep their own
// Suspense boundary, which only ever runs during client-side navigation, where
// there is no hydration to break.
function routeElement(key: RouteKey) {
  const Resolved = resolved[key]
  if (Resolved) return <Resolved />

  const Lazy = lazyComponents[key]
  return (
    <Suspense fallback={null}>
      <Lazy />
    </Suspense>
  )
}

// Fire GA4 / Google Ads lead events for every tel: and WhatsApp click.
installLeadTracking()

async function boot() {
  const container = document.getElementById('root')!
  const prerendered = container.hasChildNodes()

  // Only worth waiting on when there is prerendered markup to hydrate. On the
  // SPA fallback there is nothing to match, so let Suspense do its job.
  const key = prerendered ? routeKeyForPath(window.location.pathname) : null
  if (key) {
    try {
      resolved[key] = (await loaders[key]()).default as ComponentType
    } catch {
      // Chunk fetch failed — fall through and let the lazy route retry it.
    }
  }

  const app = (
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/areas" element={routeElement('areasIndex')} />
            <Route path="/areas/:slug" element={routeElement('locationPage')} />
            <Route path="/areas/:hubSlug/:slug" element={routeElement('locationPage')} />
            <Route path="/blog" element={routeElement('blogIndex')} />
            <Route path="/blog/:slug" element={routeElement('blogPost')} />
            <Route path="/services" element={routeElement('servicesIndex')} />
            <Route path="/services/:slug" element={routeElement('servicePage')} />
            <Route path="/prices" element={routeElement('pricesPage')} />
          </Routes>
        </BrowserRouter>
        {/* The quote form reports validation errors with toast.error(), so the
            renderer has to be mounted once at the root or the message never
            appears. Sonner renders an empty <section suppressHydrationWarning>
            when there are no toasts, so it is prerender/hydration safe. */}
        <Toaster position="top-center" richColors />
      </HelmetProvider>
    </StrictMode>
  )

  if (prerendered) {
    hydrateRoot(container, app)
  } else {
    createRoot(container).render(app)
  }
}

boot()
