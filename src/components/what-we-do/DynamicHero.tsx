"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RoleDetails } from "@/data/what-we-do";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

export default function DynamicHero({ role }: { role: RoleDetails }) {
    // Split the title so we can make the last word a lighter font weight, just like the screenshot
    const titleParts = role.title.split(' ');
    const lastWord = titleParts.length > 1 ? titleParts.pop() : '';
    const restOfTitle = titleParts.join(' ');

    return (
        <section className="relative w-full bg-[#161a1d] min-h-[calc(100vh-72px)] flex items-center overflow-hidden">
            {/* Background Image mapped to technology category */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src={role.heroImage}
                    alt={`${role.title} background`}
                    fill
                    priority
                    className="object-cover"
                />
                {/* Gradient Overlays for readability */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="hidden md:block absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10"></div>
            </div>

            {/* Content Container (Matching Home Page Padding & Structure but Centered) */}
            <div className="relative z-20 w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 2xl:px-24 flex flex-col justify-end md:justify-center items-center text-center h-full pt-32 sm:pt-36 md:pt-40 pb-32 sm:pb-40 lg:pb-16">
                <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] font-[family-name:var(--font-poppins-custom)] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6"
                    >
                        {restOfTitle} {titleParts.length > 1 && <br />}
                        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#99f2d1]">{lastWord}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-base sm:text-lg lg:text-[21px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-300 mb-10 max-w-5xl leading-[1.6]"
                    >
                        {role.fullDescription}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row mt-4"
                    >
                        {/* Advanced CSS Animated Button */}
                        <AnimatedButton />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
