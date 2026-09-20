import { StrictMode, Suspense, lazy } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'
import { installLeadTracking } from './lib/analytics'

// The homepage stays in the main bundle so the prerendered HTML hydrates in
// one pass. Every other route is code-split — the prerender step waits for
// #root to have children, so the split chunks still render into static HTML.
const AreasIndex = lazy(() => import('./components/AreasIndex.tsx'))
const LocationPage = lazy(() => import('./components/LocationPage.tsx'))
const BlogIndex = lazy(() => import('./components/BlogIndex.tsx'))
const BlogPost = lazy(() => import('./components/BlogPost.tsx'))

// Fire GA4 / Google Ads lead events for every tel: and WhatsApp click.
installLeadTracking()

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/areas" element={<AreasIndex />} />
            <Route path="/areas/:slug" element={<LocationPage />} />
            <Route path="/areas/:hubSlug/:slug" element={<LocationPage />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

const container = document.getElementById('root')!
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
