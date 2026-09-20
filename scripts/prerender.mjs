import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sirv from 'sirv';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const distDir = join(projectRoot, 'dist');

// Detect a CI / Vercel / Lambda build environment. On CI we launch
// @sparticuz/chromium + puppeteer-core (plain puppeteer's bundled Chromium
// can't launch in Vercel's Linux build container — missing system libs).
// Locally we use the full puppeteer package and its bundled Chromium.
const onCI = !!process.env.VERCEL || !!process.env.CI || !!process.env.AWS_LAMBDA_FUNCTION_NAME;

const ORIGIN = 'https://nnmobiletyres.co.uk';
const PORT = 4178;
// Concurrency is environment-aware. Locally we render serially: the project
// lives on an iCloud-synced Desktop path, and concurrent writes to
// dist/**/index.html can trigger iCloud conflict renames (e.g. "index 2.html").
// On CI the filesystem is a clean Linux box (no iCloud), so we render in
// parallel for speed across the 151 routes.
const CONCURRENCY = onCI ? 6 : 1;
const MAX_RETRIES = 3;
// If failures stay at or below this threshold the build still exits 0 — those
// pages fall back to the SPA via the Vercel rewrite and don't block the deploy.
const FAILURE_THRESHOLD = 2;

function extractRoutes(xml) {
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  const routes = locs.map((loc) => {
    let path = loc.startsWith(ORIGIN) ? loc.slice(ORIGIN.length) : loc;
    if (path === '') path = '/';
    return path;
  });
  // De-duplicate while preserving order
  return [...new Set(routes)];
}

function routeToFilePath(route) {
  if (route === '/') return join(distDir, 'index.html');
  const clean = route.replace(/^\/+|\/+$/g, '');
  return join(distDir, clean, 'index.html');
}

