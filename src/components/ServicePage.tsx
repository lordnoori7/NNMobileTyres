import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Wrench,
  CircleDot,
  Key,
  Battery,
  Zap,
  Clock,
  Star,
  Shield,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  MapPin,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { getServiceBySlug, services, type ServiceIcon } from '../data/services';
import { getHubLocations, getLocationPath } from '../data/locations';
import { blogPosts } from '../data/blog-posts';
import {
  SiteHeader,
  SiteFooter,
  FloatingContactButtons,
  CallWhatsAppButtons,
  Breadcrumbs,
} from './SiteChrome';

const BASE_URL = 'https://nnmobiletyres.co.uk';

const ICONS: Record<ServiceIcon, LucideIcon> = {
  wrench: Wrench,
  puncture: CircleDot,
  key: Key,
  emergency: Zap,
  battery: Battery,
};

function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-8">We couldn&apos;t find that service.</p>
          <Link to="/services" className="btn-primary px-6 py-3 rounded-full text-white font-semibold">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = ICONS[service.icon];
  const isRed = service.accent === 'red';
  const accentText = isRed ? 'text-[#E84420]' : 'text-[#1B3F8B]';
  const accentBg = isRed ? 'bg-[#E84420]/10' : 'bg-[#1B3F8B]/10';
  const canonicalUrl = `${BASE_URL}/services/${service.slug}`;

  const otherServices = services.filter(s => s.slug !== service.slug);
  const hubs = getHubLocations().filter(hub => !hub.slug.includes('-corridor'));
  const relatedPosts = service.relatedBlog
    .map(postSlug => blogPosts.find(post => post.slug === postSlug))
    .filter((post): post is (typeof blogPosts)[number] => post !== undefined);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.h1,
    serviceType: service.serviceType,
    description: service.metaDescription,
    url: canonicalUrl,
    provider: {
      '@type': 'AutomotiveBusiness',
      name: 'NN Mobile Tyres',
      telephone: '+447362638978',
      url: BASE_URL,
      image: `${BASE_URL}/hero-car.png`,
      logo: `${BASE_URL}/logo.png`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Andromeda Close',
        addressLocality: 'Oxford',
        addressRegion: 'Oxfordshire',
        postalCode: 'OX4 6PW',
        addressCountry: 'GB',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '133',
        bestRating: '5',
        worstRating: '1',
      },
    },
    areaServed: hubs.map(hub => ({ '@type': 'City', name: hub.name })),
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: { '@type': 'ContactPoint', telephone: '+447362638978', contactType: 'customer service' },
      serviceUrl: canonicalUrl,
    },
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: service.navLabel, item: canonicalUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:image" content={`${BASE_URL}/hero-car.png`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="NN Mobile Tyres" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.metaTitle} />
        <meta name="twitter:description" content={service.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="noise-overlay" />
      <SiteHeader />

      <Breadcrumbs
        trail={[{ name: 'Home', to: '/' }, { name: 'Services', to: '/services' }, { name: service.navLabel }]}
      />

      {/* Hero — Call + WhatsApp sit above the fold on every service page */}
      <section className="relative py-8 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E84420]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1B3F8B]/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#E84420]/30 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-[#E84420] font-medium">24/7 Emergency Service</span>
              </div>

              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${accentBg}`}>
                <Icon className={`w-8 h-8 ${accentText}`} />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">{service.h1}</h1>

              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">{service.intro}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <Clock className="w-5 h-5 text-[#E84420]" />
                  <span className="text-sm text-gray-300">Typically 30&ndash;45 minutes</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-300">4.9&#9733; &mdash; 133 Google reviews</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <Shield className="w-5 h-5 text-[#1B3F8B]" />
                  <span className="text-sm text-gray-300">No call-out charge</span>
                </div>
              </div>

              <CallWhatsAppButtons />

              <p className="text-sm text-gray-500 mt-4">
                Prefer to know the cost first?{' '}
                <Link to="/prices" className="text-[#E84420] hover:underline">
                  See how our pricing works
                </Link>
                .
              </p>
            </div>

            {service.image && (
              <div className="hidden lg:block">
                <img
                  src={service.image.src}
                  alt={service.image.alt}
                  width={service.image.width}
                  height={service.image.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-3xl border border-white/10 object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl">
            <span className={`text-sm font-semibold tracking-wider uppercase ${accentText}`}>Included</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8">What&apos;s included</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {service.included.map(item => (
                <li key={item} className="flex items-start gap-3 glass-card rounded-2xl p-4">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${accentText}`} />
                  <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-16 md:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <span className={`text-sm font-semibold tracking-wider uppercase ${accentText}`}>Simple process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-10">How it works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.steps.map((step, index) => (
              <div key={step.title} className="glass-card rounded-2xl p-6 h-full relative overflow-hidden">
                <div className="absolute -top-4 -right-4 text-8xl font-bold text-white/5">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      index % 2 === 0
                        ? 'bg-gradient-to-br from-[#E84420] to-[#C23515]'
                        : 'bg-gradient-to-br from-[#1B3F8B] to-[#122D66]'
                    }`}
                  >
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body copy */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl space-y-12">
            {service.sections.map(section => (
              <div key={section.heading}>
                <h2 className="text-2xl md:text-3xl font-bold mb-5">{section.heading}</h2>
                {section.paragraphs.map(paragraph => (
                  <p key={paragraph.slice(0, 40)} className="text-gray-400 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map(bullet => (
                      <li key={bullet} className="flex items-start gap-3">
                        <ChevronRight className={`w-4 h-4 flex-shrink-0 mt-1 ${accentText}`} />
                        <span className="text-gray-300 text-sm leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="relative py-16 md:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl">
            <span className={`text-sm font-semibold tracking-wider uppercase ${accentText}`}>Coverage</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Where we cover for {service.navLabel.toLowerCase()}
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              We are based in Oxford and cover the whole of Oxfordshire plus up to 25 miles beyond, including the A34,
              A40, A44, A420 and M40 corridors. If you are not sure whether we reach you, call and ask.
            </p>
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
                <Link to="/areas" className="text-sm text-[#E84420] hover:underline font-medium inline-flex items-center gap-1">
                  View all 150+ areas we cover
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className={`text-sm font-semibold tracking-wider uppercase ${accentText}`}>FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                {service.navLabel} &mdash; frequently asked questions
              </h2>
            </div>
            <div className="space-y-4">
              {service.faqs.map(faq => (
                <div key={faq.question} className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related reading + other services */}
      <section className="relative py-16 md:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {relatedPosts.length > 0 && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Useful reading</h2>
                <ul className="space-y-3">
                  {relatedPosts.map(post => (
                    <li key={post.slug}>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="glass-card rounded-2xl p-5 flex items-start gap-3 hover:border-[#E84420]/30 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 text-[#E84420] flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-300">{post.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Other services</h2>
              <ul className="space-y-3">
                {otherServices.map(other => {
                  const OtherIcon = ICONS[other.icon];
                  return (
                    <li key={other.slug}>
                      <Link
                        to={`/services/${other.slug}`}
                        className="glass-card rounded-2xl p-5 flex items-start gap-3 hover:border-[#E84420]/30 transition-colors"
                      >
                        <OtherIcon
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            other.accent === 'red' ? 'text-[#E84420]' : 'text-[#1B3F8B]'
                          }`}
                        />
                        <span>
                          <span className="block text-sm font-semibold">{other.navLabel}</span>
                          <span className="block text-xs text-gray-500 mt-1">{other.summary}</span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E84420]/20 via-transparent to-[#1B3F8B]/20" />
        <div className="absolute inset-0 bg-[#E84420]/10 blur-[100px] scale-50" />
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Need {service.navLabel.toLowerCase()} now?</h2>
            <p className="text-gray-400 text-lg mb-8">
              We are available 24/7 across Oxford and Oxfordshire, and we will quote you before we travel.
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

export default ServicePage;
