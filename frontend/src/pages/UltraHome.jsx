import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const UltraHome = ({ theme = 'gold' }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeService, setActiveService] = useState(0);
  const [calculatorValues, setCalculatorValues] = useState({ amount: 1000000, years: 10, rate: 12 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const themes = {
    gold: {
      accent: 'amber-600',
      accentText: 'text-amber-600',
      accentBg: 'bg-amber-600',
      accentBgLight: 'bg-amber-50',
      accentBorder: 'border-amber-200',
      accentHover: 'hover:bg-amber-700',
      gradient: 'from-amber-600 to-amber-700',
      heroGradient: 'from-amber-900/90 via-stone-900/80 to-black/90',
      statsBg: 'bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600',
      statsText: 'text-white'
    },
    silver: {
      accent: 'gray-600',
      accentText: 'text-gray-700',
      accentBg: 'bg-gray-700',
      accentBgLight: 'bg-gray-100',
      accentBorder: 'border-gray-300',
      accentHover: 'hover:bg-gray-800',
      gradient: 'from-gray-700 to-gray-800',
      heroGradient: 'from-gray-900/90 via-slate-900/80 to-black/90',
      statsBg: 'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700',
      statsText: 'text-white'
    }
  };

  const t = themes[theme];

  // Mouse tracking for cursor effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animated Counter with morphing effect
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

  // Stats with exact values from user
  const stats = [
    { value: 585, prefix: '₹', suffix: 'Cr+', label: 'Assets Under Management' },
    { value: 2, suffix: '+', label: 'Years of Excellence' },
    { value: 58, suffix: '+', label: 'Satisfied Clients' },
    { value: 1, suffix: '+', label: 'Global Markets' }
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
      desc: 'Proprietary investments in companies, joint ventures, and scalable businesses across sectors.',
      features: ['Direct Equity Investments', 'Joint Venture Partnerships', 'Growth Capital', 'Management Buyouts'],
      image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=800'
    },
    {
      icon: '🚀',
      title: 'High-Impact Projects',
      desc: 'Transformative projects in finance, infrastructure, shipping, manufacturing, and technology.',
      features: ['Infrastructure Development', 'Manufacturing Projects', 'Maritime Investments', 'Technology Ventures'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
    },
    {
      icon: '🌍',
      title: 'Global Partnerships & Advisory',
      desc: 'Cross-border alliances, family office structures, and institutional collaborations.',
      features: ['Family Office Services', 'Cross-Border M&A', 'Strategic Advisory', 'Institutional Consulting'],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800'
    }
  ];

  const coreValues = [
    { icon: '⭐', title: 'Excellence', desc: 'Highest standards in everything.' },
    { icon: '🛡️', title: 'Integrity', desc: 'Transparency & ethical conduct.' },
    { icon: '💡', title: 'Innovation', desc: 'Evolving approaches.' },
    { icon: '🤝', title: 'Partnership', desc: 'Lasting relationships.' },
    { icon: '🎯', title: 'Impact', desc: 'Positive change.' },
    { icon: '👁️', title: 'Vision', desc: 'Multi-generational growth.' }
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

  // Magnetic Button Component
  const MagneticButton = ({ children, className, ...props }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 200, damping: 20 });
    const springY = useSpring(y, { stiffness: 200, damping: 20 });

    const handleMouseMove = (e) => {
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * 0.2);
      y.set((e.clientY - centerY) * 0.2);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.button
        ref={ref}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={className}
        {...props}
      >
        {children}
      </motion.button>
    );
  };

  // Animated Stat Counter
  const StatItem = ({ value, prefix = '', suffix = '', label }) => {
    const [count, ref] = useAnimatedCounter(value);
    return (
      <motion.div 
        ref={ref} 
        className="text-center px-4 py-6 md:py-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${t.statsText} drop-shadow-lg`}>
          {prefix}{count}{suffix}
        </div>
        <div className={`${t.statsText} text-xs sm:text-sm mt-2 uppercase tracking-wider opacity-90`}>
          {label}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 ${t.accentBg} origin-left z-[100]`}
        style={{ scaleX }}
      />

      {/* HERO SECTION - Ultra Professional */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video/Image Background with Parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, 150]) }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85')`,
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${t.heroGradient}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          
          {/* Animated Grid Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}
            />
          </div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${theme === 'gold' ? 'bg-amber-400' : 'bg-gray-400'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.3
              }}
              animate={{
                y: [-30, 30],
                x: [-20, 20],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          ))}
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 pb-16 sm:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/90 text-xs sm:text-sm font-medium">Trusted by 58+ HNI Families</span>
                </motion.div>

                {/* Main Headline with Text Reveal */}
                <div className="overflow-hidden mb-6">
                  <motion.h1
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
                  >
                    Building
                    <br />
                    <span className={theme === 'gold' ? 'text-amber-400' : 'text-gray-300'}>
                      Wealth.
                    </span>
                  </motion.h1>
                </div>
                <div className="overflow-hidden mb-8">
                  <motion.h1
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
                  >
                    Creating
                    <br />
                    <span className={theme === 'gold' ? 'text-amber-400' : 'text-gray-300'}>
                      Legacies.
                    </span>
                  </motion.h1>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-base sm:text-lg text-white/70 mb-8 max-w-xl leading-relaxed"
                >
                  A diversified global organization driven by vision, innovation, and impact. 
                  We invest in ideas that shape industries and create sustainable value across generations.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-wrap gap-4 mb-10"
                >
                  <Link
                    to="/contact"
                    className={`group relative px-6 sm:px-8 py-3 sm:py-4 ${t.accentBg} text-white font-semibold rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-${t.accent}/30`}
                  >
                    <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
                      Start Your Journey
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Link>
                  <Link
                    to="/services"
                    className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm text-sm sm:text-base"
                  >
                    Explore Services
                  </Link>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="flex flex-wrap gap-4 sm:gap-6"
                >
                  {['SEBI Registered', 'IFSCA Compliant', 'ISO Certified'].map((badge, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/60 text-xs sm:text-sm">
                      <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${theme === 'gold' ? 'text-amber-400' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {badge}
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Side - Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative hidden lg:block"
              >
                {/* Main Card */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-full ${t.accentBgLight} flex items-center justify-center mb-4`}>
                      <span className="text-4xl">🌍</span>
                    </div>
                    <h3 className="text-white text-xl font-semibold">Global Presence</h3>
                    <p className="text-white/60 text-sm mt-2">Serving clients across 4 offices</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {['Mumbai', 'GIFT City', 'Delhi NCR', 'Bengaluru'].map((city, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 text-center"
                      >
                        <p className="text-white/80 text-sm font-medium">{city}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Floating Mini Cards */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-10 -right-10 p-4 bg-white rounded-2xl shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${t.accentBgLight} rounded-full flex items-center justify-center`}>
                      <span className="text-xl">📈</span>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">AUM Growth</p>
                      <p className={`${t.accentText} font-bold`}>+24% YoY</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-6 -left-10 p-4 bg-white rounded-2xl shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${t.accentBgLight} rounded-full flex items-center justify-center`}>
                      <span className="text-xl">⭐</span>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Client Satisfaction</p>
                      <p className={`${t.accentText} font-bold`}>98%</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-white/50">
              <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
              <div className={`w-6 h-10 border-2 rounded-full flex justify-center pt-2 ${theme === 'gold' ? 'border-amber-400/50' : 'border-gray-400/50'}`}>
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className={`w-1.5 h-3 rounded-full ${t.accentBg}`}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION - Always Visible */}
      <section className={`py-6 sm:py-8 ${t.statsBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            {stats.map((stat, i) => (
              <StatItem key={i} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Who We Are</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                A Legacy of Excellence
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                Our strength lies in combining capital markets expertise with entrepreneurial execution. 
                We believe wealth is not just financial capital—it is the ability to create, transform, 
                and leave behind something meaningful.
              </p>
              <Link to="/about" className={`inline-flex items-center gap-2 ${t.accentText} font-medium hover:underline`}>
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {[
                { city: 'Mumbai', office: 'HQ' },
                { city: 'GIFT City', office: 'IFSC' },
                { city: 'Delhi NCR', office: 'North' },
                { city: 'Bengaluru', office: 'South' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-4 sm:p-6 rounded-xl ${t.accentBgLight} border ${t.accentBorder}`}
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 ${t.accentBg} text-white rounded-full flex items-center justify-center mb-3 text-xs sm:text-sm font-bold`}>
                    {item.city.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.city}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">{item.office}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={`py-16 sm:py-20 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
            <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>What We Offer</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="space-y-3 sm:space-y-4">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveService(i)}
                  className={`p-4 sm:p-6 rounded-xl cursor-pointer transition-all ${
                    activeService === i
                      ? `bg-white shadow-lg border-l-4 ${theme === 'gold' ? 'border-amber-500' : 'border-gray-500'}`
                      : 'bg-white/50 hover:bg-white border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="text-2xl sm:text-3xl">{service.icon}</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm mt-1">{service.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              key={activeService}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl lg:sticky lg:top-32"
            >
              <div className="aspect-video overflow-hidden">
                <img src={services[activeService].image} alt={services[activeService].title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{services[activeService].title}</h3>
                <ul className="space-y-2 sm:space-y-3 mb-6">
                  {services[activeService].features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base">
                      <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${t.accentText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className={`inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 ${t.accentBg} text-white rounded-full font-medium ${t.accentHover} transition-all text-sm sm:text-base`}>
                  Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
            <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Our Foundation</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-4 sm:p-6 rounded-xl border ${t.accentBorder} text-center hover:shadow-lg transition-all`}
              >
                <span className="text-2xl sm:text-3xl mb-2 sm:mb-3 block">{value.icon}</span>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">{value.title}</h3>
                <p className="text-gray-500 text-xs">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className={`py-16 sm:py-20 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Planning Tool</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4 sm:mb-6">Investment Calculator</h2>
                
                <div className="space-y-5 sm:space-y-6">
                  {[
                    { label: 'Investment (₹)', key: 'amount', min: 100000, max: 10000000, step: 100000, format: (v) => `₹${(v/100000).toFixed(1)}L` },
                    { label: 'Period', key: 'years', min: 1, max: 30, step: 1, format: (v) => `${v} Years` },
                    { label: 'Return', key: 'rate', min: 5, max: 25, step: 1, format: (v) => `${v}%` }
                  ].map((s) => (
                    <div key={s.key}>
                      <div className="flex justify-between mb-2">
                        <label className="text-gray-700 text-sm">{s.label}</label>
                        <span className={`${t.accentText} font-semibold text-sm`}>{s.format(calculatorValues[s.key])}</span>
                      </div>
                      <input
                        type="range"
                        min={s.min}
                        max={s.max}
                        step={s.step}
                        value={calculatorValues[s.key]}
                        onChange={(e) => setCalculatorValues({...calculatorValues, [s.key]: parseInt(e.target.value)})}
                        className={`w-full h-2 rounded-full appearance-none cursor-pointer ${t.accentBg}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${t.gradient} text-white text-center`}>
                <p className="text-white/80 text-sm mb-2">Estimated Value</p>
                <div className="text-4xl sm:text-5xl font-bold mb-4">₹{(calculateReturns()/10000000).toFixed(2)}Cr</div>
                <p className="text-white/60 text-sm mb-6">After {calculatorValues.years} years</p>
                <Link to="/contact" className="inline-block px-6 py-3 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100">
                  Start Investing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
            <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Leadership</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Experts</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group text-center"
              >
                <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-4 border-4 border-transparent group-hover:${theme === 'gold' ? 'border-amber-200' : 'border-gray-200'} transition-all`}>
                  <img src={member.image} alt={member.name} className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-gray-900 font-semibold text-sm sm:text-base">{member.name}</h3>
                <p className={`${t.accentText} text-xs sm:text-sm`}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={`py-16 sm:py-20 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
            <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Testimonials</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">Client Stories</h2>
          </motion.div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                <img src={testimonials[activeTestimonial].image} alt="" className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4 sm:mb-6 border-4 ${t.accentBorder}`} />
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 italic mb-4 sm:mb-6 max-w-3xl mx-auto">"{testimonials[activeTestimonial].content}"</p>
                <p className="text-gray-900 font-semibold">{testimonials[activeTestimonial].author}</p>
                <p className={`${t.accentText} text-sm`}>{testimonials[activeTestimonial].role}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${activeTestimonial === i ? t.accentBg : 'bg-gray-200'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
            <div>
              <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Insights</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">Latest Research</h2>
            </div>
            <Link to="/insights" className={`${t.accentText} hover:underline flex items-center gap-2 text-sm sm:text-base`}>
              View All <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {insights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`rounded-xl sm:rounded-2xl overflow-hidden border ${t.accentBorder} group hover:shadow-lg transition-all`}
              >
                <div className="aspect-video overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <span className={`text-xs ${t.accentText} uppercase font-medium`}>{item.category}</span>
                    <span className="text-gray-400 text-xs">• {item.read}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`py-16 sm:py-20 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
            <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>FAQ</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
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
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center text-left"
                >
                  <span className="text-gray-900 font-medium text-sm sm:text-base pr-4">{faq.q}</span>
                  <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${t.accentText} flex-shrink-0 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 sm:px-6 pb-3 sm:pb-4"
                    >
                      <p className="text-gray-600 text-sm sm:text-base">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className={`relative p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r ${t.gradient}`}>
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Legacy?</h2>
              <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base">Join families who trust us with their wealth.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all text-sm sm:text-base">
                Schedule Consultation
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UltraHome;
