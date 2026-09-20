/**
 * Shared page chrome for the service and pricing pages.
 *
 * The homepage, area pages and blog pages each carry their own inline copy of
 * this markup. Rather than duplicate it a fourth (and fifth, and sixth) time
 * across the six new commercial pages, the header, footer, CTA button pair and
 * floating contact buttons live here.
 */
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Clock, ChevronRight } from 'lucide-react';
import { getHubLocations, getLocationPath } from '../data/locations';
import { services } from '../data/services';

export const PHONE_DISPLAY = '07362 638978';
export const PHONE_HREF = 'tel:+447362638978';
export const WHATSAPP_HREF = 'https://wa.me/447362638978';

export function SiteHeader() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/logo-288.webp"
              alt="NN Mobile Tyres"
              width={288}
              height={89}
              decoding="async"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-sm text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/prices" className="text-sm text-gray-300 hover:text-white transition-colors">
              Prices
            </Link>
            <Link to="/areas" className="text-sm text-gray-300 hover:text-white transition-colors">
              Areas
            </Link>
            <Link to="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 px-4 py-2 rounded-full btn-primary text-white text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <Link to="/services" className="text-sm text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/prices" className="text-sm text-gray-300 hover:text-white transition-colors">
              Prices
            </Link>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 px-3 py-2 rounded-full btn-primary text-white text-xs font-semibold"
            >
              <Phone className="w-3 h-3" />
              Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

/** The Call + WhatsApp pair used above the fold and in the closing CTA. */
export function CallWhatsAppButtons({ label = `Call ${PHONE_DISPLAY}` }: { label?: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href={PHONE_HREF}
        className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center justify-center gap-2"
      >
        <Phone className="w-5 h-5" />
        {label}
      </a>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp Us
      </a>
    </div>
  );
}

export function Breadcrumbs({ trail }: { trail: { name: string; to?: string }[] }) {
  return (
    <div className="pt-20 md:pt-24 pb-4 px-4 sm:px-6 lg:px-8 xl:px-12">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
        {trail.map((crumb, i) => (
          <span key={crumb.name} className="flex items-center gap-2">
            {i > 0 && <ChevronRight className="w-3 h-3" />}
            {crumb.to ? (
              <Link to={crumb.to} className="hover:text-white transition-colors">
                {crumb.name}
              </Link>
            ) : (
              <span className="text-white">{crumb.name}</span>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/logo-288.webp"
                alt="NN Mobile Tyres"
                width={288}
                height={89}
                loading="lazy"
                decoding="async"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional mobile tyre fitting service available 24/7 across Oxfordshire and beyond. We come to you,
              wherever you are.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-[#E84420] transition-colors"
                  >
                    {service.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/prices" className="text-gray-400 hover:text-[#E84420] transition-colors">
                  Prices
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Popular Areas</h4>
            <ul className="space-y-3">
              {getHubLocations().slice(0, 6).map(hub => (
                <li key={hub.slug}>
                  <Link to={getLocationPath(hub)} className="text-gray-400 hover:text-[#E84420] transition-colors">
                    {hub.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/areas" className="text-gray-400 hover:text-[#E84420] transition-colors">
                  All areas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 grid md:grid-cols-3 gap-6 mb-8">
          <a href={PHONE_HREF} className="flex items-center gap-2 text-gray-400 hover:text-[#E84420] transition-colors">
            <Phone className="w-4 h-4" />
            {PHONE_DISPLAY}
          </a>
          <div className="flex items-start gap-2 text-gray-400">
            <MapPin className="w-4 h-4 mt-0.5" />
            <span>Oxford, Oxfordshire, UK</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4" />
            <span>24/7 Service</span>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} NN Mobile Tyres. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">Emergency Mobile Tyre Fitting Service</p>
        </div>
      </div>
    </footer>
  );
}

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={PHONE_HREF}
        className="w-14 h-14 rounded-full bg-[#E84420] text-white flex items-center justify-center shadow-lg glow-red animate-pulse-red hover:scale-110 transition-transform"
        aria-label="Call Emergency"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
