import React from 'react';

const NewAbout = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 mb-20">
        <img
          src="https://images.unsplash.com/photo-1756936724444-ecf9f7236c10?q=85&w=2000"
          alt="About Us"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4">About Us</h1>
            <p className="text-base max-w-2xl mx-auto">
              Building legacies and opportunities that last across industries and generations
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-4 tracking-wider">GROUP OVERVIEW</p>
              <h2 className="text-4xl sm:text-5xl font-light mb-6">Who We Are</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Alfa Global Group is a diversified global organization driven by vision, innovation, and impact. 
                We invest in ideas, businesses, and projects that shape industries, empower legacies, and create 
                sustainable value across generations.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Our strength lies in combining capital markets expertise with entrepreneurial execution to build 
                opportunities that go beyond conventional boundaries.
              </p>
            </div>
            <div className="relative h-96 lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1641760387096-b309eb085758?q=85&w=1200"
                alt="Corporate Building"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-96 lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1691161372406-4c65ac71ccb0?q=85&w=1200"
                alt="Purpose"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold text-gray-600 mb-4 tracking-wider">OUR PURPOSE</p>
              <h2 className="text-4xl sm:text-5xl font-light mb-6">Why We Exist</h2>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                We believe wealth is not just financial capital, it is the ability to create, transform, and leave 
                behind something meaningful.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Alfa Global Group exists to channel resources, knowledge, and strategy into ventures that redefine 
                growth, spark innovation, and contribute to a better future for our clients, partners, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light mb-6">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
              <div key={index} className="text-center">
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">Join Us on This Journey</h2>
          <p className="text-base text-gray-300 mb-8 leading-relaxed">
            Discover how Alfa Global Group can help you achieve your investment and business goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-4 text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default NewAbout;