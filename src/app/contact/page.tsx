import React from 'react';
import { Metadata } from "next";
import './contact.css';
import HeroSection from './_components/HeroSection';
import TrustBar from './_components/TrustBar';
import ContactFormSection from './_components/ContactFormSection';
import ContactClient from "./ContactClient";
import WhyWorkWithUs from './_components/WhyWorkWithUs';
import GlobalReach from './_components/GlobalReach';
import FinalCTA from './_components/FinalCTA';

export const metadata: Metadata = {
    title: "Contact Us | Sreehisoft Solutions",
    description: "Get in touch with Sreehisoft Solutions for your IT staffing, recruitment, and technology service needs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      <HeroSection />
      <TrustBar />
      
      {/* You can choose to use your new ContactFormSection or the existing ContactClient here */}
      <ContactClient />
      {/* <ContactFormSection /> */}

      <WhyWorkWithUs />
      <GlobalReach />
      <FinalCTA />
    </div>
  );
}
