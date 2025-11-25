import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Mail, Globe } from 'lucide-react';
import { subsidiaries } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const CompanyDetail = () => {
  const { companySlug } = useParams();
  
  // Find company by slug
  const company = subsidiaries.find(c => c.url === `/companies/${companySlug}`);

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0A1628] mb-4">Company Not Found</h1>
          <Button asChild>
            <Link to="/companies">Back to Companies</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Extended company information
  const companyDetails = {
    'alfa-global-wealth-advisors': {
      fullDescription: "Alfa Global Wealth Advisors is a leading financial services firm with over a decade of experience across capital markets, credit, asset and portfolio management, wealth management, and asset reconstruction.",
      identity: "We deliver bespoke, independent financial advisory services not just to clients across India, but also to international professionals and expatriates worldwide. Leveraging a fully qualified team of Wealth Managers and backed by deep market insights, our client first approach has cultivated a business driven by referrals over 80% of our growth stems from existing clients' recommendations.",
      offerings: [
        "Wealth Creation & Management",
        "Business Advisory & Fund-Raising",
        "Technology Implementation",
        "Governance, Risk Management & Compliance (GRC) Advisory",
        "Assurance Services (audits and internal reviews)",
        "Internal Control over Financial Reporting Framework (ICOFR)"
      ],
      globalAccess: "Our Alfa Global Access offering empowers clients with tailored investment ideas and support, backed by global research, rigorous due diligence, and cutting edge technology. Clients whether they prefer to manage their own portfolios or opt for a more guided approach benefit from tailored advisory services, alerts on opportunities, and ongoing performance insights across assets, regions, and currencies.",
      values: "With an unwavering commitment to clarity, transparency, and long term value, our strategies are designed to evolve with changing market conditions. Alfa Global Wealth Advisors is structured as a private limited company, incorporated in Chennai in 2008, and continues to uphold both regulatory compliance and operational integrity."
    }
  };

  const details = companyDetails[companySlug] || {};

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#142444] to-[#0A1628] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-[#D4AF37]/20 to-[#0A1628]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Button
            variant="ghost"
            className="text-white hover:text-[#D4AF37] mb-8"
            asChild
          >
            <Link to="/companies">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Companies
            </Link>
          </Button>
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-40 h-40 mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center">
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{company.name}</h1>
            <p className="text-xl text-gray-300 leading-relaxed">{company.description}</p>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {details.fullDescription && (
              <div>
                <h2 className="text-3xl font-bold text-[#0A1628] mb-4">Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{details.fullDescription}</p>
              </div>
            )}

            {details.identity && (
              <div>
                <h2 className="text-3xl font-bold text-[#0A1628] mb-4">Our Identity & Reach</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{details.identity}</p>
              </div>
            )}

            {details.offerings && details.offerings.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-[#0A1628] mb-4">Core Offerings & Expertise</h2>
                <ul className="space-y-3">
                  {details.offerings.map((offering, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                      <span className="text-lg text-gray-600">{offering}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {details.globalAccess && (
              <div>
                <h2 className="text-3xl font-bold text-[#0A1628] mb-4">Alfa Global Access Global Investment Insights</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{details.globalAccess}</p>
              </div>
            )}

            {details.values && (
              <div>
                <h2 className="text-3xl font-bold text-[#0A1628] mb-4">Tone, Values & Company Credentials</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{details.values}</p>
              </div>
            )}

            {/* CTA Section */}
            <Card className="bg-gradient-to-br from-[#0A1628] to-[#142444] border-none">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Learn More?</h3>
                <p className="text-gray-300 mb-6">Contact us to discover how {company.name} can support your financial goals.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-[#D4AF37] text-[#0A1628] font-semibold hover:bg-[#F4C430]"
                    asChild
                  >
                    <Link to="/contact">
                      <Mail className="mr-2 w-5 h-5" />
                      Contact Us
                    </Link>
                  </Button>
                  {company.website && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10"
                      onClick={() => window.open(company.website, '_blank')}
                    >
                      <Globe className="mr-2 w-5 h-5" />
                      Visit Website
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyDetail;
