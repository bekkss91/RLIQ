import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroContent = () => {
  return (
    <section className="py-2 bg-whiteAccent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-3xl md:text-4xl font-bold text-darkBackground leading-relaxed font-montserrat mb-12">
            As your tech stack grows, are your people more in the dark then ever?
          </h1>

          {/* Meet RLIQ Section - Centered with expanded margins */}
          <div className="text-center mt-8 md:mt-0 mb-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-darkBackground mb-6 font-montserrat">
              <span className="font-montserrat">Meet </span>
              <span className="font-montserrat">RLIQ</span>
              <span className="font-montserrat">.</span>
            </h2>
            
            <p className="text-sm text-darkBackground mb-4 font-playfair">
              For Leaders tired of tech that leaves people behind
            </p>
            
            <p className="text-lg text-darkBackground mb-4 font-playfair">
              Before RLIQ: You're running your business with yesterday's map. Siloed data. Roles misaligned. People lost in the noise, while "potential" slips through the cracks as tech takes the lead. You're not just leaving money on the table, you're leaving growth, engagement, and momentum behind.
            </p>
            
            <p className="text-lg text-darkBackground mb-4 font-playfair">
              After RLIQ: Every person, every project, every metric connected and alive. Your org chart isn't a relic, it's a real-time ecosystem, always shifting, always optimizing. You see your talent, your bottlenecks, and your blind spots...before they cost you.
            </p>
            
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