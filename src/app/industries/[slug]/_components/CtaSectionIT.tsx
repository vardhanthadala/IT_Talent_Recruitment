"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

interface CtaData {
  titleLine1: string;
  titleLine2: string;
  description: string;
}

export default function CtaSection({ data }: { data: CtaData }) {
  const customEase = [0.22, 1, 0.36, 1] as const; // Smooth, agency-level easing

  return (
    <section className="relative w-full bg-[#161a1d] py-24 overflow-hidden border-t border-white/10">
      
      {/* Expanding Network Visual Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[800px] h-[800px] border border-blue-500/20 rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 2, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[600px] h-[600px] border border-[#99f2d1]/20 rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute w-[400px] h-[400px] border border-blue-400/30 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: customEase }}
          >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-poppins-custom)] font-bold text-white mb-6 tracking-tight flex flex-col md:block items-center">
            <AnimatedText text={data.titleLine1} as="span" /> <br className="md:hidden" /> <AnimatedText text={data.titleLine2} as="span" delay={0.2} />
          </h2>
          
          <AnimatedText 
            text={data.description}
            as="p"
            delay={0.4}
            stagger={0.02}
            className="text-lg md:text-xl font-[family-name:var(--font-poppins-custom)] font-light text-gray-300 mb-10 max-w-2xl mx-auto"
          />

          <Link 
            href="/contact" 
            className="inline-flex items-center px-10 py-4 rounded-full bg-blue-600 text-white text-[16px] font-[family-name:var(--font-poppins-custom)] font-medium hover:bg-blue-500 transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(37,99,235,0.6)] hover:shadow-[0_12px_25px_-6px_rgba(37,99,235,0.8)] hover:-translate-y-1 group"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
