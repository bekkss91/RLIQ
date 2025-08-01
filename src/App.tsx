import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyRLIQ from './components/WhyRLIQ';
import Benefits from './components/Benefits';
import Assessment from './components/Assessment';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <WhyRLIQ />
      <Benefits />
      <Assessment />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;