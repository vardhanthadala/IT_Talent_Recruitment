"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SharedCTA({ roleTitle }: { roleTitle: string }) {
    return (
        <section className="relative w-full py-12 md:py-16 bg-[#005c8a] overflow-hidden flex items-center justify-center font-[family-name:var(--font-poppins-custom)] group">
            
            {/* Animated Shine Effect */}
            <motion.div
                className="absolute -inset-[100%] z-0 pointer-events-none bg-gradient-to-br from-transparent via-white/10 to-transparent"
                animate={{ x: ['-100%', '100%'], y: ['-100%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            />

            {/* Mesh Gradient Background Blobs */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[120%] bg-[#0077b5] rounded-[100%] opacity-90 blur-[120px] transform rotate-12 mix-blend-screen" />
                <div className="absolute top-[10%] -right-[10%] w-[50%] h-[120%] bg-[#00a0dc] rounded-[100%] opacity-60 blur-[140px] transform -rotate-12 mix-blend-screen" />
                <div className="absolute -bottom-[30%] left-[20%] w-[70%] h-[80%] bg-[#38bdf8] rounded-[100%] opacity-40 blur-[100px] mix-blend-screen" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center flex flex-col items-center">
                {/* Accent Dash & Dot */}
                <div className="mb-6 relative w-12 h-10">
                    <div className="absolute top-1 right-2 w-[5px] h-[5px] rounded-full bg-white" />
                    <div className="absolute bottom-3 left-1 w-8 h-[3px] bg-white rounded-full transform -rotate-12" />
                </div>

                <h2 className="text-3xl md:text-[48px] lg:text-[56px] font-[family-name:var(--font-poppins-custom)] font-bold text-white mb-6 tracking-[-0.02em] leading-[1.1]">
                    Need expert {roleTitle}?
                </h2>
                
                <p className="text-sm md:text-[15px] font-[family-name:var(--font-poppins-custom)] font-light text-white/95 mb-10 leading-[1.7] max-w-2xl mx-auto">
                    Let's arrange an initial consultation to identify your greatest needs and <br className="hidden md:block"/> explore potential areas for optimization.
                </p>

                <Link
                    href="/contact"
                    className="inline-block px-8 py-3 bg-white text-[#0f172a] text-[13px] font-[family-name:var(--font-poppins-custom)] font-medium hover:bg-gray-100 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.15)] transform hover:-translate-y-0.5 rounded-sm"
                >
                    Hire top talent
                </Link>
            </div>
        </section>
    );
}
