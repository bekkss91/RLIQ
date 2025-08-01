import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-darkBackground/90 backdrop-blur-sm border-b border-lightGreenAccent z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <div className="flex justify-between items-center h-32">
          <div className="flex-shrink-0">
            <img 
              src="https://raw.githubusercontent.com/bekkss91/RLIQ/main/public/logo.png" 
              alt="RLIQ Logo" 
              className="h-32 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8 font-montserrat">
            <a href="#how-it-works" className="text-whiteAccent hover:text-mediumGreenAccent transition-colors uppercase text-sm font-medium">How It Works</a>
            <a href="#why-rliq" className="text-whiteAccent hover:text-mediumGreenAccent transition-colors uppercase text-sm font-medium">Why RLIQ</a>
            <a href="#benefits" className="text-whiteAccent hover:text-mediumGreenAccent transition-colors uppercase text-sm font-medium">Benefits</a>
            <a href="#assessment" className="text-whiteAccent hover:text-mediumGreenAccent transition-colors uppercase text-sm font-medium">Assessment</a>
          </nav>

          <div className="hidden md:flex">
            <button className="bg-mediumGreenAccent text-darkBackground px-6 py-2 rounded-full hover:bg-logoGreen transition-colors font-montserrat uppercase text-sm font-medium">
              Request Demo
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-whiteAccent hover:text-mediumGreenAccent"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-darkBackground border-t border-lightGreenAccent">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#how-it-works" className="block px-3 py-2 text-whiteAccent hover:text-mediumGreenAccent font-montserrat uppercase text-sm font-medium">How It Works</a>
              <a href="#why-rliq" className="block px-3 py-2 text-whiteAccent hover:text-mediumGreenAccent font-montserrat uppercase text-sm font-medium">Why RLIQ</a>
              <a href="#benefits" className="block px-3 py-2 text-whiteAccent hover:text-mediumGreenAccent font-montserrat uppercase text-sm font-medium">Benefits</a>
              <a href="#assessment" className="block px-3 py-2 text-whiteAccent hover:text-mediumGreenAccent font-montserrat uppercase text-sm font-medium">Assessment</a>
              <button className="w-full text-left bg-mediumGreenAccent text-darkBackground px-3 py-2 rounded-lg hover:bg-logoGreen transition-colors mt-2 font-montserrat uppercase text-sm font-medium">
                Request Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;