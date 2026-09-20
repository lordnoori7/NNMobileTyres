import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  MessageCircle,
  Clock,
  Shield,
  Star,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  CreditCard,
  Banknote,
} from 'lucide-react';
import { prices, getPricesByCategory } from '../data/prices';
import { services } from '../data/services';
import {
  SiteHeader,
  SiteFooter,
  FloatingContactButtons,
  CallWhatsAppButtons,
  Breadcrumbs,
  PHONE_HREF,
  WHATSAPP_HREF,
  PHONE_DISPLAY,
} from './SiteChrome';

const BASE_URL = 'https://nnmobiletyres.co.uk';
const CANONICAL = `${BASE_URL}/prices`;

const META_DESCRIPTION =
  'How NN Mobile Tyres pricing works: no call-out charge, a quote agreed by phone or WhatsApp before we travel, and fitting, balancing, a new valve and old tyre disposal always included. Oxford and Oxfordshire, 24/7.';

const INCLUDED = [
  'Fitting the tyre with a professional tyre machine',
  'Dynamic wheel balancing with new weights',
  'A new valve on every tyre we fit',
  'Inflation to your vehicle placard pressure',
  'Torque-wrench tightening to manufacturer specification',
  'Removal and licensed disposal of your old tyre',
  'Travel to you anywhere in our coverage area',
];

const FACTORS = [
  {
    title: 'Tyre size',
    body: 'The single biggest factor. A 175/65 R14 on a small hatchback and a 255/35 R19 on a performance saloon are not remotely the same product, and the gap between them is wide. Larger diameters and lower profiles cost more.',
  },
  {
    title: 'Brand tier',
    body: 'Budget, mid-range or premium. Premium brands such as Michelin, Continental, Pirelli and Bridgestone cost more and generally deliver shorter wet braking distances and longer tread life. We will quote across the tiers and tell you what we would fit on our own car.',
  },
  {
    title: 'What the job actually is',
    body: 'A puncture repair is not the same job as a replacement, and a locking wheel nut extraction is different again. Tell us what has happened and we will price the right job rather than the most expensive one.',
  },
  {
    title: 'Time of day',
    body: 'We answer at any hour and there is never a call-out charge. A call in the middle of the night can affect the overall figure, and if it does we will tell you on the phone before we travel.',
  },
  {
    title: 'Distance',
    body: 'Oxford and the main Oxfordshire towns are all within our standard area. Somewhere right on the edge of our range, or well outside it, may affect the price. Ask when you call and we will be straight with you.',
  },
  {
    title: 'Vehicle and tyre type',
    body: 'Run-flats, van tyres with higher load ratings, 4x4 fitments and TPMS sensor work all add cost compared with a standard car tyre. Mention them when you ring so the quote you get is the price you pay.',
  },
];

const FAQS = [
  {
    question: 'Why are there no prices listed on this page?',
    answer:
      'Because a single number would be misleading. Tyre prices move with size, brand and stock, and quoting "from" figures that almost nobody actually pays is how customers end up arguing on a driveway. We give you a real figure for your actual tyre, before we travel, and that is the figure you pay.',
  },
  {
    question: 'Do you charge a call-out fee?',
    answer:
      'No. There is no call-out charge anywhere in our coverage area, at any hour of the day or night, including weekends and bank holidays.',
  },
  {
    question: 'Is the quote you give on the phone the final price?',
    answer:
      'Yes, provided what we find matches what you described. If we arrive and the job turns out to be different — a puncture that cannot legally be repaired, for example, or a second damaged tyre — we stop, explain, and requote before doing any more work.',
  },
  {
    question: 'Is balancing charged separately?',
    answer:
      'No. Fitting, dynamic balancing, a new valve, correct inflation, torque-wrench tightening and disposal of the old tyre are all included in the price we quote for fitting a tyre.',
  },
  {
    question: 'How do I pay?',
    answer:
      'Cash or card. We take card payments on site, so you do not need to find a cash machine in the middle of the night.',
  },
  {
    question: 'Can you quote from a photo?',
    answer:
      'Yes, and it is the fastest way. Send a photo of the tyre sidewall on WhatsApp and we will read the size off it and come back to you with a price.',
  },
  {
    question: 'Do you price-match?',
    answer:
      'Tell us what you have been quoted and by whom. We will be honest about whether we can match it, and if we cannot we will tell you that rather than waste your time.',
  },
];

