import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4 font-playfair">RLIQ</h3>
            <p className="text-gray-300 mb-4 font-playfair">
              The only AI-powered operating system for growing people and performance—together.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors cursor-pointer font-montserrat">
                <span className="text-sm font-bold">Li</span>
              </div>
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors cursor-pointer font-montserrat">
                <span className="text-sm font-bold">Tw</span>
              </div>
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors cursor-pointer font-montserrat">
                <span className="text-sm font-bold">Fb</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat uppercase">Product</h4>
            <ul className="space-y-2 text-gray-300 font-playfair">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat uppercase">Company</h4>
            <ul className="space-y-2 text-gray-300 font-playfair">
              <li><a href="#" className="hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat uppercase">Contact</h4>
            <div className="space-y-3 text-gray-300 font-playfair">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@rliq.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-playfair">
            © 2025 RLIQ. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0 font-playfair">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;