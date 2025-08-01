import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroContent = () => {
  return (
    <section className="py-20 bg-whiteAccent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          
          <h1 className="text-3xl md:text-5xl font-bold text-darkBackground mb-6 leading-relaxed">
            <span className="font-montserrat font-light">RLIQ makes </span>
            <span className="font-montserrat font-light text-mediumGreenAccent">your org chart</span>
            <span className="font-montserrat font-light"> the most </span>
            <span className="font-playfair text-mediumGreenAccent italic">strategic tool</span>
            <span className="font-montserrat font-light"> in your stack.</span>
          </h1>
          
          <p className="text-xl text-darkBackground mb-12 leading-relaxed font-montserrat">
            <span className="font-montserrat font-light">The Only </span><span className="font-montserrat font-light uppercase text-mediumGreenAccent">AI-powered OS</span><span className="font-montserrat font-light"> for Growing </span><span className="font-montserrat text-mediumGreenAccent">People</span><span className="font-montserrat font-light"> and </span><span className="font-montserrat text-mediumGreenAccent">Performance</span><span className="font-montserrat font-light"> – </span><span className="font-montserrat font-light italic">Together</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start mb-16">
            <button className="group bg-mediumGreenAccent text-darkBackground px-8 py-4 rounded-full text-lg font-semibold hover:bg-logoGreen transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl font-montserrat uppercase">
              See RLIQ in Action
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-mediumGreenAccent text-mediumGreenAccent px-8 py-4 rounded-full text-lg font-semibold hover:bg-lightGreenAccent hover:text-darkBackground transition-all duration-300 flex items-center gap-2 font-montserrat uppercase">
              <Play size={20} />
              Watch Demo
            </button>
          </div>

          {/* Org Chart Visualization */}
          <div className="relative bg-darkBackground/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-lightGreenAccent max-w-2xl mr-auto mb-8">
            <div className="text-left mb-6">
              <span className="text-sm font-semibold text-logoGreen bg-lightGreenAccent px-3 py-1 rounded-full font-montserrat uppercase">
                Transform Static → Dynamic
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Before - Static */}
              <div className="text-left">
                <h3 className="text-base font-semibold text-whiteAccent mb-3 font-montserrat uppercase">Before: Static Org Chart</h3>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-lightGreenAccent rounded-lg mx-auto"></div>
                  <div className="flex justify-center gap-2">
                    <div className="w-8 h-8 bg-lightGreenAccent rounded-lg"></div>
                    <div className="w-8 h-8 bg-lightGreenAccent rounded-lg"></div>
                    <div className="w-8 h-8 bg-lightGreenAccent rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* After - Dynamic */}
              <div className="text-left">
                <h3 className="text-base font-semibold text-mediumGreenAccent mb-3 font-montserrat uppercase">After: Living Strategic Map</h3>
                <div className="relative w-32 h-32 mx-auto">
                  {/* Ecosystem boundary */}
                  <div className="absolute inset-0 border-2 border-dashed border-mediumGreenAccent rounded-full opacity-50"></div>
                  
                  {/* Central RLIQ Core */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-mediumGreenAccent to-logoGreen rounded-full shadow-lg z-10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-whiteAccent rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Team Nodes arranged in circle */}
                  {/* Top Team */}
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-mediumGreenAccent to-logoGreen rounded-full shadow-md">
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-lightGreenAccent rounded-full border border-whiteAccent"></div>
                  </div>
                  
                  {/* Right Team */}
                  <div className="absolute top-1/2 right-1 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-lightGreenAccent to-mediumGreenAccent rounded-full shadow-md">
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-mediumGreenAccent rounded-full border border-whiteAccent"></div>
                  </div>
                  
                  {/* Bottom Team */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-mediumGreenAccent to-logoGreen rounded-full shadow-md">
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-mediumGreenAccent rounded-full border border-whiteAccent"></div>
                  </div>
                  
                  {/* Left Team */}
                  <div className="absolute top-1/2 left-1 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-lightGreenAccent to-mediumGreenAccent rounded-full shadow-md">
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-lightGreenAccent rounded-full border border-whiteAccent"></div>
                  </div>
                  
                  {/* Connection lines */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute w-8 h-0.5 bg-lightGreenAccent -top-4 left-1/2 transform -translate-x-1/2 rotate-0"></div>
                    <div className="absolute w-8 h-0.5 bg-lightGreenAccent top-0 -right-4 transform rotate-90"></div>
                    <div className="absolute w-8 h-0.5 bg-lightGreenAccent top-4 left-1/2 transform -translate-x-1/2 rotate-0"></div>
                    <div className="absolute w-8 h-0.5 bg-lightGreenAccent top-0 -left-4 transform rotate-90"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;