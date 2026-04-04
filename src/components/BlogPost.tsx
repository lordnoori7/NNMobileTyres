import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  MessageCircle,
  Clock,
  ChevronRight,
  User,
  Calendar,
  BookOpen,
  Tag,
} from 'lucide-react';
import { getBlogPostBySlug, getRelatedPosts } from '../data/blog-posts';

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">We could not find that article.</p>
          <Link to="/blog" className="btn-primary px-6 py-3 rounded-full text-white font-semibold">
            View All Guides
          </Link>
        </div>
      </div>
    );
  }

  const baseUrl = 'https://nnmobiletyres.co.uk';
  const canonicalUrl = `${baseUrl}/blog/${post.slug}`;
  const relatedPosts = getRelatedPosts(post.relatedSlugs);

  // Extract FAQs from content for schema
  const faqRegex = /<h3>(.*?)<\/h3>\s*<p>(.*?)<\/p>/g;
  const faqs: { question: string; answer: string }[] = [];
  let match;
  const contentAfterFAQ = post.content.split('Frequently Asked Questions')[1] || '';
  while ((match = faqRegex.exec(contentAfterFAQ)) !== null) {
    faqs.push({
      question: match[1].replace(/<[^>]*>/g, ''),
      answer: match[2].replace(/<[^>]*>/g, ''),
    });
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    author: {
      '@type': 'Organization',
      name: 'NN Mobile Tyres',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'NN Mobile Tyres',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };

  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="NN Mobile Tyres" />
        <meta property="article:published_time" content={post.publishedDate} />
        <meta property="article:modified_time" content={post.updatedDate} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
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
              <Link to="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">
                Blog
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
          <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white line-clamp-1">{post.title}</span>
        </nav>
      </div>

      {/* Article */}
      <article className="relative py-8 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-[#E84420]/10 text-[#E84420]"
                >
                  <Tag className="w-2.5 h-2.5" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-10 pb-10 border-b border-white/10">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishedDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Content */}
            <div
              className="blog-content prose prose-invert prose-lg max-w-none
                [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-white
                [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-white
                [&_p]:text-gray-300 [&_p]:leading-relaxed [&_p]:mb-4
                [&_ul]:space-y-2 [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6
                [&_li]:text-gray-300
                [&_strong]:text-white [&_strong]:font-semibold
                [&_a]:text-[#E84420] [&_a]:underline [&_a]:hover:text-[#ff5a3a] [&_a]:transition-colors"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E84420]/20 via-transparent to-[#1B3F8B]/20" />
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Professional Help?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              NN Mobile Tyres comes to your location across Oxfordshire — 24 hours a day, 7 days a week.
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

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="relative py-16 md:py-24">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Guides</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.slice(0, 3).map((related) => (
                  <Link
                    key={related.slug}
                    to={`/blog/${related.slug}`}
                    className="glass-card rounded-2xl p-6 hover:border-[#E84420]/30 transition-all group"
                  >
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Clock className="w-3 h-3" />
                      <span>{related.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#E84420] transition-colors leading-tight">
                      {related.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-3">{related.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm text-[#E84420] font-medium">
                      <BookOpen className="w-4 h-4" />
                      Read more
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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

export default BlogPost;
