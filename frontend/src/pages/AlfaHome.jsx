import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AlfaHome = () => {
  const [activeTab, setActiveTab] = useState(0);

  const complianceBadges = [
    { icon: 'document', label: 'IFSCA-compliant' },
    { icon: 'chart', label: 'SEBI-regulated*' },
    { icon: 'building', label: 'GIFT IFSC' },
    { icon: 'gear', label: 'Institutional-grade Systems' }
  ];

  const strategies = [
    { title: 'Category I Funds', description: 'Venture Capital, SME, Infrastructure, Social Venture Funds', link: '/services#category1' },
    { title: 'Category II Funds', description: 'Private Equity, Debt Funds, Fund of Funds', link: '/services#category2' },
    { title: 'Category III Funds', description: 'Hedge Funds, Complex Trading Strategies', link: '/services#category3' }
  ];

  const whyAlfaFeatures = [
    { icon: 'governance', title: 'Governance', description: 'Robust regulatory standards' },
    { icon: 'technology', title: 'Technology', description: 'Advanced risk management' },
    { icon: 'research', title: 'Research', description: 'Data-driven investment decisions' },
    { icon: 'global', title: 'Global Mandate', description: 'Opportunities across asset classes' }
  ];

  const services = [
    {
      title: 'Wealth Management',
      description: 'Comprehensive wealth management solutions for HNIs and family offices',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=85&w=600'
    },
    {
      title: 'Investment Advisory',
      description: 'Strategic investment guidance tailored to your financial goals',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=85&w=600'
    },
    {
      title: 'Portfolio Management',
      description: 'Active management of diversified investment portfolios',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=85&w=600'
    }
  ];

  const stats = [
    { value: '₹5000+ Cr', label: 'Assets Under Management' },
    { value: '25+', label: 'Years of Experience' },
    { value: '500+', label: 'Satisfied Clients' },
    { value: '15+', label: 'Global Markets' }
  ];

  const teamMembers = [
    { name: 'Rajesh Kumar', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=85&w=400' },
    { name: 'Priya Sharma', role: 'Chief Investment Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=85&w=400' },
    { name: 'Vikram Singh', role: 'Head of Research', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=85&w=400' },
    { name: 'Anita Desai', role: 'Client Relations Director', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=85&w=400' }
  ];

  const testimonials = [
    { content: "Alfa Global has transformed our investment strategy. Their expertise in global markets is unmatched.", author: "Suresh Mehta", role: "CEO, Mehta Industries" },
    { content: "Professional, transparent, and results-driven. Exactly what we needed for our family office.", author: "Kavita Reddy", role: "Family Office Principal" },
    { content: "Their research-driven approach has consistently delivered above-market returns for our portfolio.", author: "Amit Patel", role: "HNI Investor" }
  ];

  const insights = [
    { title: 'Market Outlook 2025', category: 'Research', date: 'Dec 2024', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=85&w=400' },
    { title: 'Alternative Investments Guide', category: 'Education', date: 'Nov 2024', image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=85&w=400' },
    { title: 'Global Economic Trends', category: 'Analysis', date: 'Oct 2024', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=85&w=400' }
  ];

  const renderIcon = (type, size = 'w-5 h-5') => {
    const icons = {
      document: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
      chart: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
      building: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
      gear: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></>,
      governance: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
      technology: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
      research: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
      global: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    };
    return <svg className={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">{icons[type]}</svg>;
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Hero Section */}
      <section className="pt-20 min-h-[600px] relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]">
            <div className="py-16 lg:py-24">
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-semibold text-gray-900 leading-tight mb-8">
                Global Fund Management.<br />
                Local Insight. Institutional<br />
                Discipline.
              </h1>
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="px-8 py-4 bg-[#1a6b64] text-white font-medium hover:bg-[#145550] transition-colors">
                  Explore Our Funds
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-[#1a6b64] text-white font-medium hover:bg-[#145550] transition-colors">
                  Book a Consultation
                </Link>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?q=85&w=1200')` }} />
            </div>
          </div>
        </div>
        <div className="bg-[#e8e8e8] py-4 mt-8">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap justify-between items-center gap-4">
              {complianceBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-700">
                  {renderIcon(badge.icon)}
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Strategies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-12">Key Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {strategies.map((strategy, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{strategy.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{strategy.description}</p>
                <Link to={strategy.link} className="text-[#1a6b64] text-sm hover:underline">Learn more</Link>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-8"></div>
        </div>
      </section>

      {/* Why Alfa Global Capital Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900">Why Alfa Global Capital</h2>
            <Link to="/about" className="text-[#1a6b64] text-sm font-medium hover:underline flex items-center">
              Explore All
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {whyAlfaFeatures.map((feature, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-[#1a6b64] mb-4">{renderIcon(feature.icon, 'w-8 h-8')}</div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#1a6b64]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-light text-white mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center mb-12">
            <div>
              <p className="text-[#1a6b64] text-sm tracking-[0.2em] uppercase mb-2">Services</p>
              <h2 className="text-3xl font-semibold text-gray-900">What We Offer</h2>
            </div>
            <Link to="/services" className="text-[#1a6b64] text-sm font-medium hover:underline flex items-center">
              View All Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Link to="/services" className="text-[#1a6b64] text-sm font-medium hover:underline">Learn more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#1a6b64] text-sm tracking-[0.2em] uppercase mb-4">About Us</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Building Wealth.<br />Creating Legacies.
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Alfa Global Group is a premier wealth management and investment advisory firm dedicated to serving high-net-worth individuals, family offices, and institutional investors. With over 25 years of experience, we provide comprehensive financial solutions tailored to our clients' unique needs.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of seasoned professionals combines deep market expertise with cutting-edge technology to deliver superior investment outcomes. We believe in building lasting relationships based on trust, transparency, and consistent performance.
              </p>
              <Link to="/about" className="inline-flex items-center px-8 py-4 bg-[#1a6b64] text-white font-medium hover:bg-[#145550] transition-colors">
                Learn More About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=800" alt="Alfa Global Office" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#1a6b64] text-sm tracking-[0.2em] uppercase mb-2">Leadership</p>
            <h2 className="text-3xl font-semibold text-gray-900">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square overflow-hidden mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/team" className="text-[#1a6b64] text-sm font-medium hover:underline">View Full Team →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#1a6b64] text-sm tracking-[0.2em] uppercase mb-2">Testimonials</p>
            <h2 className="text-3xl font-semibold text-white">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#2a2a2a] p-8">
                <svg className="w-10 h-10 text-[#1a6b64] mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center mb-12">
            <div>
              <p className="text-[#1a6b64] text-sm tracking-[0.2em] uppercase mb-2">Insights</p>
              <h2 className="text-3xl font-semibold text-gray-900">Latest Research & Analysis</h2>
            </div>
            <Link to="/insights" className="text-[#1a6b64] text-sm font-medium hover:underline flex items-center">
              View All Insights
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="group">
                <div className="aspect-[16/10] overflow-hidden mb-4">
                  <img src={insight.image} alt={insight.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#1a6b64] text-xs font-medium uppercase">{insight.category}</span>
                  <span className="text-gray-400 text-xs">{insight.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#1a6b64] transition-colors">{insight.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="bg-white p-12 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#1a6b64] text-sm tracking-[0.2em] uppercase mb-4">Newsletter</p>
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Stay Informed</h2>
                <p className="text-gray-600">Get our latest insights, market updates, and investment strategies delivered straight to your inbox.</p>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 border border-gray-200 focus:outline-none focus:border-[#1a6b64] transition-colors" />
                  <button type="submit" className="px-8 py-4 bg-[#1a6b64] text-white font-medium hover:bg-[#145550] transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#1a6b64] text-sm tracking-[0.2em] uppercase mb-4">Contact Us</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">Ready to Start Your Investment Journey?</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">General Contact</h4>
                  <p className="text-gray-800">+91-22-6621-0700</p>
                  <p className="text-gray-800">info@alfaglobalgroup.com</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Head Office</h4>
                  <p className="text-gray-800">Mumbai, Maharashtra, India</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">GIFT City Office</h4>
                  <p className="text-gray-800">GIFT City, Gujarat, India</p>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Full Name" className="px-6 py-4 border border-gray-200 focus:outline-none focus:border-[#1a6b64] transition-colors" />
                  <input type="email" placeholder="Email Address" className="px-6 py-4 border border-gray-200 focus:outline-none focus:border-[#1a6b64] transition-colors" />
                </div>
                <input type="tel" placeholder="Phone Number" className="w-full px-6 py-4 border border-gray-200 focus:outline-none focus:border-[#1a6b64] transition-colors" />
                <select className="w-full px-6 py-4 border border-gray-200 focus:outline-none focus:border-[#1a6b64] transition-colors text-gray-600">
                  <option value="">Topic of Enquiry</option>
                  <option value="wealth">Wealth Management</option>
                  <option value="investment">Investment Advisory</option>
                  <option value="funds">Fund Management</option>
                  <option value="other">Other</option>
                </select>
                <textarea placeholder="Your Message" rows={4} className="w-full px-6 py-4 border border-gray-200 focus:outline-none focus:border-[#1a6b64] transition-colors resize-none" />
                <button type="submit" className="w-full px-8 py-4 bg-[#1a6b64] text-white font-medium hover:bg-[#145550] transition-colors flex items-center justify-center">
                  Send Message
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlfaHome;
