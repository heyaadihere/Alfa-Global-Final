import React from 'react';
import { Link } from 'react-router-dom';

const CorporateFooter = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img
              src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-logo-removebg-preview.png"
              alt="Alfa Global Group"
              className="h-12 mb-6 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              A diversified global organization committed to creating enduring value across industries and generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/team" className="text-sm text-gray-400 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/case-studies" className="text-sm text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/insights" className="text-sm text-gray-400 hover:text-white transition-colors">Insights</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><a href="https://portal.alfaglobalgroup.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">Client Login Portal</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li><a href="mailto:info@alfaglobalgroup.com" className="text-sm text-gray-400 hover:text-white transition-colors">info@alfaglobalgroup.com</a></li>
              <li><a href="tel:+911234567890" className="text-sm text-gray-400 hover:text-white transition-colors">+91 123 456 7890</a></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact Form</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Alfa Global Group. All rights reserved.
            </p>
            <p className="text-gray-500">
              Website Powered by{' '}
              <a href="https://techbook.co.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Techbook Technologies
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CorporateFooter;