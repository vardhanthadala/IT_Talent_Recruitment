"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#161a1d] min-h-[calc(100vh-72px)] flex items-center overflow-hidden">

      <div className="absolute top-0 right-0 w-full md:w-[60%] h-[50vh] md:h-full">
        <Image
          src="/images/hero_professional_woman_v2.png"
          alt="Professional woman holding a phone"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Extra smooth gradient to blend the dark edge on desktop seamlessly */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#161a1d] via-[#161a1d]/90 to-transparent z-10"></div>

        {/* Extra smooth gradient to blend the top half on mobile seamlessly */}
        <div className="md:hidden absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#161a1d] via-[#161a1d]/90 to-transparent z-10"></div>
        <div className="md:hidden absolute inset-0 bg-black/20 z-0"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 2xl:px-24 flex flex-col justify-end md:justify-center h-full pt-32 sm:pt-36 md:pt-40 pb-32 sm:pb-40 lg:pb-16">
        <div className="w-full md:w-[55%] lg:w-1/2">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] font-[family-name:var(--font-poppins-custom)] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6"
          >
            Anything's possible <br />
            when you have the <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#99f2d1]">talent.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg lg:text-[21px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-300 mb-10 max-w-2xl leading-[1.6]"
          >
            Find skilled candidates, in-demand jobs and the solutions you need to help you do your best work yet.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row mt-4"
          >
            <Link 
              href="/contact" 
              className="px-10 py-4 rounded-full bg-blue-600 text-white text-[15px] font-[family-name:var(--font-poppins-custom)] font-medium hover:bg-blue-500 transition-all duration-300 text-center shadow-[0_8px_20px_-6px_rgba(37,99,235,0.6)] hover:shadow-[0_12px_25px_-6px_rgba(37,99,235,0.8)] hover:-translate-y-1"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