function PricesPage() {
  const priceGroups = getPricesByCategory();
  const hasPrices = prices.length > 0;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(faq => ({
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
      { '@type': 'ListItem', position: 2, name: 'Prices', item: CANONICAL },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Helmet>
        <title>Prices &amp; How Our Pricing Works | NN Mobile Tyres Oxford</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:title" content="Prices & How Our Pricing Works | NN Mobile Tyres" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:image" content={`${BASE_URL}/hero-car.png`} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:site_name" content="NN Mobile Tyres" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Prices & How Our Pricing Works | NN Mobile Tyres" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="noise-overlay" />
      <SiteHeader />

      <Breadcrumbs trail={[{ name: 'Home', to: '/' }, { name: 'Prices' }]} />

      {/* Hero */}
      <section className="relative py-8 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E84420]/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#E84420]/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-[#E84420] font-medium">No call-out charge, ever</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Prices &amp; How Our Pricing Works
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              We quote you a real figure for your actual tyre, by phone or WhatsApp, before we travel &mdash; and that
              is the figure you pay. No call-out charge, no arriving-on-the-driveway surprises, and fitting, balancing,
              a new valve and disposal of your old tyre always included.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Shield className="w-5 h-5 text-[#E84420]" />
                <span className="text-sm text-gray-300">No call-out charge</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Clock className="w-5 h-5 text-[#1B3F8B]" />
                <span className="text-sm text-gray-300">Quote before we travel</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-300">4.9&#9733; &mdash; 133 Google reviews</span>
              </div>
            </div>

            <CallWhatsAppButtons label={`Get a quote — ${PHONE_DISPLAY}`} />
          </div>
        </div>
      </section>

      {/* Price table (renders only once real prices exist in src/data/prices.ts) */}
      {hasPrices && (
        <section className="relative py-16 md:py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our prices</h2>
              <div className="space-y-8">
                {priceGroups.map(group => (
                  <div key={group.category} className="glass-card rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-5 text-[#E84420]">{group.category}</h3>
                    <ul className="divide-y divide-white/10">
                      {group.rows.map(row => (
                        <li key={row.item} className="flex items-start justify-between gap-6 py-3">
                          <span>
                            <span className="block text-sm text-gray-200">{row.item}</span>
                            {row.note && <span className="block text-xs text-gray-500 mt-1">{row.note}</span>}
                          </span>
                          <span className="text-sm font-semibold whitespace-nowrap">{row.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Prices are a guide. Call or WhatsApp for a firm quote on your exact tyre size and location.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Quote-first explainer */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl space-y-6">
            <span className="text-[#E84420] text-sm font-semibold tracking-wider uppercase">How it works</span>
            <h2 className="text-3xl md:text-4xl font-bold">You get the price before we get in the van</h2>
            <p className="text-gray-400 leading-relaxed">
              Tyre pricing genuinely does depend on your specific tyre, so rather than publish a number that would be
              wrong for most people, we quote properly. Ring us or send a WhatsApp with your tyre size and roughly
              where you are, and we will come back with a firm figure for the tyre and the fitting. If you are happy
              with it, we set off. If you are not, you have lost nothing but a two-minute phone call.
            </p>
            <p className="text-gray-400 leading-relaxed">
              That figure holds, as long as what we find matches what you told us. If we arrive and the job is
              genuinely different &mdash; a puncture that turns out not to be legally repairable, a second tyre that is
              also damaged, a locking wheel nut nobody mentioned &mdash; we stop, show you, explain the options and
              requote. We never carry on and present you with a bigger bill at the end.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The fastest route to a quote is a photo. Take a picture of the tyre sidewall and send it on WhatsApp; we
              will read the size off it ourselves, which removes the most common source of confusion.
            </p>
          </div>
        </div>
      </section>

      {/* What affects the price */}
      <section className="relative py-16 md:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-[#1B3F8B] text-sm font-semibold tracking-wider uppercase">The variables</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8">What affects the price</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {FACTORS.map((factor, index) => (
                <div key={factor.title} className="glass-card rounded-2xl p-6">
                  <h3 className={`text-lg font-bold mb-3 ${index % 2 === 0 ? 'text-[#E84420]' : 'text-[#1B3F8B]'}`}>
                    {factor.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{factor.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl">
            <span className="text-[#E84420] text-sm font-semibold tracking-wider uppercase">Always included</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">What the price covers</h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              These are not extras and they are not line items. When we quote you for fitting a tyre, every one of
              these is already in the number.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {INCLUDED.map(item => (
                <li key={item} className="flex items-start gap-3 glass-card rounded-2xl p-4">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#E84420]" />
                  <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="relative py-16 md:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl">
            <span className="text-[#1B3F8B] text-sm font-semibold tracking-wider uppercase">Payment</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">How to pay</h2>
            <div className="grid sm:grid-cols-2 gap-5 mb-6">
              <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <CreditCard className="w-6 h-6 text-[#1B3F8B] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Card</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We take card payments on site, so a midnight callout does not mean hunting for a cash machine.
                  </p>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <Banknote className="w-6 h-6 text-[#E84420] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Cash</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Cash is welcome too. Payment is taken once the job is finished and you are happy with it.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              If the work is for a business or a fleet and you need an invoice, say so when you book and we will sort
              the paperwork out.
            </p>
          </div>
        </div>
      </section>

      {/* Per-service links */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Pricing by service</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {services.map(service => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="glass-card rounded-2xl p-5 flex items-start gap-3 hover:border-[#E84420]/30 transition-colors h-full"
                  >
                    <ChevronRight
                      className={`w-4 h-4 flex-shrink-0 mt-1 ${
                        service.accent === 'red' ? 'text-[#E84420]' : 'text-[#1B3F8B]'
                      }`}
                    />
                    <span>
                      <span className="block text-sm font-semibold">{service.navLabel}</span>
                      <span className="block text-xs text-gray-500 mt-1">{service.summary}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 mt-6 text-sm text-[#E84420] hover:underline font-medium"
            >
              See all services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#E84420] text-sm font-semibold tracking-wider uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">Pricing questions</h2>
            </div>
            <div className="space-y-4">
              {FAQS.map(faq => (
                <div key={faq.question} className="glass-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E84420]/20 via-transparent to-[#1B3F8B]/20" />
        <div className="absolute inset-0 bg-[#E84420]/10 blur-[100px] scale-50" />
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Get a quote in two minutes</h2>
            <p className="text-gray-400 text-lg mb-8">
              Send us your tyre size &mdash; or just a photo of the sidewall &mdash; and where you are. We will come
              back with a firm price before we travel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={PHONE_HREF}
                className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold text-lg flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp for a quote
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              24/7, 365 days a year, across Oxford and Oxfordshire. No call-out charge.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingContactButtons />
    </div>
  );
}

export default PricesPage;
