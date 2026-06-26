"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "The Clinical SAS Training was incredibly comprehensive. It took me from basic concepts to fully understanding SDTM and ADaM dataset creation. Within a month of completion, I secured a role as a Clinical Data Programmer.",
    name: "Priya Sharma",
    role: "Clinical SAS Programmer",
    image: ""
  },
  {
    id: 2,
    text: "Transitioning from legacy tools to the Pharmaverse ecosystem in R seemed daunting, but this course made it seamless. The hands-on projects helped me design publication-grade TLFs with confidence.",
    name: "David Chen",
    role: "Biostatistician",
    image: ""
  },
  {
    id: 3,
    text: "This training perfectly bridged the gap between raw clinical data and modern AI. Learning how to build pipelines and parse unstructured clinical notes with NLP has entirely changed how our team approaches drug discovery.",
    name: "Sarah Jenkins",
    role: "Clinical Data Scientist",
    image: ""
  },
  {
    id: 4,
    text: "Excellent curriculum for anyone dealing with observational data. The course provided practical insights into handling massive healthcare datasets, significantly improving my analytical capabilities in RWE.",
    name: "Michael O'Connor",
    role: "Epidemiologist",
    image: ""
  },
  {
    id: 5,
    text: "The PK/PD Modeling & Pharmacometrics module was exactly what I needed to advance my career. The instructors broke down complex statistical models into easily understandable, practical concepts.",
    name: "Ananya Patel",
    role: "Pharmacometrician",
    image: ""
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const getVisibleCards = () => {
    if (!isClient) return [testimonials[0], testimonials[1], testimonials[2]]; // SSR fallback
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    let visibleCount = 3;
    if (isMobile) visibleCount = 1;
    if (isTablet) visibleCount = 2;

    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="w-full bg-[#f9fafb] py-16 md:py-24 overflow-hidden font-[family-name:var(--font-poppins-custom)]">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 2xl:px-24">
        <div className="text-center mb-12 md:mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[22px] md:text-[28px] font-semibold text-[#0f172a] mb-2 leading-[1.3]"
          >
            Success Stories
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-[48px] lg:text-[56px] font-bold text-[#0f172a] mb-6 tracking-[-0.02em] leading-[1.1]"
          >
            Hear what our <span className="text-blue-600">Alumni</span> say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm md:text-[15px] font-light text-gray-500 max-w-2xl mx-auto leading-[1.7]"
          >
            Join hundreds of professionals who accelerated their careers with our training programs
          </motion.p>
        </div>

        <div className="relative">
          <div className="flex justify-center gap-6 md:gap-8 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {getVisibleCards().map((testimonial, idx) => (
                <motion.div
                  key={`${testimonial.id}-${idx}`}
                  initial={{ opacity: 0, scale: 0.9, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-[20px] p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex-1 min-w-[300px] max-w-[420px] flex flex-col justify-between border border-gray-100"
                >
                  <div>
                    <Quote className="w-10 h-10 text-blue-500/20 mb-6" fill="currentColor" stroke="none" />
                    <p className="text-[#334155] text-sm md:text-[14px] leading-[1.8] font-light mb-8">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative bg-blue-50 border border-blue-100 flex items-center justify-center">
                      {testimonial.image ? (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="object-cover w-full h-full absolute inset-0" 
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }} 
                        />
                      ) : null}
                      <span className="text-blue-600 font-bold z-0">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0f172a] text-[15px] leading-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-[13px] text-blue-600 font-medium mt-0.5">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-4 bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
