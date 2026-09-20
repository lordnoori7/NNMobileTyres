/**
 * Google tag (GA4 + Google Ads) conversion tracking.
 *
 * The tag itself is loaded in index.html (static, so Google's tag
 * detection and Ads/GA4 verification can see it in crawled HTML). The
 * inline config there only runs on the production hostname, so local
 * dev and the Puppeteer prerender step never send hits.
 *
 * This module fires the two lead events the business cares about:
 *   - phone_click    → any click on a tel: link
 *   - whatsapp_click → any click on a wa.me / WhatsApp link, or the
 *                      WhatsApp quote form submit
 * Both are GA4 key events and Google Ads primary conversion actions.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type LeadEvent = 'phone_click' | 'whatsapp_click';

/**
 * Google Ads conversion labels (account AW-16448059556). Each lead event is
 * sent twice: once under its own name (GA4 key event) and once as an Ads
 * `conversion` event with the matching send_to label, which is what the
 * "NN Mobile Tyres (web) phone_click / whatsapp_click" conversion actions
 * count.
 */
const ADS_CONVERSION_LABELS: Record<LeadEvent, string> = {
  phone_click: 'AW-16448059556/ZLp0CN6plf8cEKTxhaM9',
  whatsapp_click: 'AW-16448059556/edgkCOGplf8cEKTxhaM9',
};

function gtag(...args: unknown[]) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === 'function') {
    window.gtag(...args);
  } else {
    // gtag.js not loaded (dev / prerender / blocked) — queue harmlessly.
    window.dataLayer.push(args);
  }
}

export function trackLead(event: LeadEvent, params: Record<string, string> = {}) {
  gtag('event', event, {
    page_path: window.location.pathname,
    ...params,
  });
  gtag('event', 'conversion', { send_to: ADS_CONVERSION_LABELS[event] });
}

function classify(anchor: HTMLAnchorElement): LeadEvent | null {
  const href = anchor.getAttribute('href') || '';
  if (/^tel:/i.test(href)) return 'phone_click';
  if (/wa\.me\/|api\.whatsapp\.com|whatsapp:\/\//i.test(href)) return 'whatsapp_click';
  return null;
}

let installed = false;

/**
 * Delegated click listener so every tel:/WhatsApp link on every page
 * (including blog HTML rendered via dangerouslySetInnerHTML) is tracked
 * without touching each component.
 */
export function installLeadTracking() {
  if (installed || typeof document === 'undefined') return;
  installed = true;
  document.addEventListener(
    'click',
    (e) => {
      const target = e.target as Element | null;
      const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const event = classify(anchor);
      if (!event) return;
      trackLead(event, {
        link_url: anchor.getAttribute('href') || '',
        link_text: (anchor.textContent || '').trim().slice(0, 80),
      });
    },
    { capture: true },
  );
}
