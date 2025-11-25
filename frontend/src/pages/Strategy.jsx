import React from 'react';
import { Target, TrendingUp, Globe, Shield, BarChart } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const StrategyPage = () => {
  const strategicPillars = [
    {
      id: 1,
      number: "1",
      title: "Diversification for Stability",
      description: "We maintain a balanced and diversified portfolio across industries to reduce risk and unlock opportunity. From financial markets and private equity to sustainable agriculture, infrastructure, and cybersecurity, diversification fuels resilience and consistent performance."
    },
    {
      id: 2,
      number: "2",
      title: "Opportunity-Centric Solutions",
      description: "Our strategy is built on identifying and anticipating opportunities. Whether for family offices, enterprises, or institutions, we design solutions that deliver measurable outcomes and lasting value."
    },
    {
      id: 3,
      number: "3",
      title: "Innovation & Technology",
      description: "We harness fintech platforms, AI powered trading models, and advanced digital tools to stay ahead of evolving markets. Innovation powers efficiency, transparency, and smarter decision-making across all our ventures."
    },
    {
      id: 4,
      number: "4",
      title: "Global Expansion with Local Impact",
      description: "Our presence spans domestic and international markets, but our focus remains on creating meaningful local impact. We invest in industries that strengthen communities while generating sustainable global returns."
    },
    {
      id: 5,
      number: "5",
      title: "Responsibility & Governance",
      description: "We embrace responsible investing and governance as non negotiable. From sustainable projects in agriculture to compliance driven solutions in technology, we align business growth with environmental and social responsibility."
    }
  ];

  const execution = [
    { icon: BarChart, title: "Data Driven Decisions", description: "Advanced research and analytics guide risk management and opportunity selection." },
    { icon: Globe, title: "Strategic Partnerships", description: "Collaborating with global stakeholders, investors, and industry leaders." },
    { icon: TrendingUp, title: "Scalable Models", description: "Ventures designed to grow with evolving opportunities and markets." },
    { icon: Shield, title: "Performance Monitoring", description: "Regular reviews ensure consistent delivery, compliance, and alignment with long term goals." }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-[#D4AF37]/20 to-[#0A1628]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Strategy</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Alfa Global Group of Companies
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0A1628] mb-6 text-center">Our Strategic Approach</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center mb-16">
              At Alfa Global Group, strategy drives everything we do. Our portfolio spans alternative investments, private equity, fintech trading, infrastructure, shipping, manufacturing, agriculture, and cybersecurity yet all businesses are guided by a unified approach: combining innovation, disciplined risk management, and long term vision to deliver sustainable growth and impact.
            </p>

            {/* Strategic Pillars */}
            <h3 className="text-3xl font-bold text-[#0A1628] mb-12 text-center">Strategic Pillars</h3>
            <div className="space-y-8">
              {strategicPillars.map((pillar) => (
                <div key={pillar.id} className="border-l-4 border-[#D4AF37] pl-6 py-4">
                  <h4 className="text-xl font-bold text-[#0A1628] mb-3">
                    {pillar.number}. {pillar.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Execute */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0A1628] mb-12 text-center">How We Execute Strategy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {execution.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="border-2 border-gray-200 hover:border-[#D4AF37] transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-[#D4AF37]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#0A1628] mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Strategy Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#0A1628] mb-12">Why Our Strategy Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6">
                <p className="text-4xl font-bold text-[#D4AF37] mb-2">700+</p>
                <p className="text-gray-600">clients and partners engaged across sectors globally</p>
              </div>
              <div className="p-6">
                <p className="text-4xl font-bold text-[#D4AF37] mb-2">25+</p>
                <p className="text-gray-600">years of combined leadership experience in capital markets and ventures</p>
              </div>
              <div className="p-6">
                <p className="text-4xl font-bold text-[#D4AF37] mb-2">85%</p>
                <p className="text-gray-600">repeat engagement rate, showcasing our trusted long-term partnerships</p>
              </div>
              <div className="p-6">
                <p className="text-4xl font-bold text-[#D4AF37] mb-2">Proven</p>
                <p className="text-gray-600">track record in investments, innovation, and multi sector growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StrategyPage;