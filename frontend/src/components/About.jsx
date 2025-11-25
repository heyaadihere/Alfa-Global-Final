import React from 'react';
import { aboutData } from '../mock';
import { Shield, Target } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Group Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-6">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[#D4AF37] text-sm font-medium">Group Overview</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-6">
                {aboutData.groupOverview.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {aboutData.groupOverview.description}
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#F4C430]/20 rounded-2xl transform rotate-3" />
                <div className="relative bg-gradient-to-br from-[#0A1628] to-[#142444] rounded-2xl p-12 shadow-2xl">
                  <div className="space-y-8">
                    {['Vision', 'Innovation', 'Impact'].map((item, index) => (
                      <div key={item} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-[#0A1628] font-bold text-lg">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-lg">{item}</h4>
                          <p className="text-gray-400 text-sm">Driven by excellence</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Purpose */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F4C430]/20 to-[#D4AF37]/20 rounded-2xl transform -rotate-3" />
                <div className="relative bg-[#FAF9F6] rounded-2xl p-12 shadow-2xl border-2 border-[#D4AF37]/20">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-10 h-10 text-[#0A1628]" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#0A1628] mb-4">Our Mission</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Creating sustainable value and meaningful impact across generations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-6">
                <Target className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[#D4AF37] text-sm font-medium">Our Purpose</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-6">
                {aboutData.purpose.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {aboutData.purpose.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;