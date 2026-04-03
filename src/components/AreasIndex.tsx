import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import {
  getHubLocations,
  getLocationsByHub,
  getRoadCorridors,
  getLocationPath,
} from '../data/locations';

function AreasIndex() {
  const hubs = getHubLocations();
  const corridors = getRoadCorridors();
  const baseUrl = 'https://nnmobiletyres.co.uk';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Areas', item: `${baseUrl}/areas` },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Helmet>
        <title>Areas We Cover | Mobile Tyre Fitting Oxfordshire | NN Mobile Tyres</title>
        <meta
          name="description"
          content="Mobile tyre fitting across Oxfordshire. Oxford, Abingdon, Banbury, Bicester, Witney, Didcot, and 150+ towns and villages. 24/7 emergency service. Call 07362 638978."
        />
        <link rel="canonical" href={`${baseUrl}/areas`} />
        <meta property="og:title" content="Areas We Cover | NN Mobile Tyres" />
        <meta
          property="og:description"
          content="We cover 150+ areas across Oxfordshire for mobile tyre fitting, puncture repair, and emergency roadside assistance."
        />
        <meta property="og:url" content={`${baseUrl}/areas`} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="NN Mobile Tyres" className="h-12 md:h-14 w-auto" />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/areas" className="text-sm text-white font-medium">
                Areas
              </Link>
              <a
                href="tel:+447362638978"
                className="flex items-center gap-2 px-4 py-2 rounded-full btn-primary text-white text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                07362 638978
              </a>
            </div>
            <div className="md:hidden flex items-center gap-3">
              <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <a
                href="tel:+447362638978"
                className="flex items-center gap-2 px-3 py-2 rounded-full btn-primary text-white text-xs font-semibold"
              >
                <Phone className="w-3 h-3" />
                Call
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="pt-20 md:pt-24 pb-4 px-4 sm:px-6 lg:px-8 xl:px-12">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white">Areas</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E84420]/10 rounded-full blur-[120px] animate-pulse" />
        </div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Areas We <span className="text-[#E84420]">Cover</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
              NN Mobile Tyres provides 24/7 mobile tyre fitting across Oxford and Oxfordshire. We cover over 150 towns, villages, and road corridors. Find your area below.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+447362638978"
                className="btn-primary px-6 py-3 rounded-full text-white font-semibold flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call 07362 638978
              </a>
              <a
                href="https://wa.me/447362638978"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold flex items-center gap-2 hover:bg-white/5 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hub Directory */}
      <section className="relative py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="space-y-16">
            {hubs.map((hub) => {
              const microAreas = getLocationsByHub(hub.name);
              return (
                <div key={hub.slug} className="glass-card rounded-3xl p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#E84420]/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#E84420]" />
                      </div>
                      <div>
                        <Link
                          to={getLocationPath(hub)}
                          className="text-2xl font-bold hover:text-[#E84420] transition-colors"
                        >
                          {hub.name}
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{hub.responseTime}</span>
                          <span className="text-gray-700">|</span>
                          <span>{hub.postcode}</span>
                        </div>
                      </div>
                    </div>
                    <Link
                      to={getLocationPath(hub)}
                      className="hidden sm:flex items-center gap-1 text-sm text-[#E84420] hover:underline font-medium"
                    >
                      View {hub.name}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {microAreas.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                      {microAreas.map((area) => (
                        <Link
                          key={area.slug}
                          to={getLocationPath(area)}
                          className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-[#E84420]/20 transition-all group"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#E84420] flex-shrink-0 transition-colors" />
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors truncate">
                            {area.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Road Corridors */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <span className="text-[#1B3F8B] text-sm font-semibold tracking-wider uppercase">Emergency Coverage</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Road Corridor Coverage</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Broken down on a major road? We provide emergency tyre fitting along these key routes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {corridors.map((corridor) => (
              <Link
                key={corridor.slug}
                to={getLocationPath(corridor)}
                className="glass-card rounded-2xl p-6 hover:border-[#E84420]/30 transition-all group"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#E84420] transition-colors">
                  {corridor.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{corridor.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{corridor.responseTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E84420]/20 via-transparent to-[#1B3F8B]/20" />
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Can&apos;t Find Your Area?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              We cover up to 25 miles from Oxford. Call or WhatsApp us and we will confirm if we can reach you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+447362638978"
                className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call 07362 638978
              </a>
              <a
                href="https://wa.me/447362638978"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Link to="/">
                <img src="/logo.png" alt="NN Mobile Tyres" className="h-10 w-auto" />
              </Link>
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} NN Mobile Tyres. All rights reserved.
              </p>
            </div>
            <p className="text-sm text-gray-500">Emergency Mobile Tyre Fitting Service — 24/7</p>
          </div>
        </div>
      </footer>

      {/* Floating Emergency Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="tel:+447362638978"
          className="w-14 h-14 rounded-full bg-[#E84420] text-white flex items-center justify-center shadow-lg glow-red animate-pulse-red hover:scale-110 transition-transform"
          aria-label="Call Emergency"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a
          href="https://wa.me/447362638978"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

export default AreasIndex;
