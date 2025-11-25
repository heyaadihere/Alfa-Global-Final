import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { heroData } from '../mock';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#142444] to-[#0A1628]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F4C430]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsIDE3NSwgNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Pre-heading */}
          <div
            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-8 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
            <span className="text-[#D4AF37] text-sm font-medium">Premium Wealth Management</span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {heroData.title.split('.')[0]}.
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4C430] bg-clip-text text-transparent">
              {heroData.title.split('.')[1]}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {heroData.subtitle}
          </p>

          {/* Description */}
          <p
            className={`text-base md:text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {heroData.description}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#D4AF37] to-[#F4C430] text-[#0A1628] font-semibold hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105 text-lg px-8"
              asChild
            >
              <Link to={heroData.ctaLink}>
                {heroData.ctaText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A1628] transition-all duration-300 text-lg px-8"
              asChild
            >
              <Link to="/solutions">Our Solutions</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#D4AF37] animate-bounce cursor-pointer hover:text-[#F4C430] transition-colors"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;