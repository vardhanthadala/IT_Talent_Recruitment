"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  const width = useTransform(scrollYProgress, [0, 1], ["85%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "0px"]);

  return (
    <>
      <section className="relative w-full bg-white pt-16 pb-12 md:pb-16" id="intro_text_block">
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 2xl:px-24">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] leading-[1.08] tracking-[-0.03em]"
            >
              About <span className="text-blue-600 italic">Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-base sm:text-lg lg:text-[21px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-500 leading-[1.6] max-w-2xl mx-auto"
            >
              We specialize in IT staffing, recruitment, and technology services — connecting top-tier professionals with forward-thinking companies to build high-performing teams.
            </motion.p>
          </div>
        </div>
      </section>

      <section ref={containerRef} className="w-full relative overflow-hidden flex justify-center" id="about_video_wrapper">
        <motion.div
          style={{ width, borderRadius }}
          className="h-[50vh] md:h-[70vh] lg:h-[85vh] relative flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full">
            <video
              className="w-full h-full object-cover"
              loop
              muted
              autoPlay
              playsInline
              poster="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1920&auto=format&fit=crop"
            >
              <source src="/videos/aboutus_hero2.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </section>
    </>
  );
}
