import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroContent = () => {
  return (
    <section className="py-2 bg-whiteAccent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-3xl md:text-4xl font-bold text-darkBackground leading-relaxed font-montserrat mb-12">
            <span className="font-light">As your </span><span className="text-mediumGreenAccent font-light">tech stack</span><span className="font-light"> grows, are your </span><span className="font-playfair text-mediumGreenAccent italic">people leaders</span><br /><span className="font-light">more in the dark than </span><em className="font-light">ever</em><span className="font-light">?</span>
          </h1>

          {/* Meet RLIQ Section - Centered with reduced top margin */}
          <div className="text-center mt-0 mb-4 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-darkBackground mb-6 font-montserrat">
              <span className="font-montserrat">Meet </span>
              <span className="font-montserrat">RLIQ</span>
              <span className="font-montserrat">.</span>
            </h2>
            
            <p className="text-sm text-darkBackground mb-4 font-playfair">
            </p>
            
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-darkBackground mb-4 font-montserrat">
              <span className="font-light uppercase">For Leaders tired of tech that leaves </span><span className="font-playfair text-mediumGreenAccent italic text-xl md:text-2xl lg:text-3xl">people</span><span className="font-light uppercase"> behind</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Before RLIQ */}
              <div className="bg-lightGreenAccent/30 rounded-xl p-6 border border-lightGreenAccent">
                <h3 className="text-xl font-bold text-darkBackground mb-4 font-montserrat uppercase">Before RLIQ</h3>
                <ul className="space-y-2 text-darkBackground font-playfair">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span>Running your business with yesterday's map</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span>Siloed data and misaligned roles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span>People lost in the noise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span>Potential slips through the cracks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span>Leaving growth, engagement, and momentum behind</span>
                  </li>
                </ul>
              </div>

              {/* After RLIQ */}
              <div className="bg-mediumGreenAccent/20 rounded-xl p-6 border border-mediumGreenAccent">
                <h3 className="text-xl font-bold text-darkBackground mb-4 font-montserrat uppercase">After RLIQ</h3>
                <ul className="space-y-2 text-darkBackground font-playfair">
                  <li className="flex items-start gap-2">
                    <span className="text-logoGreen font-bold mt-1">•</span>
                    <span>Every person, project, and metric connected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-logoGreen font-bold mt-1">•</span>
                    <span>Real-time ecosystem that's always optimizing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-logoGreen font-bold mt-1">•</span>
                    <span>Clear visibility of talent and bottlenecks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-logoGreen font-bold mt-1">•</span>
                    <span>Spot blind spots before they cost you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-logoGreen font-bold mt-1">•</span>
                    <span>Org chart becomes a strategic tool</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-lg font-bold text-darkBackground font-playfair">
              Growth isn't luck. It's architecture.
            </p>
          </div>

          {/* Make your org chart - Centered above visualization */}
          <h2 className="text-3xl md:text-5xl font-bold text-darkBackground mb-12 leading-relaxed text-center">
            <span className="font-montserrat font-light">Make </span>
            <span className="font-montserrat font-light text-mediumGreenAccent">your org chart</span>
            <span className="font-montserrat font-light"> the most</span><br />
            <span className="font-playfair text-mediumGreenAccent italic">strategic tool</span>
            <span className="font-montserrat font-light"> in your stack.</span>
          </h2>

          {/* Org Chart Visualization */}
          <div className="relative bg-darkBackground/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-lightGreenAccent max-w-2xl mx-auto mb-8">
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