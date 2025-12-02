import React from 'react';

const NewServices = () => {
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
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Comprehensive solutions for sophisticated investors and institutions
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            At Alfa Global Group, we offer a comprehensive suite of investment and advisory services 
            tailored to meet the sophisticated needs of high-net-worth individuals, family offices, 
            and institutional investors. Our diversified approach ensures your capital works effectively 
            across multiple asset classes and geographies.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-gray-900">{service.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-10">{service.description}</p>
                  
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-900 mb-6 tracking-widest uppercase">Key Offerings</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-6 h-6 text-gray-900 mt-0.5 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-base text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[500px] object-cover shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold text-gray-500 mb-4 tracking-widest uppercase">Why Choose Us</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-gray-900">Alfa Global Advantage</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
              <div key={index} className="border-l-2 border-gray-900 pl-6">
                <h3 className="text-xl font-light mb-3 text-gray-900">{item.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8">Ready to Explore Opportunities?</h2>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed font-light">
            Let's discuss how our services can help you achieve your investment goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-10 py-4 text-base font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default NewServices;