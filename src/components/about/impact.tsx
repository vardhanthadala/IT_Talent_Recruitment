"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// A simple counter component that animates from 0 to the target number
const AnimatedCounter = ({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (!inView) return;

        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            
            // Ease out quart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            
            setCount(Math.floor(easeProgress * (to - from) + from));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [inView, from, to, duration]);

    return <span ref={ref}>{count}</span>;
};

export default function Impact() {
    return (
        <section className="w-full pt-20 pb-10 lg:pt-32 lg:pb-16 bg-white relative overflow-hidden border-y border-gray-100">
            {/* Very subtle background pattern or shape */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-[#0077b5]/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-[#0077b5]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#0077b5] uppercase tracking-widest text-xs font-bold mb-4 block"
                    >
                        OUR IMPACT
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-poppins-custom)] font-bold text-gray-900 leading-[1.2] tracking-tight mb-6"
                    >
                        Transforming IT, <span className="text-[#0077b5] italic">Scaling Success</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        We deliver world-class IT staffing, executive recruitment, and end-to-end technology services. Empowering businesses to innovate and scale without limits.
                    </motion.p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:gap-0 lg:divide-x divide-gray-200">
                    
                    {/* Stat 1 */}
                    <div className="flex flex-col items-center text-center px-4">
                        <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-poppins-custom)]">
                            <AnimatedCounter to={100} />
                            <span className="text-[#0077b5] ml-1">+</span>
                        </div>
                        <p className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider">
                            Professionals Placed
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col items-center text-center px-4">
                        <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-poppins-custom)]">
                            <AnimatedCounter to={5} />
                            <span className="text-[#0077b5] ml-1">+</span>
                        </div>
                        <p className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider">
                            Industries
                        </p>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex flex-col items-center text-center px-4">
                        <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-poppins-custom)]">
                            <AnimatedCounter to={4} />
                            <span className="text-[#0077b5] ml-1">+</span>
                        </div>
                        <p className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider">
                            Countries Served
                        </p>
                    </div>

                    {/* Stat 4 */}
                    <div className="flex flex-col items-center text-center px-4">
                        <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-poppins-custom)]">
                            <AnimatedCounter to={2} />
                            <span className="text-[#0077b5] ml-1">+</span>
                        </div>
                        <p className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider">
                            Years Expertise
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
