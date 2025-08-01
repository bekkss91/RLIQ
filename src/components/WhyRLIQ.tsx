import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const WhyRLIQ = () => {
  const problems = [
    "Static org charts that don't reflect reality",
    "Dashboards that don't drive results", 
    "Annual reviews that happen too late",
    "Missed opportunities and hidden gaps"
  ];

  const solutions = [
    "Living, strategic organizational maps",
    "Actionable insights that drive growth",
    "Real-time performance visibility", 
    "Clear next steps for every role"
  ];

  return (
    <section id="why-rliq" className="py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat uppercase">
            Why RLIQ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-playfair">
            RLIQ stands for Regenerative Leadership Intelligence—a bold new movement for leaders ready to move beyond extractive, outdated practices. As the bridge between people, process, and profit, RLIQ is the first platform built to power regenerative leadership—helping organizations build teams that don't just survive, but truly thrive and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Problems */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3 font-montserrat uppercase">
              <XCircle className="w-8 h-8 text-red-500" />
              The Old Way
            </h3>
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-100">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium font-playfair">{problem}</p>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3 font-montserrat uppercase">
              <CheckCircle className="w-8 h-8 text-primary-500" />
              The RLIQ Way
            </h3>
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg border border-primary-100">
                <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium font-playfair">{solution}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-primary-100 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat uppercase">
              Transform Your Organization Today
            </h3>
            <p className="text-lg text-gray-600 mb-6 font-playfair">
              Stop managing people in spreadsheets. Start building teams that thrive.
            </p>
            <button className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg font-montserrat uppercase">
              See the Difference
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRLIQ;