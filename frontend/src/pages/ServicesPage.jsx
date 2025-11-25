import React from 'react';
import { TrendingUp, DollarSign, Users, Globe, Sprout, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      icon: DollarSign,
      title: "Wealth Management & Advisory",
      description: "Through Alfa Global Wealth Advisors, we offer personalized wealth management, investment planning, and advisory solutions for high net worth individuals (HNIs) and institutional clients. Our team focuses on portfolio diversification, tax efficiency, and risk management to help clients achieve financial freedom and security."
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Private Equity & Strategic Investments",
      description: "Alfa Star Dynamics LLP drives private equity and capital investments across global maritime, infrastructure, and industrial sectors. We identify high growth opportunities and structure investments that deliver superior returns while ensuring governance and compliance. and risk management to help clients achieve financial freedom and security."
    },
    {
      id: 3,
      icon: Users,
      title: "Fintech Trading & Alpha Engineering",
      description: "With Alfa Zillion Traders LLP, we combine fintech innovation with advanced trading strategies. Our proprietary platforms and AI powered models empower select partners to capture alpha, optimize portfolios, and redefine how trading is executed."
    },
    {
      id: 4,
      icon: Globe,
      title: "Wealth Product Distribution & Broking",
      description: "Gazillion Capital Pvt Ltd is a next generation platform for financial product distribution, stock broking, and investor education. We simplify access to financial markets and equip investors with knowledge to make informed decisions."
    },
    {
      id: 5,
      icon: Sprout,
      title: "Agriculture & Natural Resources",
      description: "Through MK Dairy Farms Pvt Ltd, we bring innovation to agriculture, dairy, and natural resources distribution. Our sustainable practices support rural economies while ensuring supply chain reliability and quality output."
    },
    {
      id: 6,
      icon: Shield,
      title: "Cyber Security Solution",
      description: "Cyberhakz Pvt Ltd delivers enterprise grade cyber security services to protect businesses from evolving threats. From network security to compliance and threat detection, we help organizations safeguard their assets and maintain trust in a digital world."
    }
  ];

  const whyChoose = [
    { label: "Diversified portfolio", value: "Diversified portfolio spanning finance, technology, agriculture, and security" },
    { label: "25+ years of leadership experience", value: "25+ years of leadership experience across industries and global markets" },
    { label: "85% repeat engagement rate", value: "85% repeat engagement rate, showcasing our trusted long term partnerships" },
    { label: "Client centric approach", value: "Client centric approach with tailored strategies for HNIs, enterprises, and institutions" },
    { label: "Innovation driven execution", value: "Innovation driven execution leveraging fintech, AI, and cyber technologies" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#142444] to-[#0A1628] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#D4AF37] font-semibold mb-4 uppercase tracking-wider">Our Core Services</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Services</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Delivering Value Across Industries
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              At Alfa Global Group of Companies, we provide a comprehensive suite of services that span financial markets, wealth management, private equity, trading, agriculture, and cyber security. Our diversified expertise allows us to serve HNIs, institutions, and enterprises with tailored solutions that drive growth, stability, and long term success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="border-2 border-gray-200 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#0A1628]">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Need a custom solution? Let's create a strategy tailored for your business.
            </p>
            <Button
              size="lg"
              className="bg-[#D4AF37] text-[#0A1628] font-semibold hover:bg-[#F4C430] transition-all hover:shadow-lg text-lg px-8"
              asChild
            >
              <Link to="/contact">Get a Free Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0A1628] text-center mb-12">
              Why Choose Alfa Global Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChoose.map((item, index) => (
                <div key={index} className="text-center p-6">
                  <h3 className="text-[#D4AF37] font-bold text-lg mb-2">{item.label}</h3>
                  <p className="text-gray-600">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;