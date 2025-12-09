import React from 'react';
import { Link } from 'react-router-dom';

const CorporateServices = () => {
  const services = [
    {
      title: 'Alternative Investments & Funds',
      description: 'Structured investment platforms, AIFs, hedge-style LLPs, and specialized capital strategies designed for sophisticated investors seeking diversification and alpha generation.',
      features: [
        'Private Equity Funds',
        'Hedge Fund Strategies',
        'Alternative Investment Funds (AIFs)',
        'Structured Products'
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=85&w=1200'
    },
    {
      title: 'Strategic Ventures & Holdings',
      description: 'Proprietary investments in companies, joint ventures, and scalable businesses across sectors, with a focus on long-term value creation and strategic growth.',
      features: [
        'Direct Equity Investments',
        'Joint Venture Partnerships',
        'Growth Capital',
        'Management Buyouts'
      ],
      image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=85&w=1200'
    },
    {
      title: 'High-Impact Projects',
      description: 'Initiating and funding transformative projects in industries such as finance, infrastructure, shipping, manufacturing, and technology.',
      features: [
        'Infrastructure Development',
        'Manufacturing Projects',
        'Maritime Investments',
        'Technology Ventures'
      ],
      image: 'https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?q=85&w=1200'
    },
    {
      title: 'Global Partnerships & Advisory',
      description: 'Cross-border alliances, family office structures, and institutional collaborations that unlock global opportunities and facilitate strategic expansion.',
      features: [
        'Family Office Services',
        'Cross-Border M&A',
        'Strategic Advisory',
        'Institutional Consulting'
      ],
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&w=1200'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white pt-40 pb-32 overflow-hidden min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=85&w=2000"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-800/80"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive wealth management and advisory solutions for sophisticated investors
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            At Alfa Global Group, we offer a comprehensive suite of investment and advisory services tailored to meet the sophisticated needs of high-net-worth individuals, family offices, and institutional investors.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.description}</p>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Key Offerings</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-900 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Alfa Global</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Expertise',
                description: '25+ years of experience in global finance and strategic investments'
              },
              {
                title: 'Diversified Approach',
                description: 'Multi-asset class strategies for optimal risk-adjusted returns'
              },
              {
                title: 'Global Network',
                description: 'Access to premier opportunities across international markets'
              },
              {
                title: 'Client-Centric',
                description: 'Customized solutions tailored to your unique objectives'
              },
              {
                title: 'Institutional Quality',
                description: 'Rigorous due diligence and investment processes'
              },
              {
                title: 'Long-Term Focus',
                description: 'Building sustainable value across generations'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore Opportunities?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our services can help you achieve your investment goals.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-blue-900 font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CorporateServices;