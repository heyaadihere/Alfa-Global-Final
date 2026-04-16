import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { insightsData } from '../data/insightsData';

const InsightArticlePage = ({ theme = 'teal' }) => {
  const { slug } = useParams();
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBorder: 'border-teal-200', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950' };

  const article = insightsData.find(a => a.slug === slug);
  if (!article) return <Navigate to="/insights" replace />;

  const currentIndex = insightsData.findIndex(a => a.slug === slug);
  const relatedArticles = insightsData.filter((_, i) => i !== currentIndex).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className={`relative pt-36 pb-20 bg-gradient-to-br ${t.heroBg}`}>
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/insights" className="inline-flex items-center gap-2 text-teal-400 text-sm mb-6 hover:text-teal-300 transition-colors" data-testid="back-to-insights">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
              Back to Insights
            </Link>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="text-teal-400 text-xs uppercase font-semibold tracking-widest">{article.category}</span>
              <span className="text-white/40">|</span>
              <span className="text-white/50 text-sm">{article.date}</span>
              <span className="text-white/40">|</span>
              <span className="text-white/50 text-sm">{article.read} read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">{article.title}</h1>
            <p className="text-white/50 text-sm text-center">By {article.author}</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-12 -mt-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-2xl overflow-hidden shadow-xl">
          <img src={article.image} alt={article.title} className="w-full h-[300px] sm:h-[400px] object-cover" />
        </motion.div>
      </div>

      {/* Article Content */}
      <article className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        {/* Summary */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className={`border-l-4 border-teal-500 pl-6 py-2 mb-12`}>
          <p className="text-gray-700 text-lg leading-relaxed italic">{article.summary}</p>
        </motion.div>

        {/* Sections */}
        {article.sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
            {section.content.split('\n\n').map((paragraph, j) => {
              if (paragraph.startsWith('**') || paragraph.includes('**')) {
                const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                return (
                  <p key={j} className="text-gray-700 leading-relaxed mb-4">
                    {parts.map((part, k) =>
                      part.startsWith('**') && part.endsWith('**')
                        ? <strong key={k} className="text-gray-900 font-semibold">{part.slice(2, -2)}</strong>
                        : <span key={k}>{part}</span>
                    )}
                  </p>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={j} className="list-disc list-inside space-y-2 mb-4 ml-2">
                    {paragraph.split('\n').map((line, k) => (
                      <li key={k} className="text-gray-700 leading-relaxed">
                        {line.replace(/^- /, '').split(/(\*\*[^*]+\*\*)/g).map((part, m) =>
                          part.startsWith('**') && part.endsWith('**')
                            ? <strong key={m} className="text-gray-900 font-semibold">{part.slice(2, -2)}</strong>
                            : <span key={m}>{part}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={j} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>;
            })}
          </motion.div>
        ))}

        {/* Divider */}
        <div className="border-t border-gray-200 my-12"></div>

        {/* Author & CTA */}
        <div className={`bg-teal-50 rounded-2xl p-8 text-center`}>
          <p className="text-sm text-teal-700 font-semibold uppercase tracking-wider mb-2">Published by</p>
          <p className="text-xl font-bold text-gray-900 mb-3">{article.author}</p>
          <p className="text-gray-600 mb-6 text-center">For personalised insights and advisory, connect with our research team.</p>
          <Link to="/contact" className={`inline-flex items-center gap-2 px-6 py-3 ${t.accentBg} text-white font-semibold rounded-lg hover:opacity-90 transition-all`} data-testid="article-contact-btn">
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More from Our Research</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((item, i) => (
              <Link to={`/insights/${item.slug}`} key={item.slug} data-testid={`related-article-${i}`}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`rounded-xl overflow-hidden border ${t.accentBorder} bg-white group hover:shadow-lg transition-all`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className={`text-xs ${t.accentText} uppercase font-semibold`}>{item.category}</span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-2">{item.title}</h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightArticlePage;
