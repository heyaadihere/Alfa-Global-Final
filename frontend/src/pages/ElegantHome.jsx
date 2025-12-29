import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const ElegantHome = ({ theme = 'gold' }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeService, setActiveService] = useState(0);
  const [calculatorValues, setCalculatorValues] = useState({ amount: 1000000, years: 10, rate: 12 });

  const themes = {
    gold: {
      accent: 'amber-600',
      accentText: 'text-amber-600',
      accentBg: 'bg-amber-600',
      accentBgLight: 'bg-amber-50',
      accentBorder: 'border-amber-200',
      accentHover: 'hover:bg-amber-700',
      gradient: 'from-amber-600 to-amber-700',
      lightGradient: 'from-amber-50 via-white to-amber-50/30'
    },
    silver: {
      accent: 'gray-600',
      accentText: 'text-gray-600',
      accentBg: 'bg-gray-700',
      accentBgLight: 'bg-gray-50',
      accentBorder: 'border-gray-200',
      accentHover: 'hover:bg-gray-800',
      gradient: 'from-gray-700 to-gray-800',
      lightGradient: 'from-gray-50 via-white to-gray-50/30'
    }
  };

  const t = themes[theme];

  // Animated Counter
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        let startTime;
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, [isInView, end, duration]);

    return [count, ref];
  };

  const stats = [
    { value: 5000, suffix: '+', prefix: '₹', unit: 'Cr', label: 'Assets Under Management' },
    { value: 25, suffix: '+', prefix: '', unit: '', label: 'Years of Excellence' },
    { value: 500, suffix: '+', prefix: '', unit: '', label: 'Satisfied Clients' },
    { value: 15, suffix: '+', prefix: '', unit: '', label: 'Global Markets' }
  ];

  const services = [
    {
      icon: '💎',
      title: 'Alternative Investments & Funds',
      desc: 'Structured investment platforms, AIFs, hedge-style LLPs, and specialized capital strategies designed for sophisticated investors.',
      features: ['Private Equity Funds', 'Hedge Fund Strategies', 'Alternative Investment Funds', 'Structured Products'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'
    },
    {
      icon: '🏛️',
      title: 'Strategic Ventures & Holdings',
      desc: 'Proprietary investments in companies, joint ventures, and scalable businesses across sectors with focus on long-term value creation.',
      features: ['Direct Equity Investments', 'Joint Venture Partnerships', 'Growth Capital', 'Management Buyouts'],
      image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=800'
    },
    {
      icon: '🚀',
      title: 'High-Impact Projects',
      desc: 'Initiating and funding transformative projects in finance, infrastructure, shipping, manufacturing, and technology.',
      features: ['Infrastructure Development', 'Manufacturing Projects', 'Maritime Investments', 'Technology Ventures'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
    },
    {
      icon: '🌍',
      title: 'Global Partnerships & Advisory',
      desc: 'Cross-border alliances, family office structures, and institutional collaborations that unlock global opportunities.',
      features: ['Family Office Services', 'Cross-Border M&A', 'Strategic Advisory', 'Institutional Consulting'],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800'
    }
  ];

  const coreValues = [
    { icon: '⭐', title: 'Excellence', desc: 'We pursue the highest standards in everything we do.' },
    { icon: '🛡️', title: 'Integrity', desc: 'Transparency and ethical conduct form our foundation.' },
    { icon: '💡', title: 'Innovation', desc: 'Continuously evolving our approaches and strategies.' },
    { icon: '🤝', title: 'Partnership', desc: 'Building lasting relationships based on trust.' },
    { icon: '🎯', title: 'Impact', desc: 'Creating positive change beyond financial returns.' },
    { icon: '👁️', title: 'Vision', desc: 'Focusing on sustainable multi-generational growth.' }
  ];

  const team = [
    { name: 'Rajesh Kumar', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
    { name: 'Priya Sharma', role: 'Chief Investment Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
    { name: 'Vikram Singh', role: 'Head of Research', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
    { name: 'Anita Desai', role: 'Client Relations Director', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' }
  ];

  const testimonials = [
    { content: "Alfa Global has transformed our investment strategy. Their expertise in global markets is unmatched. We've seen consistent growth even in volatile markets.", author: "Suresh Mehta", role: "CEO, Mehta Industries", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" },
    { content: "Professional, transparent, and results-driven. The team's dedication to understanding our unique needs made all the difference.", author: "Kavita Reddy", role: "Family Office Principal", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
    { content: "Their research-driven approach has consistently delivered above-market returns. A truly world-class wealth management experience.", author: "Amit Patel", role: "HNI Investor", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" }
  ];

  const faqs = [
    { q: "What is the minimum investment amount?", a: "Our services cater to high-net-worth individuals with investable assets starting from ₹1 Crore. We offer customized solutions based on your financial goals." },
    { q: "How do you ensure portfolio security?", a: "We employ institutional-grade security measures including encrypted communications, segregated accounts, and regular third-party audits." },
    { q: "What are your fee structures?", a: "We operate on a transparent fee model combining asset-based fees and performance-linked incentives aligned with your success." },
    { q: "How often will I receive portfolio updates?", a: "You'll receive monthly comprehensive reports, quarterly performance reviews, and 24/7 access to our client portal." }
  ];

  const insights = [
    { title: 'Market Outlook 2025', category: 'Research', date: 'Dec 2024', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400', read: '5 min' },
    { title: 'Alternative Investments Guide', category: 'Education', date: 'Nov 2024', image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400', read: '8 min' },
    { title: 'Global Economic Trends', category: 'Analysis', date: 'Oct 2024', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400', read: '6 min' }
  ];

  const offices = [
    { city: 'Mumbai', address: 'Nariman Point' },
    { city: 'GIFT City', address: 'GIFT IFSC' },
    { city: 'Delhi NCR', address: 'Noida' },
    { city: 'Bengaluru', address: 'Ulsoor Road' }
  ];

  const calculateReturns = () => {
    const { amount, years, rate } = calculatorValues;
    return Math.round(amount * Math.pow(1 + rate / 100, years));
  };

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const StatCounter = ({ value, suffix, prefix, unit, label }) => {
    const [count, ref] = useCounter(value);
    return (
      <motion.div ref={ref} className="text-center">
        <div className={`text-4xl md:text-5xl font-bold ${t.accentText}`}>
          {prefix}{count}{unit}{suffix}
        </div>
        <div className="text-gray-500 text-sm mt-2 uppercase tracking-wider">{label}</div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center bg-gradient-to-br ${t.lightGradient}`}>
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 right-20 w-96 h-96 ${t.accentBgLight} rounded-full blur-3xl opacity-50`} />
          <div className={`absolute bottom-20 left-20 w-64 h-64 ${t.accentBgLight} rounded-full blur-3xl opacity-30`} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className={`inline-block px-4 py-2 rounded-full ${t.accentBgLight} ${t.accentText} text-sm font-medium mb-6 border ${t.accentBorder}`}>
                ✨ Trusted by 500+ HNI Families
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Building Wealth.
                <br />
                <span className={t.accentText}>Creating Legacies.</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                Alfa Global Group is a diversified global organization driven by vision, innovation, and impact. We invest in ideas, businesses, and projects that shape industries and create sustainable value across generations.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/contact"
                  className={`px-8 py-4 ${t.accentBg} ${t.accentHover} text-white font-semibold rounded-full transition-all hover:shadow-lg flex items-center gap-2`}
                >
                  Start Your Journey
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/services"
                  className={`px-8 py-4 border-2 ${t.accentBorder} ${t.accentText} font-semibold rounded-full hover:bg-gray-50 transition-all`}
                >
                  Explore Services
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-200">
                {['SEBI Registered', 'IFSCA Compliant', 'ISO Certified'].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                    <svg className={`w-5 h-5 ${t.accentText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {badge}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className={`absolute -inset-4 ${t.accentBgLight} rounded-3xl`} />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800"
                  alt="Alfa Global"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent`} />
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${t.accentBgLight} rounded-full flex items-center justify-center`}>
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Assets Managed</p>
                    <p className={`text-xl font-bold ${t.accentText}`}>₹5000+ Cr</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 bg-gradient-to-r ${t.gradient}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center text-white">
                <StatCounter {...stat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                A Legacy of Excellence in Wealth Management
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our strength lies in combining capital markets expertise with entrepreneurial execution to build opportunities that go beyond conventional boundaries. We believe wealth is not just financial capital—it is the ability to create, transform, and leave behind something meaningful.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With presence across Mumbai, GIFT City, Delhi NCR, and Bengaluru, we serve clients globally with personalized wealth solutions tailored to their unique needs.
              </p>
              <Link to="/about" className={`inline-flex items-center gap-2 ${t.accentText} font-medium hover:underline`}>
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {offices.map((office, i) => (
                <div key={i} className={`p-6 rounded-xl ${t.accentBgLight} border ${t.accentBorder}`}>
                  <div className={`w-10 h-10 ${t.accentBg} text-white rounded-full flex items-center justify-center mb-3 text-sm font-bold`}>
                    {office.city.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-gray-900">{office.city}</h3>
                  <p className="text-gray-500 text-sm">{office.address}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Interactive */}
      <section className={`py-20 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Service Tabs */}
            <div className="space-y-4">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveService(i)}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${
                    activeService === i
                      ? `bg-white shadow-lg border-l-4 ${theme === 'gold' ? 'border-amber-500' : 'border-gray-500'}`
                      : 'bg-white/50 hover:bg-white border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{service.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Service Detail */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl sticky top-32"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{services[activeService].title}</h3>
                <ul className="space-y-3 mb-6">
                  {services[activeService].features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-600">
                      <svg className={`w-5 h-5 ${t.accentText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className={`inline-flex items-center gap-2 px-6 py-3 ${t.accentBg} text-white rounded-full font-medium ${t.accentHover} transition-all`}>
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Our Foundation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl border ${t.accentBorder} text-center hover:shadow-lg transition-all`}
              >
                <span className="text-3xl mb-3 block">{value.icon}</span>
                <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                <p className="text-gray-500 text-xs">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Calculator */}
      <section className={`py-20 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Planning Tool</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Investment Calculator</h2>
                <p className="text-gray-600 mb-8">Estimate your potential returns with our calculator.</p>
                
                <div className="space-y-6">
                  {[
                    { label: 'Investment Amount (₹)', key: 'amount', min: 100000, max: 10000000, step: 100000, format: (v) => `₹${(v / 100000).toFixed(1)} Lakhs` },
                    { label: 'Investment Period', key: 'years', min: 1, max: 30, step: 1, format: (v) => `${v} Years` },
                    { label: 'Expected Return', key: 'rate', min: 5, max: 25, step: 1, format: (v) => `${v}% p.a.` }
                  ].map((slider) => (
                    <div key={slider.key}>
                      <label className="text-gray-700 text-sm mb-2 block">{slider.label}</label>
                      <input
                        type="range"
                        min={slider.min}
                        max={slider.max}
                        step={slider.step}
                        value={calculatorValues[slider.key]}
                        onChange={(e) => setCalculatorValues({ ...calculatorValues, [slider.key]: parseInt(e.target.value) })}
                        className={`w-full h-2 rounded-full appearance-none cursor-pointer ${t.accentBg}`}
                      />
                      <div className={`${t.accentText} font-semibold mt-2`}>{slider.format(calculatorValues[slider.key])}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`p-8 rounded-2xl bg-gradient-to-br ${t.gradient} text-white text-center`}>
                <p className="text-white/80 mb-2">Estimated Future Value</p>
                <div className="text-5xl font-bold mb-4">₹{(calculateReturns() / 10000000).toFixed(2)} Cr</div>
                <p className="text-white/60 text-sm mb-6">After {calculatorValues.years} years</p>
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div className="p-4 rounded-xl bg-white/10">
                    <p className="text-white/60 text-xs">Principal</p>
                    <p className="text-white font-semibold">₹{(calculatorValues.amount / 100000).toFixed(1)}L</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/10">
                    <p className="text-white/60 text-xs">Returns</p>
                    <p className="text-white font-semibold">₹{((calculateReturns() - calculatorValues.amount) / 100000).toFixed(1)}L</p>
                  </div>
                </div>
                <Link to="/contact" className="mt-6 inline-block px-6 py-3 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-all">
                  Start Investing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Meet Our Experts</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group text-center"
              >
                <div className={`relative overflow-hidden rounded-2xl mb-4 border-4 border-transparent group-hover:${theme === 'gold' ? 'border-amber-200' : 'border-gray-200'} transition-all`}>
                  <img src={member.image} alt={member.name} className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-gray-900 font-semibold">{member.name}</h3>
                <p className={`${t.accentText} text-sm`}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Clients Say</h2>
          </motion.div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                <img src={testimonials[activeTestimonial].image} alt="" className={`w-20 h-20 rounded-full mx-auto mb-6 border-4 ${t.accentBorder}`} />
                <p className="text-xl md:text-2xl text-gray-700 italic mb-6 max-w-3xl mx-auto">"{testimonials[activeTestimonial].content}"</p>
                <p className="text-gray-900 font-semibold">{testimonials[activeTestimonial].author}</p>
                <p className={`${t.accentText} text-sm`}>{testimonials[activeTestimonial].role}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === i ? t.accentBg : 'bg-gray-200'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center mb-12">
            <div>
              <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Insights</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">Latest Research</h2>
            </div>
            <Link to="/insights" className={`${t.accentText} hover:underline flex items-center gap-2`}>
              View All <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`rounded-2xl overflow-hidden border ${t.accentBorder} group hover:shadow-lg transition-all`}
              >
                <div className="aspect-video overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs ${t.accentText} uppercase font-medium`}>{item.category}</span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="text-gray-400 text-xs">{item.read} read</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`py-20 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Common Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                >
                  <span className="text-gray-900 font-medium">{faq.q}</span>
                  <svg className={`w-5 h-5 ${t.accentText} transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-600">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className={`relative p-12 md:p-16 rounded-3xl overflow-hidden bg-gradient-to-r ${t.gradient}`}>
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Legacy?</h2>
              <p className="text-white/80 mb-8">Join 500+ families who trust us with their wealth. Schedule a consultation with our experts today.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all">
                Schedule Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElegantHome;
