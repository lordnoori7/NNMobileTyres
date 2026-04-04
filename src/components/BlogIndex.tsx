import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  MessageCircle,
  Clock,
  ChevronRight,
  BookOpen,
  Tag,
} from 'lucide-react';
import { getAllBlogPosts } from '../data/blog-posts';

function BlogIndex() {
  const posts = getAllBlogPosts();
  const baseUrl = 'https://nnmobiletyres.co.uk';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Helmet>
        <title>Tyre Guides & Expert Advice | NN Mobile Tyres Blog</title>
        <meta
          name="description"
          content="Helpful tyre guides from the NN Mobile Tyres team. Learn about tyre safety, tread depth, puncture repair, tyre pressure, and more. Expert advice for Oxfordshire drivers."
        />
        <link rel="canonical" href={`${baseUrl}/blog`} />
        <meta property="og:title" content="Tyre Guides & Expert Advice | NN Mobile Tyres" />
        <meta
          property="og:description"
          content="Helpful tyre guides and expert advice from the NN Mobile Tyres team in Oxford."
        />
        <meta property="og:url" content={`${baseUrl}/blog`} />
        <meta property="og:type" content="website" />
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
              <Link to="/blog" className="text-sm text-white font-medium">
                Blog
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
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white">Blog</span>
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
              Tyre Guides & <span className="text-[#E84420]">Expert Advice</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
              Helpful guides from the NN Mobile Tyres team. Practical tips, safety advice, and everything you need to know about looking after your tyres.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="glass-card rounded-2xl p-6 hover:border-[#E84420]/30 transition-all group flex flex-col"
              >
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <span className="text-gray-700">|</span>
                  <span>{new Date(post.publishedDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-[#E84420] transition-colors leading-tight">
                  {post.title}
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400"
                    >
                      <Tag className="w-2.5 h-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-[#E84420] font-medium">
                  <BookOpen className="w-4 h-4" />
                  Read more
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              Need Tyre Help?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Whether it is a flat tyre, a puncture, or you just need new tyres fitted, NN Mobile Tyres comes to you across Oxfordshire — 24/7.
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

export default BlogIndex;
