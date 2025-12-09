import React from 'react';
import { Link } from 'react-router-dom';

const CorporateAbout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white pt-40 pb-32 overflow-hidden min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=85&w=2000"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-800/80"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">About Us</h1>
            <p className="text-xl text-blue-100">
              Building legacies and creating sustainable value for generations
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Alfa Global Group is a diversified global organization driven by vision, innovation, and impact. We invest in ideas, businesses, and projects that shape industries, empower legacies, and create sustainable value across generations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our strength lies in combining capital markets expertise with entrepreneurial execution to build opportunities that go beyond conventional boundaries.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1573164574511-73c773193279?q=85&w=1200"
                alt="Professional Team"
                className="w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=85&w=1200"
                alt="Business Strategy"
                className="w-full h-auto shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Purpose</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe wealth is not just financial capital—it is the ability to create, transform, and leave behind something meaningful.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Alfa Global Group exists to channel resources, knowledge, and strategy into ventures that redefine growth, spark innovation, and contribute to a better future for our clients, partners, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions and shape our culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We pursue the highest standards in everything we do, from investment strategies to client relationships.'
              },
              {
                title: 'Integrity',
                description: 'Transparency, honesty, and ethical conduct form the foundation of our business practices.'
              },
              {
                title: 'Innovation',
                description: 'We continuously evolve our approaches, leveraging technology and market insights to stay ahead.'
              },
              {
                title: 'Partnership',
                description: 'We build lasting relationships based on trust, mutual respect, and shared success.'
              },
              {
                title: 'Impact',
                description: 'We measure success not just in financial returns, but in the positive change we create.'
              },
              {
                title: 'Vision',
                description: 'We think long-term, focusing on sustainable growth and multi-generational value creation.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us on This Journey</h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover how Alfa Global Group can help you achieve your investment and business goals.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white text-blue-900 font-semibold hover:bg-gray-100 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CorporateAbout;