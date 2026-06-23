import React from 'react';
import { Globe2 } from 'lucide-react';

export default function GlobalReach() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden text-white">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      <div className="absolute -left-40 top-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6 backdrop-blur-md border border-white/20">
            <Globe2 className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Building Digital Solutions For Businesses Worldwide</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            We collaborate remotely with startups, growing businesses, and enterprises across different industries and locations.
          </p>
        </div>

        {/* Abstract Map Area */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] mt-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-transparent rounded-3xl border border-white/5 animate-fade-in-up stagger-2">
          
          {/* Map Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10 relative"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-blue-500/50 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-blue-500/20 rounded-full animate-[ping_3s_infinite]"></div>
            </div>
            
            {/* Hover card */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 z-20">
              <span className="text-sm font-semibold text-white">Global HQ</span>
            </div>
          </div>

          {/* Location Markers */}
          {/* North America */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)] cursor-pointer group">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-md px-3 py-1.5 rounded border border-white/20 text-xs font-medium">North America</div>
          </div>
          
          {/* Europe */}
          <div className="absolute top-1/3 left-[55%] w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)] cursor-pointer group">
             <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-md px-3 py-1.5 rounded border border-white/20 text-xs font-medium">Europe</div>
          </div>

          {/* Asia */}
          <div className="absolute top-[40%] right-1/4 w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)] cursor-pointer group">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-md px-3 py-1.5 rounded border border-white/20 text-xs font-medium">Asia-Pacific</div>
          </div>

          {/* Australia */}
          <div className="absolute bottom-1/4 right-[20%] w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)] cursor-pointer group">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-md px-3 py-1.5 rounded border border-white/20 text-xs font-medium">Oceania</div>
          </div>

          {/* Connection Lines (Abstract CSS curves) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none" viewBox="0 0 1000 500">
            {/* Center to NA */}
            <path d="M 500 250 Q 375 150 250 125" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-[shimmer_2s_linear_infinite]" />
            {/* Center to EU */}
            <path d="M 500 250 Q 525 150 550 166" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
            {/* Center to Asia */}
            <path d="M 500 250 Q 625 200 750 200" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
            
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
            </defs>
          </svg>

        </div>

      </div>
    </section>
  );
}
