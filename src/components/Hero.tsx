import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-50 overflow-hidden pt-16">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-20 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
            <span className="font-montserrat font-light">RLIQ makes </span>
            <span className="font-montserrat font-light text-primary-600">your org chart</span>
            <span className="font-montserrat font-light"> the most </span>
            <span className="font-playfair text-primary-600 italic">strategic tool</span>
            <span className="font-montserrat font-light"> in your stack.</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 mx-auto leading-relaxed font-montserrat">
            <span className="font-montserrat font-light">The Only </span><span className="font-montserrat font-light uppercase text-primary-600">AI-powered OS</span><span className="font-montserrat font-light"> for Growing </span><span className="font-montserrat text-primary-600">People</span><span className="font-montserrat font-light"> and </span><span className="font-montserrat text-primary-600">Performance</span><span className="font-montserrat font-light"> – </span><span className="font-montserrat font-light italic">Together</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl font-montserrat uppercase">
              See RLIQ in Action
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-50 transition-all duration-300 flex items-center gap-2 font-montserrat uppercase">
              <Play size={20} />
              Watch Demo
            </button>
          </div>

          {/* Org Chart Visualization */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-primary-100 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full font-montserrat uppercase">
                Transform Static → Dynamic
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Before - Static */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-400 mb-4 font-montserrat uppercase">Before: Static Org Chart</h3>
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto"></div>
                  <div className="flex justify-center gap-2">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                    <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                    <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* After - Dynamic */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-primary-600 mb-4 font-montserrat uppercase">After: Living Strategic Map</h3>
                <div className="relative w-48 h-48 mx-auto">
                  {/* Ecosystem boundary */}
                  <div className="absolute inset-0 border-2 border-dashed border-primary-300 rounded-full opacity-50"></div>
                  
                  {/* Central RLIQ Core */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full shadow-lg z-10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Team Nodes arranged in circle */}
                  {/* Top Team */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full shadow-md">
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary-400 rounded-full border-2 border-white"></div>
                  </div>
                  
                  {/* Right Team */}
                  <div className="absolute top-1/2 right-2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-secondary-400 to-primary-500 rounded-full shadow-md">
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-primary-400 rounded-full border-2 border-white"></div>
                  </div>
                  
                  {/* Bottom Team */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full shadow-md">
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-400 rounded-full border-2 border-white"></div>
                  </div>
                  
                  {/* Left Team */}
                  <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-primary-300 to-primary-400 rounded-full shadow-md">
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary-400 rounded-full border-2 border-white"></div>
                  </div>
                  
                  {/* Connection lines */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute w-12 h-0.5 bg-primary-300 -top-6 left-1/2 transform -translate-x-1/2 rotate-0"></div>
                    <div className="absolute w-12 h-0.5 bg-primary-300 top-0 -right-6 transform rotate-90"></div>
                    <div className="absolute w-12 h-0.5 bg-primary-300 top-6 left-1/2 transform -translate-x-1/2 rotate-0"></div>
                    <div className="absolute w-12 h-0.5 bg-primary-300 top-0 -left-6 transform rotate-90"></div>
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Team Nodes arranged in circle */}
                  {/* Top Team */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full shadow-md">
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary-400 rounded-full border-2 border-white"></div>
                  </div>
                  
                  {/* Right Team */}
                  <div className="absolute top-1/2 right-2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-secondary-400 to-primary-500 rounded-full shadow-md">
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-primary-400 rounded-full border-2 border-white"></div>
                  </div>
                  
                  {/* Bottom Team */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full shadow-md">
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-400 rounded-full border-2 border-white"></div>
                  </div>
                  
                  {/* Left Team */}
                  <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-primary-300 to-primary-400 rounded-full shadow-md">
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary-400 rounded-full border-2 border-white"></div>
                  </div>
                  
                  {/* Connection lines */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute w-12 h-0.5 bg-primary-300 -top-6 left-1/2 transform -translate-x-1/2 rotate-0"></div>
                    <div className="absolute w-12 h-0.5 bg-primary-300 top-0 -right-6 transform rotate-90"></div>
                    <div className="absolute w-12 h-0.5 bg-primary-300 top-6 left-1/2 transform -translate-x-1/2 rotate-0"></div>
                    <div className="absolute w-12 h-0.5 bg-primary-300 top-0 -left-6 transform rotate-90"></div>
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

export default Hero;