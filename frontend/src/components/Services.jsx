import React from 'react';
import { TrendingUp, Briefcase, Rocket, Users } from 'lucide-react';
import { servicesData } from '../mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const iconMap = {
  TrendingUp: TrendingUp,
  Briefcase: Briefcase,
  Rocket: Rocket,
  Users: Users
};

const Services = () => {
  return (
    <section className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=srgb&fm=jpg&q=85"
          alt="Business Meeting"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-4">
            Smart Financial Solutions for Every Stage of Life
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From building wealth to securing your future, our expert services are designed to help you achieve lasting financial success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="group border border-gray-200 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl bg-white overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#D4AF37] transition-all duration-300">
                    <Icon className="w-7 h-7 text-[#D4AF37] group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#0A1628] group-hover:text-[#D4AF37] transition-colors">
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

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#D4AF37] text-[#0A1628] font-semibold hover:bg-[#F4C430] transition-all duration-300 hover:shadow-lg text-lg px-8"
            asChild
          >
            <Link to="/solutions">
              Explore All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;