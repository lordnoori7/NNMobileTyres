import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Wrench,
  CircleDot,
  Key,
  Battery,
  ChevronRight,
  Star,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Services data
// Steps data
const steps = [
  {
    number: '01',
    title: 'Call or WhatsApp Us',
    description: 'Tell us your tyre size and location'
  },
  {
    number: '02',
    title: 'Get a Quote',
    description: 'Receive instant transparent pricing'
  },
  {
    number: '03',
    title: 'We Come to You',
    description: 'Our mobile van arrives at your location'
  },
  {
    number: '04',
    title: 'Job Done',
    description: 'Back on the road in minutes'
  }
];

// Coverage areas
const coverageAreas = [
  'Oxford', 'Banbury', 'Bicester', 'Witney', 'Didcot',
  'Wantage', 'Abingdon', 'Kidlington', 'Thame', 'Wallingford',
  'Faringdon', 'Chipping Norton', 'Charlbury', 'Woodstock', 'Burford'
];

// Google Reviews (real reviews from Google Business Profile - 4.9 stars, 133 reviews)
const googleReviews = [
  {
    name: 'Jonny Smiley',
    rating: 5,
    text: 'I have just had my tyre fixed. This gentleman kept me informed on what time he was coming & replaced my blowout tyre after hitting a pothole. Very friendly, professional and best of all £100 cheaper than all the other mobile tyres.',
    date: 'a month ago'
  },
  {
    name: 'H A Hussainy',
    rating: 5,
    text: 'Absolutely a 5-star experience! He arrived exactly on time and was incredibly professional from start to finish. It was refreshing to deal with someone who takes such pride in their work; the fitting was flawless.',
    date: '2 months ago'
  },
  {
    name: 'Madhuri Dutta',
    rating: 5,
    text: 'Naeem was excellent. Our car had a puncture in the morning and he managed to fix it the same afternoon even though it was a Sunday. He did an excellent job at a reasonable cost. I absolutely recommend NN Mobile Tyres.',
    date: 'a month ago'
  },
  {
    name: 'Deb Evans',
    rating: 5,
    text: 'Brilliant service! Naeem came out quickly, was very professional and the price was very reasonable. Would highly recommend to anyone needing mobile tyre fitting.',
    date: '2 months ago'
  },
  {
    name: 'Chris Hartley',
    rating: 5,
    text: 'Fantastic service from start to finish. Called in the evening and Naeem came out first thing next morning. Great communication, fair price and quality work. Will definitely use again.',
    date: '3 months ago'
  },
  {
    name: 'L SJ',
    rating: 5,
    text: 'Naeem was friendly and arrived promptly. He was very efficient and the price was very competitive. Saved me the hassle of going to a garage. Highly recommended!',
    date: 'a month ago'
  }
];

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/NN+Mobile+Tyres+24%2F7/@51.718346,-1.1976922,17z/data=!4m8!3m7!1s0x42dba725c6d52f17:0xf72c5e6cab6a16f4!8m2!3d51.718346!4d-1.1976922!9m1!1b1!16s%2Fg%2F11lcz_7x0l';

