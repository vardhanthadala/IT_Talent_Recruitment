import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="relative rounded-[2rem] overflow-hidden bg-slate-900 p-10 md:p-16 text-center animate-fade-in-up">
          {/* Animated Borders & Glow */}
          <div className="absolute inset-0 border-[3px] border-transparent rounded-[2rem] [background:linear-gradient(theme(colors.slate.900),theme(colors.slate.900))_padding-box,linear-gradient(to_right,theme(colors.blue.500),theme(colors.purple.500))_border-box]"></div>
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,theme(colors.blue.500)_360deg)] animate-[spin_4s_linear_infinite] opacity-20 pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready To Start Your Next Project?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Tell us about your vision and we'll help define the right strategy, timeline, and technology approach.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-medium hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 duration-300">
                Book A Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 bg-transparent text-white rounded-xl font-medium border border-white/20 hover:bg-white/10 transition-all hover:-translate-y-0.5 duration-300">
                <MessageSquare className="w-5 h-5" />
                Contact Our Team
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
