import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AlfaHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    { 
      label: 'About', 
      path: '/about',
      dropdown: null
    },
    { 
      label: 'Wealth Management', 
      path: '/services',
      dropdown: [
        { label: 'Family Businesses', path: '/services#family' },
        { label: 'Professionals & CXOs', path: '/services#professionals' },
        { label: 'Founders & Entrepreneurs', path: '/services#founders' }
      ]
    },
    { 
      label: 'Asset Management', 
      path: '/services#asset',
      dropdown: null
    },
    { 
      label: 'Insights', 
      path: '/insights',
      dropdown: null
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-logo-removebg-preview.png"
              alt="Alfa Global Group"
              className="h-14 md:h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <div 
                key={index}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  to={item.path} 
                  className={`text-[15px] tracking-wide transition-colors duration-300 ${
                    isScrolled ? 'text-gray-800 hover:text-[#1a5f5a]' : 'text-gray-800 hover:text-[#1a5f5a]'
                  }`}
                >
                  {item.label}
                </Link>
                
                {item.dropdown && activeDropdown === index && (
                  <div className="absolute top-full left-0 pt-4">
                    <div className="bg-white shadow-xl border-t-2 border-[#1a5f5a] min-w-[240px] py-3">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1a5f5a] transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="https://portal.alfaglobalgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[15px] tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-gray-800 hover:text-[#1a5f5a]' : 'text-gray-800 hover:text-[#1a5f5a]'
              }`}
            >
              Client Login Portal
            </a>
            <Link
              to="/contact"
              className="px-7 py-3 bg-[#1a5f5a] text-white text-[15px] tracking-wide hover:bg-[#154d49] transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-800"
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[500px] pb-6' : 'max-h-0'
        }`}>
          <nav className="flex flex-col space-y-1 pt-4 border-t border-gray-100">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                to={item.path} 
                className="py-3 text-gray-800 text-[15px] hover:text-[#1a5f5a] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://portal.alfaglobalgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 text-gray-800 text-[15px] hover:text-[#1a5f5a] transition-colors"
            >
              Client Login Portal
            </a>
            <Link
              to="/contact"
              className="mt-4 px-7 py-3 bg-[#1a5f5a] text-white text-[15px] text-center hover:bg-[#154d49] transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AlfaHeader;