// Tyre sizes for dropdown
const tyreSizes = [
  '155/70 R13', '165/70 R13', '175/65 R14', '185/60 R14', '185/65 R14',
  '195/50 R15', '195/55 R15', '195/60 R15', '195/65 R15', '205/55 R16',
  '205/60 R16', '215/55 R16', '215/60 R16', '225/55 R16', '205/50 R17',
  '215/45 R17', '215/50 R17', '225/45 R17', '225/50 R17', '235/45 R17',
  '225/40 R18', '225/45 R18', '235/40 R18', '235/45 R18', '245/40 R18',
  '255/35 R19', '255/40 R19', '275/35 R19', '245/35 R20', '275/30 R20',
  'Other - I\'ll specify'
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    tyreSize: '',
    location: '',
    urgency: 'standard'
  });
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [currentAreaIndex, setCurrentAreaIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Cycle through coverage areas
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAreaIndex((prev) => (prev + 1) % coverageAreas.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.2
      });
      
      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out',
        delay: 0.4
      });
      
      gsap.from('.hero-cta', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.6
      });
      
      gsap.from('.hero-car', {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.4
      });

      // Scroll-triggered animations
      gsap.utils.toArray<HTMLElement>('.section-reveal').forEach((section) => {
        gsap.fromTo(section,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // Steps animation
      gsap.from('.step-item', {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.steps-container',
          start: 'top 80%'
        }
      });
    });

    return () => ctx.revert();
  }, []);

  // Handle WhatsApp form submission
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.tyreSize || !formData.location) {
      toast.error('Please fill in all fields');
      return;
    }

    const urgencyText = formData.urgency === 'emergency' ? 'EMERGENCY - Need ASAP' : 'Standard booking';
    const message = `Hello NN Mobile Tyres!%0A%0AI need a quote for:%0A• Tyre Size: ${formData.tyreSize}%0A• Location: ${formData.location}%0A• Urgency: ${urgencyText}%0A%0APlease reply with your price. Thank you!`;
    
    const whatsappUrl = `https://wa.me/447362638978?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Opening WhatsApp...');
  };

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* 5-Star Review Ticker - Top Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-black/90 border-b border-white/5 overflow-hidden py-2">
        <div className="review-ticker">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-6 shrink-0">
              {[
                { name: 'Jonny S.', text: '£100 cheaper than others!' },
                { name: 'H A Hussainy', text: 'Absolutely a 5-star experience!' },
                { name: 'Madhuri D.', text: 'Excellent job at a reasonable cost' },
                { name: 'Deb Evans', text: 'Brilliant service, very professional' },
                { name: 'Chris H.', text: 'Great communication, fair price' },
                { name: 'L SJ', text: 'Very efficient, competitive pricing' },
                { name: 'Sarah M.', text: 'Arrived within 30 minutes!' },
                { name: 'James T.', text: 'Saved me on the motorway' },
                { name: 'Emma L.', text: 'Incredible 24/7 service' },
                { name: 'David R.', text: 'Perfectly balanced, great quality' },
              ].map((r, i) => (
                <div key={`t-${setIdx}-${i}`} className="flex items-center gap-2 shrink-0 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white text-xs font-medium whitespace-nowrap">{r.name}</span>
                  <span className="text-gray-500 text-xs">—</span>
                  <span className="text-gray-400 text-xs whitespace-nowrap">&quot;{r.text}&quot;</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <nav className="fixed top-[36px] left-0 right-0 z-50 glass">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="NN Mobile Tyres"
                className="h-12 md:h-14 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-sm text-gray-300 hover:text-white transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-sm text-gray-300 hover:text-white transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection('quote')} className="text-sm text-gray-300 hover:text-white transition-colors">
                Get Quote
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm text-gray-300 hover:text-white transition-colors">
                Reviews
              </button>
              <button onClick={() => scrollToSection('coverage')} className="text-sm text-gray-300 hover:text-white transition-colors">
                Coverage
              </button>
              <a
                href="tel:+447362638978"
                className="flex items-center gap-2 px-4 py-2 rounded-full btn-primary text-white text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                07362 638978
              </a>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-300">
                Services
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left py-2 text-gray-300">
                How It Works
              </button>
              <button onClick={() => scrollToSection('quote')} className="block w-full text-left py-2 text-gray-300">
                Get Quote
              </button>
              <button onClick={() => scrollToSection('reviews')} className="block w-full text-left py-2 text-gray-300">
                Reviews
              </button>
              <button onClick={() => scrollToSection('coverage')} className="block w-full text-left py-2 text-gray-300">
                Coverage
              </button>
              <a
                href="tel:+447362638978"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full btn-primary text-white font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-28 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E84420]/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1B3F8B]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#E84420]/30">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-[#E84420] font-medium">24/7 Emergency Service</span>
              </div>
              
              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Flat Tyre in{' '}
                <span
                  key={currentAreaIndex}
                  className="inline-block area-cycle-text"
                  style={{ color: currentAreaIndex % 2 === 0 ? '#3B82F6' : '#F97316' }}
                >
                  {coverageAreas[currentAreaIndex]}
                </span>
                ?{' '}
                We&apos;ll Be There in 30 Minutes
              </h1>
              
              <p className="hero-subtitle text-lg md:text-xl text-gray-400 max-w-xl">
                24/7 mobile tyre fitting across Oxford &amp; Oxfordshire. Call or WhatsApp — we&apos;ll be with you in{' '}
                <span className="text-white font-semibold">30-45 minutes</span>,
                wherever you are.
              </p>
              
              {/* Trust indicators */}
              <div className="hero-subtitle flex flex-wrap gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#E84420]" />
                  <span className="text-sm text-gray-300">30-45 Min Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#1B3F8B]" />
                  <span className="text-sm text-gray-300">Michelin, Pirelli, Continental</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-300">4.9★ — 133 Reviews</span>
                </div>
              </div>
              
              {/* CTAs */}
              <div className="hero-cta flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('quote')}
                  className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Instant Quote
                </button>
                <a 
                  href="tel:+447362638978"
                  className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
            
            {/* Right content - Car image */}
            <div className="hero-car relative hidden lg:block">
              <div className="relative animate-float">
                <img 
                  src="/hero-car.png" 
                  alt="NN Mobile Tyres van — 24/7 mobile tyre fitting service in Oxford, Oxfordshire" 
                  className="w-full max-w-2xl mx-auto drop-shadow-2xl"
                />
                {/* Glow effect behind car */}
                <div className="absolute inset-0 bg-[#E84420]/20 blur-[80px] -z-10 rounded-full scale-75" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#E84420] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" ref={formRef} className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E84420]/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 section-reveal">
              <span className="text-[#E84420] text-sm font-semibold tracking-wider uppercase">Quick Quote</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4">Get Your Quote</h2>
              <p className="text-gray-400 mt-4">
                Fill in your details and we&apos;ll send you a quote directly on WhatsApp
              </p>
            </div>

            <div className="glass rounded-3xl p-6 md:p-10 section-reveal">
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                {/* Tyre Size */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Tyre Size <span className="text-[#E84420]">*</span>
                  </label>
                  <select
                    value={formData.tyreSize}
                    onChange={(e) => setFormData({...formData, tyreSize: e.target.value})}
                    className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#E84420] focus:ring-2 focus:ring-[#E84420]/20 transition-all outline-none appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23E84420' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                  >
                    <option value="" className="bg-[#1a1a1a]">Select your tyre size</option>
                    {tyreSizes.map((size) => (
                      <option key={size} value={size} className="bg-[#1a1a1a]">{size}</option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-2">
                    Found on the sidewall of your tyre (e.g., 205/55 R16)
                  </p>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Your Location <span className="text-[#E84420]">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <Input
                      type="text"
                      placeholder="Enter your postcode or area"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#E84420] focus:ring-[#E84420]/20"
                    />
                  </div>
                </div>

                {/* Urgency */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    How urgent is this?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, urgency: 'standard'})}
                      className={`p-4 rounded-xl border transition-all text-left ${
                        formData.urgency === 'standard'
                          ? 'border-[#1B3F8B] bg-[#1B3F8B]/10'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      <Clock className="w-5 h-5 mb-2 text-[#1B3F8B]" />
                      <span className="block font-medium text-sm">Standard</span>
                      <span className="block text-xs text-gray-500">Within 2-4 hours</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, urgency: 'emergency'})}
                      className={`p-4 rounded-xl border transition-all text-left ${
                        formData.urgency === 'emergency'
                          ? 'border-[#E84420] bg-[#E84420]/10'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      <Zap className="w-5 h-5 mb-2 text-[#E84420]" />
                      <span className="block font-medium text-sm">Emergency</span>
                      <span className="block text-xs text-gray-500">ASAP - Stranded</span>
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full btn-primary py-4 rounded-xl text-white font-semibold text-lg flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send via WhatsApp
                  <ChevronRight className="w-5 h-5" />
                </button>

                <p className="text-center text-xs text-gray-500">
                  We&apos;ll reply with a quote within minutes. No obligation to book.
                </p>
              </form>
            </div>

            {/* Tyre Size Guide */}
            <div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10 section-reveal">
              <p className="text-sm text-gray-400 mb-3 font-medium text-center">Not sure of your tyre size? Here&apos;s where to find it:</p>
              <img
                src="/tyre-guide.jpg"
                alt="Tyre size guide showing 205/55 R16 91V - Width, Profile, Rim Size and Speed Rating labels on tyre sidewall"
                className="w-full max-w-md mx-auto rounded-lg"
              />
              <p className="text-xs text-gray-500 mt-3 text-center">
                Look on the sidewall of your tyre. You only need the Width / Profile / Rim Size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 md:py-32">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16 section-reveal">
            <span className="text-[#E84420] text-sm font-semibold tracking-wider uppercase">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Services We Offer</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {[
              {
                icon: Wrench,
                title: 'Tyre Fitting',
                desc: 'Our dedicated team is committed to providing top-notch tyre services at your doorstep.',
                blog: 'Whether you need a single tyre replaced or a full set, NN Mobile Tyres delivers professional mobile tyre fitting across Oxford and Oxfordshire. We carry a wide range of tyres from budget to premium brands including Michelin, Continental, Pirelli, and Bridgestone. Our fully-equipped van arrives at your home, workplace, or roadside location with everything needed for a fast, safe fitting. Every tyre is balanced on-site using professional equipment to ensure a smooth ride. We handle cars, vans, SUVs, and 4x4s — no job is too big or too small. With same-day availability and 24/7 emergency callouts, you never have to wait or waste time at a garage.'
              },
              {
                icon: CircleDot,
                title: 'Puncture Repair',
                desc: 'Our dedicated team is committed to providing top-notch tyre services at your doorstep.',
                blog: 'A puncture doesn\'t have to ruin your day. NN Mobile Tyres offers fast, reliable puncture repair wherever you are in Oxfordshire. Our technicians assess the damage on arrival — if the puncture is in the legal repair zone and meets British Standard BS AU 159, we\'ll fix it on the spot for a fraction of the cost of a new tyre. If the damage is too severe, we carry replacement tyres on board to get you back on the road immediately. We repair punctures caused by nails, screws, glass, and potholes. Don\'t risk driving on a slow puncture — call us and we\'ll come to you within 30-45 minutes, day or night.'
              },
              {
                icon: Key,
                title: 'Locking Wheel Nut Removal',
                desc: 'Benefit from our expertise in the efficient and specialized removal of locking wheel nuts.',
                blog: 'Lost your locking wheel nut key? Don\'t worry — it happens more often than you\'d think. NN Mobile Tyres specialises in non-destructive locking wheel nut removal using professional extraction tools. Whether your key has been lost, damaged, or rounded off, our experienced technicians can remove the locking nuts without damaging your alloy wheels. We carry a comprehensive set of removal tools and can handle all major brands and locking nut types. Once removed, we can fit replacement locking nuts or standard nuts so you\'re back on the road safely. This service is available 24/7 across Oxford and surrounding areas.'
              },
              {
                icon: Battery,
                title: 'Mobile Car Jump Start',
                desc: 'Benefit from our expertise in the efficient and specialized jump start service.',
                blog: 'Flat battery? NN Mobile Tyres provides a rapid mobile jump start service across Oxfordshire. Whether your battery has died overnight, in a car park, or at the roadside, we\'ll be with you within 30-45 minutes. Our professional-grade jump start equipment works on all vehicle types including cars, vans, and SUVs. We\'ll diagnose why your battery failed — whether it\'s age, a faulty alternator, or lights left on — and advise on whether you need a replacement. If a new battery is needed, we can source and fit one on the spot. Available 24/7, 365 days a year, because breakdowns don\'t wait for business hours.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 section-reveal flex flex-col"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${index % 2 === 0 ? 'bg-[#E84420]/10' : 'bg-[#1B3F8B]/10'}`}>
                  <service.icon className={`w-8 h-8 ${index % 2 === 0 ? 'text-[#E84420]' : 'text-[#1B3F8B]'}`} />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${index % 2 === 0 ? 'text-[#E84420]' : 'text-[#1B3F8B]'}`}>{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">{service.desc}</p>

                {expandedService === index && (
                  <div className="text-gray-300 text-sm mb-4 leading-relaxed border-t border-white/10 pt-4 mt-2">
                    {service.blog}
                  </div>
                )}

                <button
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className={`flex items-center gap-2 text-sm font-semibold mt-auto pt-4 border-t border-white/10 ${index % 2 === 0 ? 'text-[#E84420]' : 'text-[#1B3F8B]'}`}
                >
                  {expandedService === index ? 'SHOW LESS' : 'READ MORE'}
                  <ArrowRight className={`w-4 h-4 transition-transform ${expandedService === index ? 'rotate-90' : ''}`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-20 md:py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16 section-reveal">
            <span className="text-[#1B3F8B] text-sm font-semibold tracking-wider uppercase">Simple Process</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">How It Works</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Getting your tyres fitted has never been easier. Four simple steps to get you back on the road.
            </p>
          </div>
          
          <div className="steps-container grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="step-item relative">
                <div className="glass-card rounded-2xl p-6 h-full relative overflow-hidden group hover:border-[#E84420]/30 transition-colors">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 text-8xl font-bold text-white/5">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${index % 2 === 0 ? 'bg-gradient-to-br from-[#E84420] to-[#C23515]' : 'bg-gradient-to-br from-[#1B3F8B] to-[#122D66]'}`}>
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                  
                  {/* Connector line (hidden on last item and mobile) */}
                  {index < steps.length - 1 && (
                    <div className={`hidden lg:block absolute top-1/2 -right-3 w-6 h-px ${index % 2 === 0 ? 'bg-gradient-to-r from-[#E84420]/50 to-transparent' : 'bg-gradient-to-r from-[#1B3F8B]/50 to-transparent'}`} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area Section */}
      <section id="coverage" className="relative py-20 md:py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="section-reveal">
              <span className="text-[#1B3F8B] text-sm font-semibold tracking-wider uppercase">Service Area</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4">Areas We Cover</h2>
              <p className="text-gray-400 mt-4 mb-8">
                Based in Oxford, we serve Oxfordshire and up to 25 miles beyond. 
                If you&apos;re unsure if we cover your area, just give us a call!
              </p>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#1B3F8B]/10 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-[#1B3F8B]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Base Location</p>
                  <p className="font-semibold">Oxford, Oxfordshire</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+447362638978"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#E84420]/30 text-[#E84420] hover:bg-[#E84420]/10 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Check Your Area
                </a>
                <Link
                  to="/areas"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1B3F8B]/30 text-[#1B3F8B] hover:bg-[#1B3F8B]/10 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  View All Areas
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="section-reveal">
              <div className="glass-card rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {coverageAreas.map((area, index) => (
                    <Link
                      key={area}
                      to={`/areas/${area.toLowerCase().replace(/ /g, '-')}`}
                      className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${index % 2 === 0 ? 'text-[#E84420]' : 'text-[#1B3F8B]'}`} />
                      <span className="text-sm group-hover:text-white">{area}</span>
                      <ChevronRight className="w-3 h-3 text-gray-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
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
        </div>
      </section>

      {/* Google Reviews Section */}
      <section id="reviews" className="relative py-20 md:py-32">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16 section-reveal">
            <span className="text-[#E84420] text-sm font-semibold tracking-wider uppercase">Google Reviews</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Rated 4.9/5 on Google</h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-400 text-lg">from 133 reviews</span>
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-[#E84420] hover:underline"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              See all reviews on Google
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {googleReviews.map((review, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 section-reveal flex flex-col"
              >
                {/* Google + Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <svg className="w-5 h-5 opacity-50" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 flex-1">&quot;{review.text}&quot;</p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${index % 2 === 0 ? 'bg-gradient-to-br from-[#E84420] to-[#C23515]' : 'bg-gradient-to-br from-[#1B3F8B] to-[#122D66]'}`}>
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{review.name}</p>
                      <p className="text-xs text-gray-500">Google Review</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-600">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA to leave a review */}
          <div className="text-center mt-12 section-reveal">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-primary text-white font-semibold"
            >
              <Star className="w-5 h-5" />
              Leave Us a Review on Google
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Our Work - Auto-scrolling Carousel */}
      <section id="gallery" className="relative py-20 md:py-32 overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12 section-reveal">
            <span className="text-[#E84420] text-sm font-semibold tracking-wider uppercase">Our Work</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">See Us in Action</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Real photos from real jobs. We come to you anywhere in Oxfordshire, day or night.
            </p>
          </div>
        </div>

        {/* Row 1 - scrolls left */}
        <div className="carousel-track mb-4">
          <div className="carousel-scroll-left">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-4 shrink-0">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={`r1-${setIdx}-${i}`} className="shrink-0 w-64 h-44 rounded-xl overflow-hidden">
                    <img
                      src={`/work-${i + 1}.jpg`}
                      alt={`NN Mobile Tyres work photo ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls right */}
        <div className="carousel-track">
          <div className="carousel-scroll-right">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-4 shrink-0">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={`r2-${setIdx}-${i}`} className="shrink-0 w-64 h-44 rounded-xl overflow-hidden">
                    <img
                      src={`/work-${i + 21}.jpg`}
                      alt={`NN Mobile Tyres work photo ${i + 21}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E84420]/20 via-transparent to-[#1B3F8B]/20" />
        <div className="absolute inset-0 bg-[#E84420]/10 blur-[100px] scale-50" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto text-center section-reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Need Emergency Tyre Assistance?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              We&apos;re available 24/7. Call us now and we&apos;ll be with you within 30-45 minutes.
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
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="/logo.png" 
                  alt="NN Mobile Tyres" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Professional mobile tyre fitting service available 24/7 across Oxfordshire and beyond. 
                We come to you, wherever you are.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E84420]/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-[#E84420] transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('how-it-works')} className="text-gray-400 hover:text-[#E84420] transition-colors">
                    How It Works
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('quote')} className="text-gray-400 hover:text-[#E84420] transition-colors">
                    Get Quote
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('coverage')} className="text-gray-400 hover:text-[#E84420] transition-colors">
                    Coverage Area
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+447362638978" className="flex items-center gap-2 text-gray-400 hover:text-[#E84420] transition-colors">
                    <Phone className="w-4 h-4" />
                    07362 638978
                  </a>
                </li>
                <li>
                  <a href="mailto:naeem.mobiletyre@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-[#E84420] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} NN Mobile Tyres. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Emergency Mobile Tyre Fitting Service
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Emergency Button */}
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

export default App;
