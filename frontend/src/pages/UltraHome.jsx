import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useInView, AnimatePresence, useSpring, useTransform } from 'framer-motion';

const UltraHome = ({ theme = 'gold' }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeService, setActiveService] = useState(0);
  const [calculatorValues, setCalculatorValues] = useState({ amount: 1000000, years: 10, rate: 12 });
  const [currentTime, setCurrentTime] = useState(new Date());
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroScrollProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);

  // Live clock for professional feel
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Full theme support
  const themes = {
    gold: {
      accent: 'amber-600',
      accentText: 'text-amber-600',
      accentBg: 'bg-amber-600',
      accentBgLight: 'bg-amber-50',
      accentBorder: 'border-amber-200',
      accentHover: 'hover:bg-amber-700',
      gradient: 'from-amber-600 to-amber-700',
      heroAccent: 'text-amber-400',
      heroAccentBg: 'bg-amber-400',
      heroBg: 'from-slate-950 via-slate-900 to-slate-950',
      statsBg: 'bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600',
      statsText: 'text-white',
      checkColor: 'text-amber-500',
      glowColor: 'rgba(251, 191, 36, 0.1)'
    },
    silver: {
      accent: 'gray-600',
      accentText: 'text-gray-700',
      accentBg: 'bg-gray-700',
      accentBgLight: 'bg-gray-100',
      accentBorder: 'border-gray-300',
      accentHover: 'hover:bg-gray-800',
      gradient: 'from-gray-700 to-gray-800',
      heroAccent: 'text-gray-300',
      heroAccentBg: 'bg-gray-300',
      heroBg: 'from-gray-950 via-gray-900 to-gray-950',
      statsBg: 'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700',
      statsText: 'text-white',
      checkColor: 'text-gray-500',
      glowColor: 'rgba(156, 163, 175, 0.1)'
    },
    purple: {
      accent: 'purple-600',
      accentText: 'text-purple-600',
      accentBg: 'bg-purple-600',
      accentBgLight: 'bg-purple-50',
      accentBorder: 'border-purple-200',
      accentHover: 'hover:bg-purple-700',
      gradient: 'from-purple-600 to-purple-700',
      heroAccent: 'text-purple-400',
      heroAccentBg: 'bg-purple-400',
      heroBg: 'from-purple-950 via-slate-950 to-purple-950',
      statsBg: 'bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700',
      statsText: 'text-white',
      checkColor: 'text-purple-500',
      glowColor: 'rgba(168, 85, 247, 0.1)'
    },
    teal: {
      accent: 'teal-600',
      accentText: 'text-teal-600',
      accentBg: 'bg-teal-600',
      accentBgLight: 'bg-teal-50',
      accentBorder: 'border-teal-200',
      accentHover: 'hover:bg-teal-700',
      gradient: 'from-teal-600 to-teal-700',
      heroAccent: 'text-teal-400',
      heroAccentBg: 'bg-teal-400',
      heroBg: 'from-teal-950 via-slate-950 to-teal-950',
      statsBg: 'bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700',
      statsText: 'text-white',
      checkColor: 'text-teal-500',
      glowColor: 'rgba(45, 212, 191, 0.1)'
    }
  };

  const t = themes[theme] || themes.gold;

  // Animated Counter
  const useAnimatedCounter = (end, duration = 2500) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
      if (isInView) {
        let startTime;
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(easeOut * end));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, [isInView, end, duration]);

    return [count, ref];
  };

  // Stats
  const stats = [
    { value: 585, prefix: '₹', suffix: 'Cr+', label: 'Assets Under Management' },
    { value: 2, suffix: '+', label: 'Years of Excellence' },
    { value: 58, suffix: '+', label: 'Satisfied Clients' },
    { value: 1, suffix: '+', label: 'Global Markets' }
  ];

  // Market indices (simulated)
  const marketData = [
    { name: 'SENSEX', value: '72,568.45', change: '+0.85%', up: true },
    { name: 'NIFTY 50', value: '22,045.30', change: '+0.72%', up: true },
    { name: 'GOLD', value: '₹62,450', change: '-0.12%', up: false },
    { name: 'USD/INR', value: '83.12', change: '+0.05%', up: true }
  ];

  // Awards & Recognition
  const awards = [
    { year: '2024', title: 'Best Wealth Management Firm', org: 'Financial Express' },
    { year: '2024', title: 'Top Alternative Investment Manager', org: 'Economic Times' },
    { year: '2023', title: 'Excellence in Client Service', org: 'Outlook Money' }
  ];

  // Client logos
  const clientLogos = [
    'Reliance', 'Tata', 'Birla', 'Mahindra', 'Godrej', 'Adani'
  ];

  const services = [
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: 'Alternative Investments & Funds',
      desc: 'Structured investment platforms, AIFs, hedge-style LLPs, and specialized capital strategies.',
      features: ['Private Equity Funds', 'Hedge Fund Strategies', 'Alternative Investment Funds', 'Structured Products'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      title: 'Strategic Ventures & Holdings',
      desc: 'Proprietary investments in companies, joint ventures, and scalable businesses.',
      features: ['Direct Equity Investments', 'Joint Venture Partnerships', 'Growth Capital', 'Management Buyouts'],
      image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=800'
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
      title: 'High-Impact Projects',
      desc: 'Transformative projects in finance, infrastructure, and technology.',
      features: ['Infrastructure Development', 'Manufacturing Projects', 'Maritime Investments', 'Technology Ventures'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
    },
    {
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: 'Global Partnerships & Advisory',
      desc: 'Cross-border alliances, family office structures, and institutional consulting.',
      features: ['Family Office Services', 'Cross-Border M&A', 'Strategic Advisory', 'Institutional Consulting'],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800'
    }
  ];

  const coreValues = [
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>, title: 'Excellence', desc: 'Highest standards.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>, title: 'Integrity', desc: 'Transparency & ethics.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>, title: 'Innovation', desc: 'Evolving approaches.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>, title: 'Partnership', desc: 'Lasting relationships.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>, title: 'Impact', desc: 'Positive change.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>, title: 'Vision', desc: 'Multi-generational.' }
  ];

  const team = [
    { name: 'Rajesh Kumar', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
    { name: 'Priya Sharma', role: 'Chief Investment Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
    { name: 'Vikram Singh', role: 'Head of Research', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
    { name: 'Anita Desai', role: 'Client Relations', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' }
  ];

  const testimonials = [
    { content: "Alfa Global has transformed our investment strategy. Their expertise in global markets is unmatched.", author: "Suresh Mehta", role: "CEO, Mehta Industries", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" },
    { content: "Professional, transparent, and results-driven. The team's dedication made all the difference.", author: "Kavita Reddy", role: "Family Office Principal", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
    { content: "Research-driven approach with consistent above-market returns. World-class experience.", author: "Amit Patel", role: "HNI Investor", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" }
  ];

  const faqs = [
    { q: "What is the minimum investment amount?", a: "Our services cater to HNIs with investable assets starting from ₹1 Crore." },
    { q: "How do you ensure portfolio security?", a: "We employ institutional-grade security with encrypted communications and segregated accounts." },
    { q: "What are your fee structures?", a: "Transparent fee model combining asset-based fees and performance-linked incentives." },
    { q: "How often will I receive updates?", a: "Monthly reports, quarterly reviews, and 24/7 portal access." }
  ];

  const insights = [
    { title: 'Market Outlook 2025', category: 'Research', date: 'Dec 2024', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400', read: '5 min' },
    { title: 'Alternative Investments', category: 'Education', date: 'Nov 2024', image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400', read: '8 min' },
    { title: 'Global Economic Trends', category: 'Analysis', date: 'Oct 2024', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400', read: '6 min' }
  ];

  const calculateReturns = () => {
    const { amount, years, rate } = calculatorValues;
    return Math.round(amount * Math.pow(1 + rate / 100, years));
  };

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const StatItem = ({ value, prefix = '', suffix = '', label }) => {
    const [count, ref] = useAnimatedCounter(value);
    return (
      <div ref={ref} className="text-center px-4 py-6 md:py-8">
        <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${t.statsText}`}>
          {prefix}{count}{suffix}
        </div>
        <div className={`${t.statsText} text-xs sm:text-sm mt-2 uppercase tracking-wider opacity-90`}>
          {label}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Scroll Progress */}
      <motion.div className={`fixed top-0 left-0 right-0 h-1 ${t.accentBg} origin-left z-[100]`} style={{ scaleX }} />

      {/* HERO SECTION */}
      <section ref={heroRef} className={`relative min-h-screen flex items-center bg-gradient-to-br ${t.heroBg} overflow-hidden`}>
        {/* Sophisticated Background */}
        <div className="absolute inset-0">
          {/* Gradient Mesh */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full" style={{ background: `radial-gradient(circle, ${t.glowColor} 0%, transparent 70%)`, transform: 'translate(-30%, -30%)' }} />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full" style={{ background: `radial-gradient(circle, ${t.glowColor} 0%, transparent 70%)`, transform: 'translate(30%, 30%)' }} />
          </div>
          
          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          
          {/* Diagonal Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
            <pattern id="diagonalLines" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="40" x2="40" y2="0" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#diagonalLines)" />
          </svg>

          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        </div>

        {/* Parallax Content */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 w-full">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-32 sm:pt-40 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                {/* Live Indicator */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-6">
                  <span className={`inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-wide ${t.heroAccent} border border-current/30 rounded-full`}>
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Trusted by 58+ HNI Families
                  </span>
                  <span className="hidden sm:flex text-white/40 text-xs">
                    {currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} IST
                  </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
                >
                  Building Wealth.
                  <br />
                  <span className={t.heroAccent}>Creating Legacies.</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg sm:text-xl text-white/60 mb-10 max-w-xl leading-relaxed"
                >
                  A diversified global organization driven by vision, innovation, and impact. 
                  We invest in ideas that shape industries and create sustainable value across generations.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap gap-4 mb-10"
                >
                  <Link
                    to="/contact"
                    className={`px-8 py-4 ${t.accentBg} ${t.accentHover} text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl`}
                  >
                    Schedule Consultation
                  </Link>
                  <Link
                    to="/services"
                    className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                  >
                    Explore Services
                  </Link>
                </motion.div>

                {/* Trust Badges */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex flex-wrap items-center gap-6">
                  {['SEBI Registered', 'IFSCA Compliant', 'ISO 27001'].map((badge, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className={`w-4 h-4 ${t.heroAccent}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/60 text-sm">{badge}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Side - Key Metrics Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="lg:col-span-5 hidden lg:block"
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                  <h3 className="text-white/80 text-sm font-medium uppercase tracking-wider mb-6">Performance Overview</h3>
                  
                  <div className="space-y-6">
                    {[
                      { label: 'Assets Under Management', value: '₹585Cr+', sublabel: '+24% YoY' },
                      { label: 'Client Portfolios', value: '58+', sublabel: 'Active accounts' },
                      { label: 'Avg. Annual Returns', value: '18.5%', sublabel: 'Since inception' },
                      { label: 'Client Satisfaction', value: '98%', sublabel: 'NPS Score' }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center pb-4 border-b border-white/5 last:border-0 last:pb-0">
                        <div>
                          <p className="text-white/50 text-xs uppercase tracking-wide">{item.label}</p>
                          <p className="text-white/40 text-xs mt-1">{item.sublabel}</p>
                        </div>
                        <p className={`text-2xl font-bold ${t.heroAccent}`}>{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center text-white/30">
            <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* LIVE MARKET TICKER */}
      <div className="bg-slate-900 border-y border-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-3">
          <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide">
            <span className="text-white/40 text-xs uppercase tracking-wider shrink-0">Live Markets</span>
            {marketData.map((item, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0">
                <span className="text-white/70 text-sm font-medium">{item.name}</span>
                <span className="text-white text-sm">{item.value}</span>
                <span className={`text-xs ${item.up ? 'text-green-400' : 'text-red-400'}`}>{item.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <section className={`py-6 sm:py-8 ${t.statsBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            {stats.map((stat, i) => <StatItem key={i} {...stat} />)}
          </div>
        </div>
      </section>

      {/* AWARDS & RECOGNITION */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className={`${t.accentText} text-xs font-semibold uppercase tracking-widest`}>Recognition</span>
              <h3 className="text-xl font-bold text-gray-900 mt-1">Awards & Accolades</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {awards.map((award, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <div className={`w-10 h-10 ${t.accentBgLight} rounded-full flex items-center justify-center`}>
                    <svg className={`w-5 h-5 ${t.accentText}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-medium">{award.title}</p>
                    <p className="text-gray-500 text-xs">{award.org} • {award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Who We Are</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">A Legacy of Excellence</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our strength lies in combining capital markets expertise with entrepreneurial execution. 
                We believe wealth is not just financial capital—it is the ability to create, transform, 
                and leave behind something meaningful.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { num: '2+', label: 'Years Experience' },
                  { num: '₹585Cr+', label: 'Assets Managed' },
                  { num: '58+', label: 'HNI Families' },
                  { num: '4', label: 'Office Locations' }
                ].map((item, i) => (
                  <div key={i} className={`p-4 rounded-lg ${t.accentBgLight}`}>
                    <p className={`text-2xl font-bold ${t.accentText}`}>{item.num}</p>
                    <p className="text-gray-600 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
              <Link to="/about" className={`inline-flex items-center gap-2 ${t.accentText} font-semibold hover:gap-3 transition-all`}>
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </Link>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              {[
                { city: 'Mumbai', office: 'Headquarters', desc: 'BKC, Mumbai' },
                { city: 'GIFT City', office: 'IFSC Office', desc: 'Gujarat' },
                { city: 'Delhi NCR', office: 'North Region', desc: 'Gurugram' },
                { city: 'Bengaluru', office: 'South Region', desc: 'Karnataka' }
              ].map((item, i) => (
                <div key={i} className={`p-6 rounded-xl ${t.accentBgLight} border ${t.accentBorder}`}>
                  <div className={`w-10 h-10 ${t.accentBg} text-white rounded-lg flex items-center justify-center mb-3 text-sm font-bold`}>
                    {item.city.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-gray-900">{item.city}</h3>
                  <p className="text-gray-500 text-sm">{item.office}</p>
                  <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Our Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveService(i)}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${
                    activeService === i ? `bg-white shadow-lg border-l-4 ${theme === 'gold' ? 'border-amber-500' : theme === 'silver' ? 'border-gray-500' : theme === 'purple' ? 'border-purple-500' : 'border-teal-500'}` : 'bg-white/50 hover:bg-white border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${t.accentText} mt-1`}>{service.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{service.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div key={activeService} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl overflow-hidden shadow-xl lg:sticky lg:top-32">
              <div className="aspect-video overflow-hidden">
                <img src={services[activeService].image} alt={services[activeService].title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{services[activeService].title}</h3>
                <ul className="space-y-3 mb-6">
                  {services[activeService].features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-600">
                      <svg className={`w-5 h-5 ${t.checkColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className={`inline-flex items-center gap-2 px-6 py-3 ${t.accentBg} text-white rounded-lg font-medium ${t.accentHover} transition-all`}>Learn More</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.heroAccent} text-sm font-semibold tracking-widest uppercase`}>Why Alfa Global</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">The Alfa Advantage</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>, title: 'Institutional-Grade Security', desc: 'Bank-level encryption, segregated accounts, and multi-factor authentication protect your investments.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>, title: 'Research-Driven Approach', desc: 'Our proprietary research framework combines quantitative analysis with fundamental insights.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>, title: 'Dedicated Relationship Managers', desc: 'Personal attention from experienced professionals who understand your unique needs.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className={`${t.heroAccent} mb-4`}>{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Our Foundation</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreValues.map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`p-6 rounded-xl border ${t.accentBorder} text-center hover:shadow-md transition-all`}>
                <div className={`${t.accentText} mb-3 flex justify-center`}>{value.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{value.title}</h3>
                <p className="text-gray-500 text-xs">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Planning Tool</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-8">Investment Calculator</h2>
                
                <div className="space-y-6">
                  {[
                    { label: 'Investment (₹)', key: 'amount', min: 100000, max: 10000000, step: 100000, format: (v) => `₹${(v/100000).toFixed(1)}L` },
                    { label: 'Period', key: 'years', min: 1, max: 30, step: 1, format: (v) => `${v} Years` },
                    { label: 'Expected Return', key: 'rate', min: 5, max: 25, step: 1, format: (v) => `${v}%` }
                  ].map((s) => (
                    <div key={s.key}>
                      <div className="flex justify-between mb-2">
                        <label className="text-gray-700 text-sm font-medium">{s.label}</label>
                        <span className={`${t.accentText} font-semibold text-sm`}>{s.format(calculatorValues[s.key])}</span>
                      </div>
                      <input type="range" min={s.min} max={s.max} step={s.step} value={calculatorValues[s.key]} onChange={(e) => setCalculatorValues({...calculatorValues, [s.key]: parseInt(e.target.value)})} className={`w-full h-2 rounded-full appearance-none cursor-pointer ${t.accentBg}`} />
                    </div>
                  ))}
                </div>
              </div>

              <div className={`p-8 rounded-2xl bg-gradient-to-br ${t.gradient} text-white text-center`}>
                <p className="text-white/80 text-sm mb-2">Estimated Future Value</p>
                <div className="text-5xl font-bold mb-4">₹{(calculateReturns()/10000000).toFixed(2)}Cr</div>
                <p className="text-white/60 text-sm mb-8">After {calculatorValues.years} years</p>
                <Link to="/contact" className="inline-block px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all">Start Investing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Our Experts</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group text-center">
                <div className={`relative overflow-hidden rounded-xl mb-4 border-4 border-transparent group-hover:${t.accentBorder} transition-all`}>
                  <img src={member.image} alt={member.name} className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-gray-900 font-semibold">{member.name}</h3>
                <p className={`${t.accentText} text-sm`}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Client Stories</h2>
          </motion.div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div key={activeTestimonial} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center">
                <img src={testimonials[activeTestimonial].image} alt="" className={`w-20 h-20 rounded-full mx-auto mb-6 border-4 ${t.accentBorder}`} />
                <p className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">"{testimonials[activeTestimonial].content}"</p>
                <p className="text-gray-900 font-semibold">{testimonials[activeTestimonial].author}</p>
                <p className={`${t.accentText} text-sm`}>{testimonials[activeTestimonial].role}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (<button key={i} onClick={() => setActiveTestimonial(i)} className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === i ? t.accentBg : 'bg-gray-200'}`} />))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-8">Trusted by Leading Business Houses</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clientLogos.map((name, i) => (
              <div key={i} className="text-2xl font-bold text-gray-300 hover:text-gray-400 transition-colors">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Insights</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-3">Latest Research</h2>
            </div>
            <Link to="/insights" className={`${t.accentText} font-semibold hover:underline flex items-center gap-2`}>View All <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {insights.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`rounded-xl overflow-hidden border ${t.accentBorder} group hover:shadow-lg transition-all`}>
                <div className="aspect-video overflow-hidden"><img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs ${t.accentText} uppercase font-semibold`}>{item.category}</span>
                    <span className="text-gray-400 text-xs">• {item.read}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Questions & Answers</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full px-6 py-4 flex justify-between items-center text-left">
                  <span className="text-gray-900 font-medium pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 ${t.accentText} flex-shrink-0 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-4"><p className="text-gray-600">{faq.a}</p></motion.div>)}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className={`p-12 md:p-16 rounded-2xl bg-gradient-to-r ${t.gradient}`}>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Build Your Legacy?</h2>
              <p className="text-white/80 mb-8">Join families who trust us with their wealth.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all">
                Schedule Consultation <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UltraHome;
