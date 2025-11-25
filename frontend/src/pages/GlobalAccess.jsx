import React from 'react';
import { Globe, DollarSign, TrendingUp, Sprout, Shield } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const GlobalAccessPage = () => {
  const services = [
    {
      id: 1,
      icon: DollarSign,
      title: "Financial Markets & Wealth Advisory Access",
      subtitle: "Through Alfa Global Wealth Advisors and Gazillion Capital, our clients benefit from:",
      points: [
        "Access to global financial instruments",
        "Cross border wealth advisory and planning",
        "Entry into exclusive private equity and strategic investments"
      ]
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Fintech & Trading Platforms",
      subtitle: "With Alfa Zillion Traders LLP, we provide:",
      points: [
        "AI driven fintech trading platforms",
        "Alpha engineered trading strategies for select global partners",
        "Access to emerging markets and high value opportunities"
      ]
    },
    {
      id: 3,
      icon: Sprout,
      title: "Global Trade in Agriculture & Resources",
      subtitle: "Through MK Dairy Farms Pvt Ltd, we bring:",
      points: [
        "Sustainable agricultural practices aligned with international standards",
        "Export ready products for global markets",
        "Partnerships that strengthen the global agri trade ecosystem"
      ]
    },
    {
      id: 4,
      icon: Shield,
      title: "Cyber Security Without Borders",
      subtitle: "Cyberhakz Pvt Ltd provides:",
      points: [
        "Enterprise grade cyber security solutions tailored for global operations",
        "Compliance with international regulations (GDPR, ISO, HIPAA, etc.)",
        "Threat detection and prevention for multinational corporations"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-[#D4AF37]/20 to-[#0A1628]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Global Access</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our Expertise
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#0A1628] mb-6">
              Connecting Businesses to Global Opportunities
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              At Alfa Global Group of Companies, our strength lies in giving clients seamless access to international markets, investment opportunities, and cross border partnerships. With a strong global footprint, we bridge the gap between local expertise and international scale, enabling our partners to grow beyond boundaries.
            </p>

            <h3 className="text-2xl font-bold text-[#0A1628] mb-4">Our Global Reach</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We work with clients and partners across Asia, Europe, Middle East, and North America, ensuring they gain access to world class financial products, private equity opportunities, agricultural trade, and cyber security solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Global Reach Images */}
      <section className="py-12 bg-[#FAF9F6]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <img
              src="https://websitesbytechpioneers.com/alfaglobalnew/image/global-reach-1.png"
              alt="Global Reach"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <img
              src="https://websitesbytechpioneers.com/alfaglobalnew/image/global-reach-2.png"
              alt="Global Network"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A1628] mb-2">{service.title}</h3>
                    <p className="text-gray-600 italic">{service.subtitle}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <ul className="space-y-3">
                      {service.points.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Global Access */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0A1628] mb-12 text-center">Why Global Access with Alfa Global?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-[#D4AF37]/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-[#D4AF37] font-bold text-lg mb-2">Presence in 10+ countries</h3>
                  <p className="text-gray-600">Presence in 10+ countries with strategic partnerships worldwide</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#D4AF37]/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-[#D4AF37] font-bold text-lg mb-2">25+ years of combined leadership</h3>
                  <p className="text-gray-600">25+ years of combined leadership experience across international markets</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#D4AF37]/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-[#D4AF37] font-bold text-lg mb-2">Trusted by 700+ clients</h3>
                  <p className="text-gray-600">Trusted by 700+ clients including HNIs, institutions, and enterprises</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#D4AF37]/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-[#D4AF37] font-bold text-lg mb-2">85% repeat engagement rate</h3>
                  <p className="text-gray-600">85% repeat engagement rate, proof of lasting global relationships</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-24 bg-gradient-to-br from-[#0A1628] to-[#142444]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Our Promise</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              At Alfa Global Group, we go beyond capital to unlock opportunities across industries and borders. Through innovation, disciplined execution, and a global vision, we deliver access, growth, and impact that stand the test of time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalAccessPage;