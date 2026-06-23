import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const trustBadges = [
  "Transparent Communication",
  "Custom Technology Solutions",
  "Scalable Architecture",
  "Modern Development Practices",
  "Long-Term Support",
  "Security First Approach"
];

export default function TrustBar() {
  return (
    <section className="py-12 border-y border-slate-200 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {trustBadges.map((badge, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-slate-700 hover:bg-slate-100 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 cursor-default animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CheckCircle2 className="w-5 h-5 text-indigo-500" />
              <span className="font-medium text-sm md:text-base">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
