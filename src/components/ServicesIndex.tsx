import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Wrench, CircleDot, Key, Battery, Zap, Clock, Star, Shield, ArrowRight, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { services, type ServiceIcon } from '../data/services';
import { getHubLocations, getLocationPath } from '../data/locations';
import {
  SiteHeader,
  SiteFooter,
  FloatingContactButtons,
  CallWhatsAppButtons,
  Breadcrumbs,
} from './SiteChrome';

const BASE_URL = 'https://nnmobiletyres.co.uk';
const CANONICAL = `${BASE_URL}/services`;

const ICONS: Record<ServiceIcon, LucideIcon> = {
  wrench: Wrench,
  puncture: CircleDot,
  key: Key,
  emergency: Zap,
  battery: Battery,
};

const META_DESCRIPTION =
  'Mobile tyre fitting, puncture repair, locking wheel nut removal, emergency tyre replacement and jump starts across Oxford and Oxfordshire. 24/7, typically on site in 30-45 minutes, no call-out charge.';

function ServicesIndex() {
  const hubs = getHubLocations().filter(hub => !hub.slug.includes('-corridor'));

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Mobile tyre services in Oxford and Oxfordshire',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.navLabel,
      url: `${BASE_URL}/services/${service.slug}`,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: CANONICAL },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Helmet>
        <title>Mobile Tyre Services Oxford &amp; Oxfordshire | 24/7 | NN Mobile Tyres</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:title" content="Mobile Tyre Services Oxford & Oxfordshire | NN Mobile Tyres" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:image" content={`${BASE_URL}/hero-car.png`} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:site_name" content="NN Mobile Tyres" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile Tyre Services Oxford & Oxfordshire | NN Mobile Tyres" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="noise-overlay" />
      <SiteHeader />

      <Breadcrumbs trail={[{ name: 'Home', to: '/' }, { name: 'Services' }]} />

      <section className="relative py-8 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E84420]/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#E84420]/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-[#E84420] font-medium">24/7 Emergency Service</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Mobile Tyre Services in Oxford &amp; Oxfordshire
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Everything a tyre bay does, done where your car already is. We bring the tyre machine, the balancer and
              the stock to your home, your workplace or the roadside &mdash; 24 hours a day, 365 days a year, typically
              within 30 to 45 minutes, with no call-out charge.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Clock className="w-5 h-5 text-[#E84420]" />
                <span className="text-sm text-gray-300">Typically 30&ndash;45 minutes</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-300">4.9&#9733; &mdash; 151 Google reviews</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Shield className="w-5 h-5 text-[#1B3F8B]" />
                <span className="text-sm text-gray-300">No call-out charge</span>
              </div>
            </div>

            <CallWhatsAppButtons />
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">What we do</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => {
              const Icon = ICONS[service.icon];
              const isRed = service.accent === 'red';
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="glass-card rounded-2xl p-6 flex flex-col hover:border-[#E84420]/30 transition-colors"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                      isRed ? 'bg-[#E84420]/10' : 'bg-[#1B3F8B]/10'
                    }`}
                  >
                    <Icon className={`w-7 h-7 ${isRed ? 'text-[#E84420]' : 'text-[#1B3F8B]'}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isRed ? 'text-[#E84420]' : 'text-[#1B3F8B]'}`}>
                    {service.navLabel}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{service.summary}</p>
                  <span
                    className={`flex items-center gap-2 text-sm font-semibold mt-5 pt-4 border-t border-white/10 ${
                      isRed ? 'text-[#E84420]' : 'text-[#1B3F8B]'
                    }`}
                  >
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}

            <Link
              to="/prices"
              className="glass-card rounded-2xl p-6 flex flex-col hover:border-[#E84420]/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-[#1B3F8B]/10">
                <Shield className="w-7 h-7 text-[#1B3F8B]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1B3F8B]">Prices</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                How our pricing works, what affects the cost of a job, and what is always included in the figure we
                quote you.
              </p>
              <span className="flex items-center gap-2 text-sm font-semibold mt-5 pt-4 border-t border-white/10 text-[#1B3F8B]">
                Read more
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why mobile */}
      <section className="relative py-16 md:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Why use a mobile fitter at all?</h2>
            <p className="text-gray-400 leading-relaxed">
              The obvious answer is that you do not lose half a day. The less obvious one is that a mobile fitter is
              often the only realistic option: a car with a destroyed tyre cannot be driven to a tyre bay, and a car
              with a missing locking wheel nut key cannot have its wheel removed at all until someone turns up with the
              right extraction tools.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The work itself is the same work. We carry a professional tyre machine, a dynamic wheel balancer and a
              calibrated torque wrench, and every tyre we fit is balanced with new weights and torqued to the figure
              your vehicle manufacturer specifies. The difference is where it happens and when &mdash; including at two
              in the morning on a Sunday, which is when a fair share of our calls come in.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We are based in Oxford and cover the whole county plus around 25 miles beyond, taking in the A34, A40,
              A44, A420 and M40 corridors. If you are not sure whether you are inside that, the fastest way to find out
              is to ring and ask.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-[#1B3F8B] text-sm font-semibold tracking-wider uppercase">Service area</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8">Towns we cover</h2>
            <div className="glass-card rounded-3xl p-6 md:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {hubs.map((hub, index) => (
                  <Link
                    key={hub.slug}
                    to={getLocationPath(hub)}
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <MapPin
                      className={`w-4 h-4 flex-shrink-0 ${index % 2 === 0 ? 'text-[#E84420]' : 'text-[#1B3F8B]'}`}
                    />
                    <span className="text-sm group-hover:text-white">{hub.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <Link
                  to="/areas"
                  className="text-sm text-[#E84420] hover:underline font-medium inline-flex items-center gap-1"
                >
                  View all 150+ areas we cover
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E84420]/20 via-transparent to-[#1B3F8B]/20" />
        <div className="absolute inset-0 bg-[#E84420]/10 blur-[100px] scale-50" />
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Tell us what you need</h2>
            <p className="text-gray-400 text-lg mb-8">
              Call or WhatsApp with your tyre size and location and we will quote you before we set off.
            </p>
            <div className="flex justify-center">
              <CallWhatsAppButtons />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingContactButtons />
    </div>
  );
}

export default ServicesIndex;
