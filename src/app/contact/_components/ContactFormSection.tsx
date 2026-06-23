"use client";

import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Zap, Send } from 'lucide-react';

export default function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Left Column - Form (Takes 3 columns) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Tell us about your project</h2>
                <p className="text-slate-600">We'll get back to you within 24 hours to schedule a discovery call.</p>
              </div>

              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-fade-in-up">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-600">Thank you for reaching out. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Full Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Company Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="Acme Inc." />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Email Address</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Service Required</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all appearance-none">
                      <option>Web Development</option>
                      <option>SaaS Development</option>
                      <option>AI Solutions</option>
                      <option>Mobile Applications</option>
                      <option>UI/UX Design</option>
                      <option>Dedicated Development Team</option>
                      <option>Custom Software Solutions</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Estimated Budget</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['Under $5k', '$5k-$15k', '$15k-$50k', '$50k+'].map((budget) => (
                        <label key={budget} className="cursor-pointer">
                          <input type="radio" name="budget" className="peer sr-only" />
                          <div className="text-center px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:text-indigo-700 transition-all text-sm font-medium text-slate-600">
                            {budget}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Project Description</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none" placeholder="Tell us about your goals, timeline, and requirements..."></textarea>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column - Info Cards (Takes 2 columns) */}
          <div className="lg:col-span-2 space-y-6 flex flex-col justify-center">
            
            <div className="glass-card glass-card-hover rounded-2xl p-6 flex items-start gap-4 animate-fade-in-up stagger-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Email Us</h3>
                <p className="text-slate-600 text-sm mb-2">For general inquiries and project proposals.</p>
                <a href="mailto:hello@agency.com" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">hello@agency.com</a>
              </div>
            </div>

            <div className="glass-card glass-card-hover rounded-2xl p-6 flex items-start gap-4 animate-fade-in-up stagger-2">
              <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Call Us</h3>
                <p className="text-slate-600 text-sm mb-2">Speak directly with our team.</p>
                <a href="tel:+15551234567" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">+1 (555) 123-4567</a>
              </div>
            </div>

            <div className="glass-card glass-card-hover rounded-2xl p-6 flex items-start gap-4 animate-fade-in-up stagger-3">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Business Hours</h3>
                <p className="text-slate-600 text-sm">Monday – Friday<br/>9:00 AM – 6:00 PM (EST)</p>
              </div>
            </div>

            <div className="glass-card glass-card-hover rounded-2xl p-6 flex items-start gap-4 animate-fade-in-up stagger-4">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Office Location</h3>
                <p className="text-slate-600 text-sm">120 Innovation Drive, Suite 400<br/>Tech District, NY 10001</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 flex items-center gap-4 text-white shadow-xl animate-fade-in-up stagger-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Average Response Time</h3>
                <p className="text-slate-300 text-sm">Within 2 business hours</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
