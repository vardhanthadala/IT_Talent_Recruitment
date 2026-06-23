"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

interface HeroData {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  image: string;
}

export default function HeroIndustry({ data }: { data: HeroData }) {
  const customEase = [0.22, 1, 0.36, 1]; // Smooth, agency-level easing

  return (
    <section className="relative w-full bg-[#161a1d] min-h-[calc(100vh-72px)] flex items-center overflow-hidden">

      {/* Large Image replacing the nodes, matching the home page style */}
      <div className="absolute top-0 right-0 w-full md:w-[60%] h-[50vh] md:h-full z-0 overflow-hidden">
        {/* Unwarp Reveal Animation (Left to Right because it's on the right edge, so we can reveal it from left to right or just scale down an overlay) */}
        <motion.div 
          initial={{ x: "0%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, ease: customEase }}
          className="absolute inset-0 bg-[#161a1d] z-20 origin-right"
        />
        
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: customEase }}
          className="w-full h-full relative"
        >
          <Image
            src={data.image}
            alt={data.eyebrow}
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
        {/* Extra smooth gradient to blend the dark edge on desktop seamlessly */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#161a1d] via-[#161a1d]/90 to-transparent z-10"></div>

        {/* Extra smooth gradient to blend the top half on mobile seamlessly */}
        <div className="md:hidden absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#161a1d] via-[#161a1d]/90 to-transparent z-10"></div>
        <div className="md:hidden absolute inset-0 bg-black/40 z-0"></div>
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#161a1d]/20 z-0 mix-blend-multiply"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 2xl:px-24 flex flex-col justify-end md:justify-center h-full pt-32 sm:pt-36 md:pt-40 pb-32 sm:pb-40 lg:pb-16">
        <div className="w-full md:w-[55%] lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: customEase }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
              {data.eyebrow}
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-[family-name:var(--font-poppins-custom)] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6">
            <AnimatedText text={data.titleLine1} as="span" /> <br />
            <AnimatedText text={data.titleLine2} as="span" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#99f2d1]" delay={0.2} />
          </h1>
          
          <AnimatedText 
            text={data.description}
            as="p"
            delay={0.4}
            stagger={0.015}
            className="text-base sm:text-lg lg:text-[21px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-300 mb-10 max-w-2xl leading-[1.6]"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: customEase }}
            className="flex flex-col sm:flex-row mt-4"
          >
            <Link 
              href="/contact" 
              className="px-10 py-4 rounded-full bg-blue-600 text-white text-[15px] font-[family-name:var(--font-poppins-custom)] font-medium hover:bg-blue-500 transition-all duration-300 text-center shadow-[0_8px_20px_-6px_rgba(37,99,235,0.6)] hover:shadow-[0_12px_25px_-6px_rgba(37,99,235,0.8)] hover:-translate-y-1"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
