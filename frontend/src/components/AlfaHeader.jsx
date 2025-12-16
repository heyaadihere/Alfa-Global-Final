import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AlfaHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-[#f5f5f5]'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              {/* Triangle Logo */}
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5L35 35H5L20 5Z" fill="#1a6b64"/>
              </svg>
              <span className="ml-2 text-2xl font-medium text-gray-800">Alfa</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/services" className="text-[15px] text-gray-700 hover:text-[#1a6b64] transition-colors">
              Explore Our Funds
            </Link>
            <Link to="/contact" className="text-[15px] text-gray-700 hover:text-[#1a6b64] transition-colors">
              Book a Consultation
            </Link>
            <Link to="/about" className="text-[15px] text-gray-700 hover:text-[#1a6b64] transition-colors">
              About Us
            </Link>
            <button className="p-2 text-gray-700 hover:text-[#1a6b64] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[300px] pb-6' : 'max-h-0'
        }`}>
          <nav className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
            <Link to="/services" className="text-[15px] text-gray-700 hover:text-[#1a6b64]">
              Explore Our Funds
            </Link>
            <Link to="/contact" className="text-[15px] text-gray-700 hover:text-[#1a6b64]">
              Book a Consultation
            </Link>
            <Link to="/about" className="text-[15px] text-gray-700 hover:text-[#1a6b64]">
              About Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AlfaHeader;
