import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, LogIn, ChevronDown } from 'lucide-react';
import { navigationLinks } from '../mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A1628]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-logo-removebg-preview.png"
              alt="Alfa Global Group Logo"
              className="h-12 w-auto transform group-hover:scale-110 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.dropdown ? (
                  <>
                    <button
                      className={`text-sm font-medium transition-colors duration-300 flex items-center space-x-1 ${
                        location.pathname.startsWith(link.path)
                          ? 'text-[#D4AF37]'
                          : 'text-white hover:text-[#D4AF37]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.id}
                            to={item.url}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-colors duration-300 relative group ${
                      location.pathname === link.path
                        ? 'text-[#D4AF37]'
                        : 'text-white hover:text-[#D4AF37]'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                        location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-white hover:text-[#D4AF37] hover:bg-white/10"
              onClick={() => window.open('https://client.alfaglobalgroup.com', '_blank')}
            >
              <LogIn className="w-4 h-4 mr-2" />
              Client Portal
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1628] border-t border-[#D4AF37]/20">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navigationLinks.map((link) => (
              <div key={link.path}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.path ? null : link.path)}
                      className="text-base font-medium text-white hover:text-[#D4AF37] py-2 flex items-center justify-between w-full"
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.path ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === link.path && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.id}
                            to={item.url}
                            className="block text-sm text-gray-400 hover:text-[#D4AF37] py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-base font-medium transition-colors py-2 block ${
                      location.pathname === link.path
                        ? 'text-[#D4AF37]'
                        : 'text-white hover:text-[#D4AF37]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-[#D4AF37]/20">
              <Button
                variant="outline"
                className="w-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A1628]"
                onClick={() => {
                  window.open('https://client.alfaglobalgroup.com', '_blank');
                  setIsMobileMenuOpen(false);
                }}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Client Portal
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;