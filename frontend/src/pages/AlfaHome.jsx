import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AlfaHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1512364615838-8088a04a778b?q=85&w=1920',
      title: 'Bridging the gap between your reality & your',
      highlight: 'aspirations'
    },
    {
      image: 'https://images.unsplash.com/photo-1685211097893-c3fcafdae020?q=85&w=1920',
      title: 'Creating enduring legacies for',
      highlight: 'generations'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const services = [
    {
      title: 'Family Businesses',
      description: 'Investment advisory, succession, family governance solutions, and philanthropic advisory for family patriarchs and the next generation.',
      asset: 'Greater than INR 100 Crores',
      image: 'https://images.unsplash.com/photo-1758448656990-398443036eb4?q=85&w=800'
    },
    {
      title: 'Professionals and CXOs',
      description: 'Holistic offerings for senior corporate leaders & professionals such as doctors, lawyers, designers, and more.',
      asset: 'Greater than INR 10 Crores',
      image: 'https://images.unsplash.com/photo-1758448511255-ac2a24a135d7?q=85&w=800'
    },
    {
      title: 'Founders & Entrepreneurs',
      description: 'Comprehensive personal wealth planning for notable startup founders, from pre-liquidity to post-exit stage.',
      asset: 'Greater than INR 5 Crores',
      image: 'https://images.unsplash.com/photo-1758448656987-cfae6bf225e4?q=85&w=800'
    }
  ];

  const assetServices = [
    {
      title: 'Discretionary PMS',
      description: 'Outsource your investment portfolio decision-making to our expert advisors.',
      minimum: 'INR 1 Crore',
      image: 'https://images.unsplash.com/photo-1685211041228-5e7985ab3beb?q=85&w=800'
    },
    {
      title: 'Fund of Funds',
      description: 'Access top quartile private market fund managers via our Fund of Funds platform.',
      minimum: 'INR 1 Crore',
      image: 'https://images.unsplash.com/photo-1512364615838-8088a04a778b?q=85&w=800'
    },
    {
      title: 'Global Investments',
      description: 'Build a globally diversified portfolio with advise from a global investment manager.',
      minimum: 'INR 1 Crore',
      image: 'https://images.unsplash.com/photo-1745750686248-dbd5828aceab?q=85&w=800'
    }
  ];

  const awards = [
    'Best Wealth Advisory Firm - India',
    'Excellence in Family Office Services',
    'Top Financial Advisor - Asia Pacific',
    'Best for Sustainability in India'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight mb-6">
                {heroSlides[currentSlide].title}{' '}
                <span className="text-[#4ecdc4]">{heroSlides[currentSlide].highlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                Work with a wealth management firm that has pioneered the concept of unbiased wealth & family office advisory in India.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#1a5f5a] text-white text-base tracking-wide hover:bg-[#154d49] transition-all duration-300 group"
              >
                Get Started
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 transition-all duration-300 ${
                currentSlide === index ? 'bg-[#4ecdc4]' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="text-[#1a5f5a] text-sm tracking-[0.2em] uppercase mb-4">Solutions</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Helping you create an<br />
              <span className="text-[#1a5f5a]">enduring legacy</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Wealth Advisory is beyond just building a portfolio. By serving some of India's most prominent business families since 2011, we have learnt the importance of taking a holistic, global yet personalised approach to meeting our clients' wealth management needs.
          </p>
        </div>
      </section>

      {/* Wealth Management Services */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="text-[#1a5f5a] text-sm tracking-[0.2em] uppercase mb-4">Services</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Wealth Management
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl">
              Our wealth management services are tailored to your unique wealth creation journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to="/services"
                className="group relative overflow-hidden bg-white"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-medium mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="border-t border-white/20 pt-4">
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Investable Asset</p>
                    <p className="text-white">{service.asset}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Management Services */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="text-[#1a5f5a] text-sm tracking-[0.2em] uppercase mb-4">Services</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Asset Management
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl">
              Strategic solutions curated to facilitate meaningful and efficient access to sophisticated asset classes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {assetServices.map((service, index) => (
              <Link
                key={index}
                to="/services"
                className="group relative overflow-hidden bg-white"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-medium mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="border-t border-white/20 pt-4">
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Minimum Amount</p>
                    <p className="text-white">{service.minimum}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-[#1a5f5a] text-sm tracking-[0.2em] uppercase mb-4">Vault</p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                Your access to<br />
                <span className="text-[#1a5f5a]">rich insights</span>
              </h2>
            </div>
            <Link
              to="/insights"
              className="mt-8 md:mt-0 inline-flex items-center text-[#1a5f5a] hover:text-[#154d49] transition-colors group"
            >
              Explore Insights
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="bg-white p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm text-gray-500 mb-3">Sign up for priority access</p>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                  Get our insights delivered straight to your inbox. Trusted by the top 0.01% of the country.
                </h3>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 border border-gray-200 focus:outline-none focus:border-[#1a5f5a] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#1a5f5a] text-white hover:bg-[#154d49] transition-colors flex items-center justify-center"
                  >
                    Subscribe
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
              </div>
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512364615838-8088a04a778b?q=85&w=1200"
                  alt="Insights"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=85&w=800"
                alt="Leadership"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div>
              <div className="max-w-lg">
                <svg className="w-16 h-16 text-[#1a5f5a]/20 mb-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-2xl md:text-3xl text-gray-800 font-light leading-relaxed mb-8">
                  "The hallmark of our offering is professional and personalised wealth advisory services. Our clients rely on us to work with them on important and deeply personal issues around their financial well-being."
                </p>
                <div>
                  <p className="text-lg font-medium text-gray-900">Leadership Team</p>
                  <p className="text-gray-600">Alfa Global Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-[#0f1419] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="text-[#4ecdc4] text-sm tracking-[0.2em] uppercase mb-4">Awards</p>
            <h2 className="text-4xl md:text-5xl font-light">
              Recognition driven by<br />
              <span className="text-[#4ecdc4]">Results</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="border border-gray-700 p-8 hover:border-[#4ecdc4] transition-colors">
                <div className="w-12 h-12 border border-[#4ecdc4] flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#4ecdc4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">{award}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#1a5f5a] text-sm tracking-[0.2em] uppercase mb-4">Contact Us</p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
                Your legacy awaits
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">General Contact</h4>
                  <p className="text-gray-800">+91-22-6621-0700</p>
                  <p className="text-gray-800">info@alfaglobalgroup.com</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Office</h4>
                  <p className="text-gray-800">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="px-6 py-4 border border-gray-200 focus:outline-none focus:border-[#1a5f5a] transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-6 py-4 border border-gray-200 focus:outline-none focus:border-[#1a5f5a] transition-colors"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-6 py-4 border border-gray-200 focus:outline-none focus:border-[#1a5f5a] transition-colors"
                />
                <select className="w-full px-6 py-4 border border-gray-200 focus:outline-none focus:border-[#1a5f5a] transition-colors text-gray-600">
                  <option value="">Topic of Enquiry</option>
                  <option value="wealth">Personal Wealth Advisory</option>
                  <option value="family">Family Office Advisory</option>
                  <option value="investment">Investment Advisory</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-6 py-4 border border-gray-200 focus:outline-none focus:border-[#1a5f5a] transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#1a5f5a] text-white hover:bg-[#154d49] transition-colors flex items-center justify-center"
                >
                  Submit
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
