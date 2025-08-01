import React from 'react';
import { ArrowRight, Calendar, Play } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-darkBackground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-mediumGreenAccent to-logoGreen rounded-3xl p-1">
          <div className="bg-whiteAccent rounded-[22px] p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-darkBackground mb-6 font-montserrat uppercase">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-darkBackground max-w-3xl mx-auto mb-12 font-playfair">
              Join forward-thinking leaders who use RLIQ to build thriving, scalable teams. 
              See how our AI-powered OS can turn your org chart into your most strategic tool.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="group bg-mediumGreenAccent text-darkBackground px-8 py-4 rounded-full text-lg font-semibold hover:bg-logoGreen transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl font-montserrat uppercase">
                <Calendar size={20} />
                Request a Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-mediumGreenAccent text-logoGreen px-8 py-4 rounded-full text-lg font-semibold hover:bg-lightGreenAccent transition-all duration-300 flex items-center gap-2 font-montserrat uppercase">
                <Play size={20} />
                Watch Demo Video
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-logoGreen mb-2 font-montserrat">5min</div>
                <p className="text-darkBackground font-playfair">Setup Time</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-logoGreen mb-2 font-montserrat">Real-time</div>
                <p className="text-darkBackground font-playfair">Insights</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-logoGreen mb-2 font-montserrat">24/7</div>
                <p className="text-darkBackground font-playfair">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;