async function main() {
  // 1. Read sitemap and extract routes
  const sitemapXml = await readFile(join(projectRoot, 'public', 'sitemap.xml'), 'utf-8');
  const routes = extractRoutes(sitemapXml);
  console.log(`[prerender] Found ${routes.length} routes in sitemap.`);

  // 2. Capture the pristine built index.html BEFORE any prerendering overwrites it.
  //    The SPA fallback must always serve this clean shell (which contains an empty
  //    <div id="root">), never an already-prerendered file — otherwise the app boots
  //    against the wrong/empty markup and Helmet emits stale tags.
  const pristineIndex = await readFile(join(distDir, 'index.html'), 'utf-8');

  // 3. Serve real static assets from dist; serve the pristine index for every HTML route.
  const serveAssets = sirv(distDir, { single: false, dev: false });
  const server = createServer((req, res) => {
    const url = (req.url || '/').split('?')[0];
    const isAsset = /\.[a-zA-Z0-9]+$/.test(url) && !url.endsWith('.html');
    if (isAsset) {
      return serveAssets(req, res, () => {
        res.statusCode = 404;
        res.end('Not found');
      });
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(pristineIndex);
  });
  await new Promise((res) => server.listen(PORT, res));
  console.log(`[prerender] Serving dist on http://localhost:${PORT}`);

  // 4. Launch the browser. On CI/Vercel use @sparticuz/chromium +
  //    puppeteer-core (a Chromium build that runs in Linux build containers);
  //    locally use the full puppeteer package and its bundled Chromium.
  //    Dynamic imports keep the unused package out of the module load path.
  let browser;
  if (onCI) {
    console.log('[prerender] browser mode: CI (@sparticuz/chromium)');
    const { default: chromium } = await import('@sparticuz/chromium');
    const { default: puppeteer } = await import('puppeteer-core');
    browser = await puppeteer.launch({
      executablePath: await chromium.executablePath(),
      args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox'],
      headless: true,
      defaultViewport: chromium.defaultViewport || { width: 1280, height: 800 },
    });
  } else {
    console.log('[prerender] browser mode: local (puppeteer)');
    const { default: puppeteer } = await import('puppeteer');
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
  }

  const failures = [];
  let written = 0;

  // Attempt to render a single route once. Uses domcontentloaded instead of
  // networkidle0 to avoid hanging on persistent connections (fonts, analytics,
  // keep-alive sockets). After navigation we wait for React to mount + Helmet
  // to set the canonical link and title before capturing HTML.
  async function attemptRoute(route) {
    const page = await browser.newPage();
    try {
      // Never let the build send analytics/ads hits: block the Google tag
      // loader (and any hit endpoints) for every prerendered page.
      await page.setRequestInterception(true);
      page.on('request', (req) => {
        const u = req.url();
        if (/googletagmanager\.com|google-analytics\.com|analytics\.google\.com|googleadservices\.com|doubleclick\.net|googlesyndication\.com/.test(u)) {
          return req.abort();
        }
        return req.continue();
      });
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'domcontentloaded',
        timeout: 45000,
      });

      // Wait until React has mounted content AND react-helmet-async has set
      // the canonical link + document title. This replaces the fragile
      // networkidle0 wait that could hang for 60s on open connections.
      await page.waitForFunction(
        () => {
          const r = document.getElementById('root');
          const c = document.querySelector('link[rel="canonical"]');
          const t = document.title;
          return r && r.children.length > 0 && c && t && t.length > 0;
        },
        { timeout: 20000 },
      );

      // Scroll to bottom to trigger lazy/scroll-triggered content (ScrollTrigger reveals)
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      // Allow reveal animations and Helmet updates to settle
      await new Promise((r) => setTimeout(r, 900));

      const html = await page.content();
      const filePath = routeToFilePath(route);
      await mkdir(dirname(filePath), { recursive: true });
      await writeFile(filePath, html, 'utf-8');
      return { ok: true, filePath };
    } finally {
      await page.close();
    }
  }

  // Render a route with up to MAX_RETRIES attempts. Each retry uses a fresh
  // page and waits 1s before trying again, giving the server/browser time to
  // recover from any transient hiccup.
  async function renderRoute(route) {
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        const { filePath } = await attemptRoute(route);
        written++;
        const attemptNote = attempt > 1 ? ` (attempt ${attempt})` : '';
        console.log(`[prerender] Wrote ${filePath}${attemptNote}`);
        return; // success — stop retrying
      } catch (err) {
        const isLastAttempt = attempt === MAX_RETRIES;
        if (isLastAttempt) {
          failures.push(route);
          console.error(`[prerender] FAILED ${route} after ${MAX_RETRIES} attempts: ${err.message}`);
        } else {
          console.warn(`[prerender] Retry ${attempt}/${MAX_RETRIES - 1} for ${route}: ${err.message}`);
          await new Promise((r) => setTimeout(r, 1000));
        }
      }
    }
  }

  // 5. Render in batches of CONCURRENCY (1 locally to avoid iCloud write
  //    conflicts, 6 on CI for speed). Each batch resolves all routes — including
  //    their per-route retry logic — before the next batch starts.
  for (let i = 0; i < routes.length; i += CONCURRENCY) {
    const batch = routes.slice(i, i + CONCURRENCY);
    await Promise.all(batch.map(renderRoute));
  }

  await browser.close();
  await new Promise((res) => server.close(res));

  const total = routes.length;
  const failCount = failures.length;
  console.log(`[prerender] Wrote ${written}/${total}. Failures: ${failCount}`);

  if (failCount === 0) {
    process.exit(0);
  } else if (failCount <= FAILURE_THRESHOLD) {
    console.warn(
      `[prerender] WARNING: ${failCount} route(s) failed but are within the ${FAILURE_THRESHOLD}-route tolerance.\n` +
        `These pages will fall back to the SPA via the Vercel rewrite. Failed routes:\n` +
        failures.join('\n'),
    );
    process.exit(0);
  } else {
    console.error(
      `[prerender] ERROR: ${failCount} route(s) failed — exceeds tolerance of ${FAILURE_THRESHOLD}. Deploy blocked.\n` +
        `Failed routes:\n` +
        failures.join('\n'),
    );
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('[prerender] Fatal error:', err);
  process.exit(1);
});
