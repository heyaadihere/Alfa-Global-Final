import React from 'react';
import { Link } from 'react-router-dom';

const LuxuryFooter = () => {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Architectural Design Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Building outlines - architectural style */}
          <path d="M0 400V200L100 150V400H0Z" fill="white" />
          <path d="M100 400V120L200 100V400H100Z" fill="white" />
          <path d="M200 400V80L300 60V400H200Z" fill="white" />
          <path d="M300 400V140L400 120V400H300Z" fill="white" />
          <path d="M400 400V100L500 80V400H400Z" fill="white" />
          <path d="M500 400V160L600 140V400H500Z" fill="white" />
          <path d="M600 400V90L700 70V400H600Z" fill="white" />
          <path d="M700 400V130L800 110V400H700Z" fill="white" />
          <path d="M800 400V170L900 150V400H800Z" fill="white" />
          <path d="M900 400V110L1000 90V400H900Z" fill="white" />
          <path d="M1000 400V180L1100 160V400H1000Z" fill="white" />
          <path d="M1100 400V120L1200 100V400H1100Z" fill="white" />
          
          {/* Grid lines for architectural effect */}
          {[...Array(12)].map((_, i) => (
            <React.Fragment key={i}>
              <line x1={i * 100} y1="0" x2={i * 100} y2="400" stroke="white" strokeWidth="0.5" opacity="0.3" />
            </React.Fragment>
          ))}
          {[...Array(8)].map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 50} x2="1200" y2={i * 50} stroke="white" strokeWidth="0.5" opacity="0.3" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <img
              src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-logo-removebg-preview.png"
              alt="Alfa Global Group"
              className="h-14 mb-6"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              A diversified global organization committed to creating enduring value across industries and generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-light tracking-widest uppercase mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors font-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors font-light">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-gray-400 hover:text-white transition-colors font-light">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-gray-400 hover:text-white transition-colors font-light">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-400 hover:text-white transition-colors font-light">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-light tracking-widest uppercase mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/insights" className="text-sm text-gray-400 hover:text-white transition-colors font-light">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-400 hover:text-white transition-colors font-light">
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://portal.alfaglobalgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors font-light"
                >
                  Client Login Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-light tracking-widest uppercase mb-6 text-white">Contact</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-sm text-gray-400 font-light">
                <a href="mailto:info@alfaglobalgroup.com" className="hover:text-white transition-colors">
                  info@alfaglobalgroup.com
                </a>
              </li>
              <li className="text-sm text-gray-400 font-light">
                <a href="tel:+911234567890" className="hover:text-white transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors font-light">
                  Contact Form
                </Link>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with architectural line */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 font-light">
              © {new Date().getFullYear()} Alfa Global Group. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 font-light">
              Website Powered by{' '}
              <a
                href="https://techbook.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline font-normal"
              >
                Techbook Technologies
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LuxuryFooter;