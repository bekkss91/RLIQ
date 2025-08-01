import React from 'react';
import { Eye, Target, TrendingUp } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Optimize Your People",
      description: "Reveal hidden strengths and untapped potential within your team, moving beyond traditional assessments to unlock human capacity.",
      color: "from-primary-400 to-secondary-500"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Strengthen Your Process",
      description: "Identify strategic gaps and process improvements that create sustainable growth pathways and operational excellence.",
      color: "from-primary-400 to-primary-500"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Drive Profit & Performance",
      description: "Get actionable insights that directly impact your bottom line while building regenerative practices that sustain long-term success.",
      color: "from-secondary-400 to-primary-500"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat uppercase">
            Key Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-playfair">
            RLIQ doesn't just show you data—it transforms how you understand and grow your organization by connecting people, process, and profit in one regenerative system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative z-10">
                <div className={`bg-gradient-to-r ${benefit.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat uppercase">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg font-playfair">
                  {benefit.description}
                </p>
              </div>
              
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-1 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat uppercase">
                Ready to Transform Your Organization?
              </h3>
              <p className="text-lg text-gray-600 mb-6 font-playfair">
                Join forward-thinking leaders who use RLIQ to build thriving, scalable teams.
              </p>
              <button className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-montserrat uppercase">
                Start Your Transformation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;