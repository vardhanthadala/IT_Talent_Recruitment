import React from 'react';
import './contact.css';
import HeroSection from './_components/HeroSection';
import TrustBar from './_components/TrustBar';
import ContactFormSection from './_components/ContactFormSection';
import WhyWorkWithUs from './_components/WhyWorkWithUs';
import GlobalReach from './_components/GlobalReach';
import FinalCTA from './_components/FinalCTA';

export const metadata = {
  title: 'Contact Us | Let\'s Build Something Exceptional',
  description: 'Whether you\'re planning a website, SaaS platform, custom software solution, or digital transformation, our team is ready to help bring your vision to life.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      <HeroSection />
      <TrustBar />
      <ContactFormSection />
      <WhyWorkWithUs />
      <GlobalReach />
      <FinalCTA />
    </main>
  );
}
