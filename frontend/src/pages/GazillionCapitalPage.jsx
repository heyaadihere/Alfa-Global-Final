import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GazillionCapitalPage = ({ theme = 'gold' }) => {
  const themes = {
    gold: { accentText: 'text-amber-600', accentBg: 'bg-amber-600', accentBgLight: 'bg-amber-50', accentBorder: 'border-amber-200', gradient: 'from-amber-600 to-amber-700', heroBg: 'from-slate-950 via-slate-900 to-slate-950', heroAccent: 'text-amber-400' },
    silver: { accentText: 'text-gray-700', accentBg: 'bg-gray-700', accentBgLight: 'bg-gray-100', accentBorder: 'border-gray-300', gradient: 'from-gray-700 to-gray-800', heroBg: 'from-gray-950 via-gray-900 to-gray-950', heroAccent: 'text-gray-300' },
    purple: { accentText: 'text-purple-600', accentBg: 'bg-purple-600', accentBgLight: 'bg-purple-50', accentBorder: 'border-purple-200', gradient: 'from-purple-600 to-purple-700', heroBg: 'from-purple-950 via-slate-950 to-purple-950', heroAccent: 'text-purple-400' },
    teal: { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', accentBorder: 'border-teal-200', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950', heroAccent: 'text-teal-400' }
  };
  const t = themes[theme] || themes.gold;

  const services = [
    { title: 'Financial Product Distribution', desc: 'We simplify access to financial products including equity, mutual funds, insurance, fixed income, and alternative investments, connecting investors with opportunities that suit their risk appetite and goals.' },
    { title: 'Stock Broking & Trading', desc: 'Our stock broking platform offers seamless, tech enabled trading services for retail and institutional investors, ensuring efficiency, transparency, and real time market access.' },
    { title: 'Investor Education', desc: 'Gazillion Capital is committed to investor empowerment. Through training, resources, and expert led sessions, we help clients develop financial literacy and make smarter investment decisions.' },
    { title: 'Corporate Training & Employee Engagement', desc: 'We offer tailored corporate training programs in financial literacy, investor awareness, and wealth building strategies to help organizations enhance employee financial wellness.' }
  ];

  const whyChoose = [
    'Client centric approach with personalized guidance and support',
    'Comprehensive access to multi asset financial products',
    'Focus on education, awareness, and investor empowerment',
    'Technology driven platforms for seamless execution',
    'Commitment to trust, transparency, and long term client success'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className={`relative py-32 bg-gradient-to-br ${t.heroBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} src="https://websitesbytechpioneers.com/alfaglobalnew/image/gazillon-logo-removebg-preview.png" alt="Gazillion Capital" className="h-20 w-auto mx-auto mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Gazillion Capital</motion.h1>
          <p className="text-white/60 text-lg">Private Limited</p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/gazillion-capital.png" alt="Gazillion Capital" className="rounded-2xl shadow-xl w-full" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Democratizing Wealth for the Next Generation</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Financial Product Distribution & Investor Empowerment</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Gazillion Capital Private Limited is a next generation financial services company under the Alfa Global Group of Companies, focused on financial product distribution, stock broking, investor education, and corporate training.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to simplify access to financial markets and products while empowering investors through knowledge and confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Gazillion Capital?</h2>
              <ul className="space-y-4">
                {whyChoose.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 text-gray-600">
                    <svg className={`w-6 h-6 ${t.accentText} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className={`p-8 rounded-2xl bg-gradient-to-br ${t.gradient} text-white`}>
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="text-white/90 leading-relaxed">
                At Gazillion Capital, we believe that wealth should be accessible, understandable, and achievable. Through our products, platforms, and programs, we aim to build a generation of confident, informed investors, ensuring every client receives the guidance and support they need to succeed.
              </p>
              <p className="text-white/90 mt-4 leading-relaxed">
                Whether you're an individual investor, a corporate, or an institution, Gazillion Capital offers innovative, client focused financial solutions and investment services, built on a foundation of trust, expertise, and client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`py-16 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <Link to="/contact" className={`inline-flex items-center gap-2 px-8 py-4 ${t.accentBg} text-white font-semibold rounded-lg hover:opacity-90 transition-all`}>
            Invest With Us <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GazillionCapitalPage;
