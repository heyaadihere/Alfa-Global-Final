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
      image: 'https://images.unsplash.com/photo-1682187516046-addee7e1ffc4?q=85&w=1200'
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
      image: 'https://images.unsplash.com/photo-1641760387096-b309eb085758?q=85&w=1200'
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
      image: 'https://images.pexels.com/photos/34998068/pexels-photo-34998068.jpeg?auto=compress&w=1200'
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
      image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&w=1200'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 mb-20">
        <img
          src="https://images.unsplash.com/photo-1760969006935-ca9f9cf5b117?q=85&w=2000"
          alt="Services"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4">Our Services</h1>
            <p className="text-base max-w-2xl mx-auto">
              Comprehensive solutions for sophisticated investors and institutions
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base text-gray-600 leading-relaxed">
            At Alfa Global Group, we offer a comprehensive suite of investment and advisory services 
            tailored to meet the sophisticated needs of high-net-worth individuals, family offices, 
            and institutional investors. Our diversified approach ensures your capital works effectively 
            across multiple asset classes and geographies.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-3xl sm:text-4xl font-light mb-6">{service.title}</h2>
                  <p className="text-base text-gray-600 leading-relaxed mb-8">{service.description}</p>
                  
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4">Key Offerings:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-gray-900 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover shadow-2xl"
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
            <h2 className="text-4xl sm:text-5xl font-light mb-6">Why Choose Alfa Global?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">Ready to Explore Opportunities?</h2>
          <p className="text-base text-gray-300 mb-8 leading-relaxed">
            Let's discuss how our services can help you achieve your investment goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-4 text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default NewServices;