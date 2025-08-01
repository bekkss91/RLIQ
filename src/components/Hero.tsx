import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden pt-16 bg-darkBackground">
      {/* Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="https://raw.githubusercontent.com/bekkss91/RLIQ/main/public/logo.png" 
          alt="RLIQ Logo Background" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-darkBackground/90 via-transparent to-transparent"></div>
    </section>
  );
};

export default Hero;