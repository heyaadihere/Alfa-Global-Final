import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { insightsData } from '../data/insightsData';

const InsightsPage = ({ theme = 'teal' }) => {
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', accentBorder: 'border-teal-200', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950' };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className={`relative pt-36 pb-16 bg-gradient-to-br ${t.heroBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Insights & Research
          </motion.h1>
          <p className="text-white/60 text-lg text-center">Expert Analysis & Market Intelligence</p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {insightsData.map((item, i) => (
              <Link to={`/insights/${item.slug}`} key={item.slug} data-testid={`insight-card-${i}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`rounded-2xl overflow-hidden border ${t.accentBorder} group hover:shadow-xl transition-all h-full`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs ${t.accentText} uppercase font-semibold tracking-wide`}>{item.category}</span>
                      <span className="text-gray-400 text-xs">{item.date}</span>
                      <span className="text-gray-400 text-xs">- {item.read} read</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.summary}</p>
                    <span className={`${t.accentText} text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all`}>
                      Read Article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-16 bg-gradient-to-r ${t.gradient}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Informed</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-center">
            Subscribe to our newsletter for the latest market insights, research reports, and investment strategies delivered to your inbox.
          </p>
          <Link
            to="/contact"
            data-testid="insights-cta-btn"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all"
          >
            Contact Our Research Team
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
