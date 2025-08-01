import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darkBackground text-whiteAccent py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="RLIQ Logo" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-lightGreenAccent mb-4 font-playfair">
              The only AI-powered operating system for growing people and performance—together.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-mediumGreenAccent rounded-full flex items-center justify-center hover:bg-logoGreen transition-colors cursor-pointer font-montserrat">
                <span className="text-sm font-bold">Li</span>
              </div>
              <div className="w-10 h-10 bg-mediumGreenAccent rounded-full flex items-center justify-center hover:bg-logoGreen transition-colors cursor-pointer font-montserrat">
                <span className="text-sm font-bold">Tw</span>
              </div>
              <div className="w-10 h-10 bg-mediumGreenAccent rounded-full flex items-center justify-center hover:bg-logoGreen transition-colors cursor-pointer font-montserrat">
                <span className="text-sm font-bold">Fb</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat uppercase">Product</h4>
            <ul className="space-y-2 text-lightGreenAccent font-playfair">
              <li><a href="#" className="hover:text-mediumGreenAccent transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-mediumGreenAccent transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-mediumGreenAccent transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-mediumGreenAccent transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat uppercase">Company</h4>
            <ul className="space-y-2 text-lightGreenAccent font-playfair">
              <li><a href="#" className="hover:text-mediumGreenAccent transition-colors">About</a></li>
              <li><a href="#" className="hover:text-mediumGreenAccent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-mediumGreenAccent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-mediumGreenAccent transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat uppercase">Contact</h4>
            <div className="space-y-3 text-lightGreenAccent font-playfair">
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

        <div className="border-t border-lightGreenAccent pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-lightGreenAccent text-sm font-playfair">
            © 2025 RLIQ. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-lightGreenAccent mt-4 md:mt-0 font-playfair">
            <a href="#" className="hover:text-mediumGreenAccent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-mediumGreenAccent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-mediumGreenAccent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;