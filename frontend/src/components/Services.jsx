import React from 'react';
import { TrendingUp, Briefcase, Rocket, Users } from 'lucide-react';
import { servicesData } from '../mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const iconMap = {
  TrendingUp: TrendingUp,
  Briefcase: Briefcase,
  Rocket: Rocket,
  Users: Users
};

const Services = () => {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-4">
            Our <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4C430] bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Comprehensive wealth management solutions tailored to your unique financial goals and aspirations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="group border-2 border-gray-200 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20 bg-white overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[#0A1628]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#0A1628] group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;