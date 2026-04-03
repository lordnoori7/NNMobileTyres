import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Wrench,
  CircleDot,
  Key,
  Battery,
  Star,
  Shield,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import {
  locations,
  getLocationBySlug,
  getLocationsByHub,
  getLocationByName,
  getLocationPath,
  getHubLocations,
  type LocationArea,
} from '../data/locations';

function LocationPage() {
  const { slug, hubSlug } = useParams<{ slug?: string; hubSlug?: string }>();

  // Determine which location to show
  const locationSlug = slug || hubSlug;
  const location = locationSlug ? getLocationBySlug(locationSlug) : undefined;

  if (!location) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Area Not Found</h1>
          <p className="text-gray-400 mb-8">We couldn't find that location.</p>
          <Link to="/areas" className="btn-primary px-6 py-3 rounded-full text-white font-semibold">
            View All Areas
          </Link>
        </div>
      </div>
    );
  }

  const isHub = location.isHub;
  const isRoadCorridor = location.slug.includes('-corridor');
  const hubLocation = isHub ? location : locations.find(l => l.name === location.hub && l.isHub);
  const microAreas = isHub && !isRoadCorridor ? getLocationsByHub(location.name) : [];

  // Build nearby area links
  const nearbyLocations = location.nearbyAreas
    .map(name => getLocationByName(name))
    .filter((l): l is LocationArea => l !== undefined);

  // Canonical URL
  const baseUrl = 'https://nnmobiletyres.co.uk';
  const canonicalPath = getLocationPath(location);
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  // Breadcrumbs
  const breadcrumbs = [
    { name: 'Home', url: baseUrl },
    { name: 'Areas', url: `${baseUrl}/areas` },
  ];
  if (!isHub && hubLocation) {
    breadcrumbs.push({ name: hubLocation.name, url: `${baseUrl}${getLocationPath(hubLocation)}` });
  }
  breadcrumbs.push({ name: location.name, url: canonicalUrl });

  // FAQs
  const faqs = [
    {
      question: `How quickly can you get to ${location.name}?`,
      answer: `We typically arrive in ${location.name} within ${location.responseTime}. Our mobile tyre fitting van is fully equipped and we operate 24/7, 365 days a year, including bank holidays and weekends. Call us on 07362 638978 for an exact ETA.`,
    },
    {
      question: `What areas near ${location.name} do you cover?`,
      answer: `As well as ${location.name}, we cover ${location.nearbyAreas.join(', ')}, and many more areas across Oxfordshire. Our service radius extends up to 25 miles from our Oxford base. If you're unsure, just give us a call.`,
    },
    {
      question: `How do I get a quote for mobile tyre fitting in ${location.name}?`,
      answer: `Simply call us on 07362 638978 or send a WhatsApp with your tyre size and location. We'll get back to you with a quote straight away. We fit premium tyres from trusted brands like Michelin, Continental, and Pirelli — no hidden callout charges for the ${location.name} area.`,
    },
  ];

  // JSON-LD schemas
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: 'NN Mobile Tyres',
    description: `24/7 mobile tyre fitting service in ${location.name}. Professional tyre fitting, puncture repair, locking wheel nut removal, and jump start services at your location.`,
    url: canonicalUrl,
    telephone: '+447362638978',
    image: `${baseUrl}/hero-car.png`,
    logo: `${baseUrl}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Oxford',
      addressRegion: 'Oxfordshire',
      postalCode: 'OX4 6PW',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.lat,
      longitude: location.lng,
    },
    areaServed: {
      '@type': 'Place',
      name: location.name,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: location.lat,
        longitude: location.lng,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '133',
      bestRating: '5',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '££',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };

  const services = [
    {
      icon: Wrench,
      title: 'Mobile Tyre Fitting',
      desc: `Professional tyre fitting at your door in ${location.name}. We fit premium brands including Michelin, Continental, and Pirelli.`,
    },
    {
      icon: CircleDot,
      title: 'Puncture Repair',
      desc: `Fast on-site puncture assessment and repair in ${location.name}. If the damage meets British Standard BS AU 159, we repair it on the spot to get you back on the road.`,
    },
    {
      icon: Key,
      title: 'Locking Wheel Nut Removal',
      desc: `Lost your locking wheel nut key? Our specialist tools remove locking nuts without damaging your alloys, right at your ${location.name} location.`,
    },
    {
      icon: Battery,
      title: 'Mobile Jump Start',
      desc: `Flat battery in ${location.name}? Our professional jump start equipment gets you going again. We diagnose the cause and advise on replacements.`,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Helmet>
        <title>{`Mobile Tyre Fitting ${location.name} | 24/7 Emergency | NN Mobile Tyres`}</title>
        <meta
          name="description"
          content={`Mobile tyre fitting in ${location.name}. 24/7 emergency service, ${location.responseTime} response time. Puncture repair, locking wheel nut removal, jump starts. 4.9 stars, 133 reviews. Call 07362 638978.`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:title" content={`Mobile Tyre Fitting ${location.name} | NN Mobile Tyres`} />
        <meta
          property="og:description"
          content={`24/7 mobile tyre fitting in ${location.name}. Response time: ${location.responseTime}. Call or WhatsApp now.`}
        />
        <meta property="og:image" content={`${baseUrl}/hero-car.png`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="NN Mobile Tyres" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
              <Link to="/areas" className="text-sm text-gray-300 hover:text-white transition-colors">
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
              <Link to="/areas" className="text-sm text-gray-300 hover:text-white transition-colors">
                Areas
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
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/areas" className="hover:text-white transition-colors">Areas</Link>
          {!isHub && hubLocation && (
            <>
              <ChevronRight className="w-3 h-3" />
              <Link to={getLocationPath(hubLocation)} className="hover:text-white transition-colors">
                {hubLocation.name}
              </Link>
            </>
          )}
          <ChevronRight className="w-3 h-3" />
          <span className="text-white">{location.name}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E84420]/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1B3F8B]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#E84420]/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-[#E84420] font-medium">24/7 Emergency Service</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Mobile Tyre Fitting in{' '}
              <span className="text-[#E84420]">{location.name}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">{location.description}</p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 md:gap-6 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Clock className="w-5 h-5 text-[#E84420]" />
                <span className="text-sm text-gray-300">{location.responseTime}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-300">4.9/5 from 133 reviews</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Shield className="w-5 h-5 text-[#1B3F8B]" />
                <span className="text-sm text-gray-300">Branded Tyres</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-[#1B3F8B]" />
                <span className="text-sm text-gray-300">{location.postcode}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
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

      {/* Services Section */}
      <section className="relative py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <span className="text-[#E84420] text-sm font-semibold tracking-wider uppercase">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Services in {location.name}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="glass-card rounded-2xl p-6">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                    index % 2 === 0 ? 'bg-[#E84420]/10' : 'bg-[#1B3F8B]/10'
                  }`}
                >
                  <service.icon
                    className={`w-7 h-7 ${index % 2 === 0 ? 'text-[#E84420]' : 'text-[#1B3F8B]'}`}
                  />
                </div>
                <h3
                  className={`text-lg font-bold mb-3 ${
                    index % 2 === 0 ? 'text-[#E84420]' : 'text-[#1B3F8B]'
                  }`}
                >
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <span className="text-[#1B3F8B] text-sm font-semibold tracking-wider uppercase">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Why Choose NN Mobile Tyres in {location.name}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Star,
                title: '4.9 Stars on Google',
                desc: '133 five-star Google reviews from real customers across Oxfordshire.',
                color: 'text-yellow-400',
                bg: 'bg-yellow-400/10',
              },
              {
                icon: Clock,
                title: '24/7 Availability',
                desc: 'Day or night, weekends and bank holidays. We never close.',
                color: 'text-[#E84420]',
                bg: 'bg-[#E84420]/10',
              },
              {
                icon: Shield,
                title: 'Premium Brands',
                desc: 'Michelin, Continental, Pirelli, Bridgestone — all carried in our van.',
                color: 'text-[#1B3F8B]',
                bg: 'bg-[#1B3F8B]/10',
              },
              {
                icon: MapPin,
                title: 'We Come to You',
                desc: `No garage trip needed. We fit tyres at your home, work, or roadside in ${location.name}.`,
                color: 'text-green-400',
                bg: 'bg-green-400/10',
              },
            ].map((item, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 text-center">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 ${item.bg}`}>
                  <item.icon className={`w-7 h-7 ${item.color} ${item.title.includes('Stars') ? 'fill-yellow-400' : ''}`} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas + Hub Micro-areas */}
      <section className="relative py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* If this is a hub, show its micro-areas */}
          {isHub && microAreas.length > 0 && (
            <div className="mb-16">
              <div className="text-center mb-12">
                <span className="text-[#E84420] text-sm font-semibold tracking-wider uppercase">Areas We Cover</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4">
                  Areas Near {location.name}
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {microAreas.map((area) => (
                  <Link
                    key={area.slug}
                    to={getLocationPath(area)}
                    className="flex items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#E84420]/30 transition-all group"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#E84420] flex-shrink-0" />
                    <span className="text-sm group-hover:text-white transition-colors">{area.name}</span>
                    <ChevronRight className="w-3 h-3 text-gray-600 ml-auto group-hover:text-[#E84420] transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Nearby areas */}
          <div>
            <div className="text-center mb-12">
              <span className="text-[#1B3F8B] text-sm font-semibold tracking-wider uppercase">Nearby</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                {isHub && microAreas.length > 0 ? 'Other Hubs Nearby' : `Areas Near ${location.name}`}
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {nearbyLocations.map((area) => (
                <Link
                  key={area.slug}
                  to={getLocationPath(area)}
                  className="flex items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#1B3F8B]/30 transition-all group"
                >
                  <MapPin className="w-4 h-4 text-[#1B3F8B] flex-shrink-0" />
                  <span className="text-sm group-hover:text-white transition-colors">{area.name}</span>
                </Link>
              ))}
            </div>

            {/* Link to all areas */}
            <div className="text-center mt-8">
              <Link
                to="/areas"
                className="inline-flex items-center gap-2 text-[#E84420] hover:underline text-sm font-semibold"
              >
                View all areas we cover
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#E84420] text-sm font-semibold tracking-wider uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Frequently Asked Questions — {location.name}
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E84420]/20 via-transparent to-[#1B3F8B]/20" />
        <div className="absolute inset-0 bg-[#E84420]/10 blur-[100px] scale-50" />

        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Need a Tyre in {location.name}?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              We are available 24/7. Call us now and we will be with you within {location.responseTime}.
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
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="NN Mobile Tyres" className="h-12 w-auto" />
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                Professional mobile tyre fitting service available 24/7 across Oxfordshire and beyond. We come to you,
                wherever you are.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Popular Areas</h4>
              <ul className="space-y-3">
                {getHubLocations().slice(0, 6).map(hub => (
                  <li key={hub.slug}>
                    <Link
                      to={getLocationPath(hub)}
                      className="text-gray-400 hover:text-[#E84420] transition-colors"
                    >
                      {hub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+447362638978"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#E84420] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    07362 638978
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:naeem.mobiletyre@gmail.com"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#E84420] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    naeem.mobiletyre@gmail.com
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-2 text-gray-400">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span>Oxford, Oxfordshire, UK</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>24/7 Service</span>
                  </div>
                </li>
              </ul>
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

export default LocationPage;
