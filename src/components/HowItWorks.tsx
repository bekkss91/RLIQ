import React from 'react';
import { GitBranch, Zap, TrendingUp, Users } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Connect Your Data",
      description: "Link assessments, surveys, roles, and KPIs in one unified platform"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Maps Every Seat",
      description: "RLIQ instantly analyzes and maps organizational capacity and potential"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Surface Opportunities",
      description: "Discover untapped capacity and identify strategic growth areas"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Grow Continuously",
      description: "Get real-time insights and actionable steps—in real time, not once a year"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-darkBackground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-whiteAccent mb-6 font-montserrat uppercase">
            How It Works
          </h2>
          <p className="text-xl text-lightGreenAccent max-w-3xl mx-auto font-playfair">
            Connect your assessments, surveys, roles, and KPIs. RLIQ instantly maps every seat, 
            surfaces untapped capacity, and shows you how to grow next—live, not once a year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="bg-gradient-to-br from-lightGreenAccent to-mediumGreenAccent rounded-2xl p-8 h-full border border-lightGreenAccent hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="bg-mediumGreenAccent text-darkBackground w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-logoGreen transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-darkBackground mb-4 font-montserrat uppercase">
                  {step.title}
                </h3>
                <p className="text-darkBackground leading-relaxed font-playfair">
                  {step.description}
                </p>
              </div>
              
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-lightGreenAccent transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;