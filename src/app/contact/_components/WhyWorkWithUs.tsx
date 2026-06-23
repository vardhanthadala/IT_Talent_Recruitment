import React from 'react';
import { Layers, Target, Users, ShieldCheck } from 'lucide-react';

const values = [
  {
    number: "01",
    title: "Modern Technology Stack",
    description: "We build with current technologies and scalable architectures designed for long-term growth.",
    icon: Layers,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    number: "02",
    title: "Business-Focused Solutions",
    description: "Every solution is aligned with real business goals, performance, and measurable outcomes.",
    icon: Target,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    number: "03",
    title: "Collaborative Partnership",
    description: "We believe in transparent communication, regular updates, and close client collaboration.",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    number: "04",
    title: "Quality & Reliability",
    description: "We focus on clean code, performance, security, maintainability, and user experience.",
    icon: ShieldCheck,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  }
];

export default function WhyWorkWithUs() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Partner With Us</h2>
          <p className="text-lg text-slate-600">
            We are more than just developers; we are your technical partners committed to delivering scalable, secure, and impactful digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group rounded-3xl p-8 bg-slate-50 border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up h-full flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-2xl ${value.bgColor} ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <span className="text-4xl font-black text-slate-200 group-hover:text-slate-300 transition-colors">
                  {value.number}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
