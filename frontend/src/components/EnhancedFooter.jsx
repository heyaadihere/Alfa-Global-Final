import React from 'react';
import { Link } from 'react-router-dom';

const EnhancedFooter = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Top Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-600/60 to-transparent" />
      
      {/* Ultra-Detailed City Skyline with Depth */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1600 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            {/* Gradient Definitions */}
            <linearGradient id="buildingGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#1f2937', stopOpacity: 0.9}} />
              <stop offset="100%" style={{stopColor: '#111827', stopOpacity: 0.6}} />
            </linearGradient>
            <linearGradient id="buildingGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#374151', stopOpacity: 0.8}} />
              <stop offset="100%" style={{stopColor: '#1f2937', stopOpacity: 0.5}} />
            </linearGradient>
            <linearGradient id="buildingGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#4b5563', stopOpacity: 0.9}} />
              <stop offset="100%" style={{stopColor: '#374151', stopOpacity: 0.6}} />
            </linearGradient>
          </defs>
          
          {/* Background Layer - Distant Buildings */}
          <g opacity="0.3">
            <rect x="0" y="350" width="100" height="250" fill="url(#buildingGrad1)" />
            <rect x="100" y="320" width="120" height="280" fill="url(#buildingGrad1)" />
            <rect x="220" y="340" width="90" height="260" fill="url(#buildingGrad1)" />
            <rect x="310" y="300" width="110" height="300" fill="url(#buildingGrad1)" />
            <rect x="1300" y="330" width="100" height="270" fill="url(#buildingGrad1)" />
            <rect x="1400" y="310" width="120" height="290" fill="url(#buildingGrad1)" />
            <rect x="1520" y="340" width="80" height="260" fill="url(#buildingGrad1)" />
          </g>
          
          {/* Middle Layer - Mid-distance Buildings */}
          <g opacity="0.5">
            {/* Left Section */}
            <rect x="50" y="280" width="80" height="320" fill="url(#buildingGrad2)">
              <animate attributeName="opacity" values="0.5;0.7;0.5" dur="5s" repeatCount="indefinite" />
            </rect>
            <rect x="130" y="250" width="100" height="350" fill="url(#buildingGrad2)">
              <animate attributeName="opacity" values="0.5;0.8;0.5" dur="6s" repeatCount="indefinite" />
            </rect>
            <rect x="230" y="290" width="70" height="310" fill="url(#buildingGrad2)">
              <animate attributeName="opacity" values="0.5;0.7;0.5" dur="4.5s" repeatCount="indefinite" />
            </rect>
            
            {/* Center Section */}
            <rect x="700" y="200" width="90" height="400" fill="url(#buildingGrad2)">
              <animate attributeName="opacity" values="0.5;0.8;0.5" dur="5.5s" repeatCount="indefinite" />
            </rect>
            <rect x="790" y="240" width="110" height="360" fill="url(#buildingGrad2)">
              <animate attributeName="opacity" values="0.5;0.7;0.5" dur="6s" repeatCount="indefinite" />
            </rect>
            
            {/* Right Section */}
            <rect x="1350" y="270" width="85" height="330" fill="url(#buildingGrad2)">
              <animate attributeName="opacity" values="0.5;0.7;0.5" dur="5s" repeatCount="indefinite" />
            </rect>
            <rect x="1435" y="240" width="95" height="360" fill="url(#buildingGrad2)">
              <animate attributeName="opacity" values="0.5;0.8;0.5" dur="5.5s" repeatCount="indefinite" />
            </rect>
          </g>
          
          {/* Foreground Layer - Prominent Buildings */}
          <g opacity="0.8">
            {/* Building 1 - Tall Left */}
            <rect x="100" y="150" width="95" height="450" fill="url(#buildingGrad3)">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite" />
            </rect>
            {/* Windows */}
            <rect x="110" y="180" width="15" height="20" fill="#D4AF37" opacity="0.7">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite" />
            </rect>
            <rect x="130" y="180" width="15" height="20" fill="#D4AF37" opacity="0.5">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="4s" repeatCount="indefinite" />
            </rect>
            <rect x="150" y="180" width="15" height="20" fill="#D4AF37" opacity="0.6">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" />
            </rect>
            <rect x="170" y="180" width="15" height="20" fill="#D4AF37" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="3.5s" repeatCount="indefinite" />
            </rect>
            
            {/* Building 2 - Very Tall Center */}
            <rect x="400" y="80" width="110" height="520" fill="url(#buildingGrad3)">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="5s" repeatCount="indefinite" />
            </rect>
            {/* Windows with grid pattern */}
            <rect x="420" y="110" width="18" height="25" fill="#D4AF37" opacity="0.7">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="445" y="110" width="18" height="25" fill="#D4AF37" opacity="0.5">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite" />
            </rect>
            <rect x="470" y="110" width="18" height="25" fill="#D4AF37" opacity="0.8">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
            </rect>
            
            {/* Building 3 - Modern Angular */}
            <polygon points="600,200 720,200 720,600 600,600" fill="url(#buildingGrad3)">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="4.5s" repeatCount="indefinite" />
            </polygon>
            <rect x="630" y="240" width="20" height="28" fill="#D4AF37" opacity="0.6">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite" />
            </rect>
            <rect x="660" y="240" width="20" height="28" fill="#D4AF37" opacity="0.7">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2.8s" repeatCount="indefinite" />
            </rect>
            
            {/* Building 4 - Stepped Design */}
            <rect x="900" y="180" width="100" height="420" fill="url(#buildingGrad3)">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="5.5s" repeatCount="indefinite" />
            </rect>
            <rect x="920" y="220" width="16" height="22" fill="#D4AF37" opacity="0.7">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2.3s" repeatCount="indefinite" />
            </rect>
            <rect x="945" y="220" width="16" height="22" fill="#D4AF37" opacity="0.6">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3.2s" repeatCount="indefinite" />
            </rect>
            <rect x="970" y="220" width="16" height="22" fill="#D4AF37" opacity="0.8">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2.7s" repeatCount="indefinite" />
            </rect>
            
            {/* Building 5 - Iconic Tall Tower */}
            <rect x="1100" y="60" width="120" height="540" fill="url(#buildingGrad3)">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite" />
            </rect>
            {/* Antenna/Spire */}
            <polygon points="1160,60 1165,30 1155,30" fill="#D4AF37" opacity="0.9">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
            </polygon>
            {/* Windows */}
            <rect x="1120" y="100" width="20" height="30" fill="#D4AF37" opacity="0.8">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
            </rect>
            <rect x="1150" y="100" width="20" height="30" fill="#D4AF37" opacity="0.7">
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.1s" repeatCount="indefinite" />
            </rect>
            <rect x="1180" y="100" width="20" height="30" fill="#D4AF37" opacity="0.9">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.6s" repeatCount="indefinite" />
            </rect>
            
            {/* Building 6 - Wide Corporate */}
            <rect x="1300" y="220" width="130" height="380" fill="url(#buildingGrad3)">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="5s" repeatCount="indefinite" />
            </rect>
            <rect x="1330" y="260" width="18" height="26" fill="#D4AF37" opacity="0.6">
              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.9s" repeatCount="indefinite" />
            </rect>
            <rect x="1360" y="260" width="18" height="26" fill="#D4AF37" opacity="0.7">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="3.3s" repeatCount="indefinite" />
            </rect>
            <rect x="1390" y="260" width="18" height="26" fill="#D4AF37" opacity="0.8">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" />
            </rect>
          </g>
          
          {/* Atmospheric Stars/Lights */}
          <circle cx="300" cy="120" r="3" fill="#D4AF37" opacity="0.8">
            <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="550" cy="80" r="2" fill="#D4AF37" opacity="0.9">
            <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="850" cy="140" r="3" fill="#D4AF37" opacity="0.7">
            <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="1050" cy="100" r="2" fill="#D4AF37" opacity="0.8">
            <animate attributeName="opacity" values="0;1;0" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="1250" cy="160" r="3" fill="#D4AF37" opacity="0.9">
            <animate attributeName="opacity" values="0;1;0" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="1450" cy="120" r="2" fill="#D4AF37" opacity="0.7">
            <animate attributeName="opacity" values="0;1;0" dur="2.7s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Multi-layer Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 via-transparent to-gray-900/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Decorative Top Section */}
        <div className="mb-16 text-center">
          <div className="inline-block">
            <h3 className="text-3xl font-light tracking-wider mb-2">Alfa Global Group</h3>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Company Info with Enhanced Design */}
          <div className="animate-fade-in space-y-6">
            <img
              src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-logo-removebg-preview.png"
              alt="Alfa Global Group"
              className="h-16 mb-6 filter brightness-110 hover:brightness-125 transition-all duration-300"
            />
            <p className="text-sm text-gray-400 leading-relaxed font-light border-l-2 border-amber-600/30 pl-4">
              A diversified global organization committed to creating enduring value across industries and generations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in stagger-1">
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-6 text-amber-500">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/team', label: 'Our Team' },
                { to: '/case-studies', label: 'Case Studies' },
                { to: '/careers', label: 'Careers' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-sm text-gray-400 hover:text-amber-500 transition-all duration-300 font-light inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-amber-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-fade-in stagger-2">
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-6 text-amber-500">Resources</h3>
            <ul className="space-y-4">
              {[
                { to: '/insights', label: 'Insights' },
                { to: '/faq', label: 'FAQ' },
                { href: 'https://portal.alfaglobalgroup.com', label: 'Client Login Portal', external: true }
              ].map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-amber-500 transition-all duration-300 font-light inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-amber-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.to} 
                      className="text-sm text-gray-400 hover:text-amber-500 transition-all duration-300 font-light inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-amber-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in stagger-3">
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-6 text-amber-500">Contact</h3>
            <ul className="space-y-4 mb-8">
              <li className="text-sm text-gray-400 font-light hover:text-amber-500 transition-colors">
                <a href="mailto:info@alfaglobalgroup.com" className="inline-flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@alfaglobalgroup.com
                </a>
              </li>
              <li className="text-sm text-gray-400 font-light hover:text-amber-500 transition-colors">
                <a href="tel:+911234567890" className="inline-flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 123 456 7890
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-amber-500 transition-colors font-light inline-flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Contact Form
                </Link>
              </li>
            </ul>
            
            {/* Enhanced Social Media */}
            <div className="flex gap-3">
              {[
                { icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                { icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                { icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="relative w-11 h-11 border border-gray-700 flex items-center justify-center hover:border-amber-500 transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-all duration-300" />
                  <svg className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar with Enhanced Design */}
        <div className="relative pt-8 border-t border-gray-800">
          <div className="absolute top-0 left-0 right-0 h-px">
            <div className="h-full bg-gradient-to-r from-transparent via-amber-600/40 to-transparent" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 font-light">
              © {new Date().getFullYear()} Alfa Global Group. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 font-light">Website Powered by</span>
              <a
                href="https://techbook.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-amber-500 hover:text-amber-400 font-normal transition-all duration-300 hover:underline"
              >
                Techbook Technologies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
