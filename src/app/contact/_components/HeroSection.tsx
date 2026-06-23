import React from 'react';
import { ArrowRight, Code, Cpu, Globe } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white pt-24 pb-16">

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 animate-fade-in-up stagger-1 leading-tight">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Exceptional</span> Together
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed animate-fade-in-up stagger-2">
              Whether you're planning a website, SaaS platform, custom software solution, AI-powered product, or digital transformation initiative, our team is ready to help bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3 pt-4">
              <button className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300">
                Schedule a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-300">
                Get a Free Consultation
              </button>
            </div>
          </div>

          {/* Right Visuals */}
          <div className="relative hidden lg:block animate-fade-in-up stagger-4 h-full w-full">
            <img 
              src="/customer-support.png" 
              alt="Customer Support Agent" 
              className="w-full h-[600px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
