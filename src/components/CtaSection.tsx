"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative w-full min-h-[500px] flex items-center overflow-hidden bg-[#0a0f1d]">
      {/* Background Mesh/Gradients to match the image's deep blue/purple glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-blue-900/40 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[80%] bg-indigo-900/30 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[60%] bg-blue-800/20 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 2xl:px-24 py-24 lg:py-32 flex flex-col items-center">
        <div className="max-w-5xl w-full flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-[48px] lg:text-[56px] font-[family-name:var(--font-poppins-custom)] font-bold text-white mb-6 tracking-[-0.02em] leading-[1.1]"
          >
            Build the products of tomorrow.<br />
            We'll find the talent.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-[18px] font-[family-name:var(--font-poppins-custom)] font-light leading-[1.6] max-w-2xl mb-12 mx-auto"
          >
            Ready to scale your engineering team? Join the modern tech companies who trust our specialized network to source top-tier developers.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              href="/contact"
              className="inline-flex bg-white text-[#0f172a] font-[family-name:var(--font-poppins-custom)] font-semibold p-2 items-center justify-center group hover:bg-gray-50 transition-colors shadow-xl shadow-black/20"
            >
              <span className="px-8 whitespace-nowrap text-[17px]">Get In Touch</span>
              <div className="w-12 h-12 bg-[#1e293b] text-white flex items-center justify-center rounded-[2px] group-hover:bg-[#0f172a] transition-colors">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
