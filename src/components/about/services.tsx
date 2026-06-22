"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
    {
        title: "IT & Technology",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Finance & Banking",
        image: "https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Healthcare & Life Sciences",
        image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Manufacturing & Logistics",
        image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Retail & E-commerce",
        image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Professional Services",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
];

export default function Services() {
    const [page, setPage] = useState(0);

    // Auto-play the carousel to swap between the first 3 and the last 3
    useEffect(() => {
        const timer = setInterval(() => {
            setPage((prev) => (prev === 0 ? 1 : 0));
        }, 5000); // Swaps every 5 seconds
        return () => clearInterval(timer);
    }, []);

    // Get the 3 industries for the current page
    const currentIndustries = industries.slice(page * 3, (page + 1) * 3);

    return (
        <section className="w-full pt-10 pb-24 lg:pt-16 lg:pb-32 bg-[#f9fafb]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16">
                    {/* Left: Heading */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <span className="text-[#0077b5] uppercase tracking-widest text-xs font-bold mb-4 block">
                            EXPLORED INDUSTRIES
                        </span>
                        <h2 className="text-3xl md:text-[40px] lg:text-[56px] font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] tracking-[-0.02em] leading-[1.1] whitespace-nowrap sm:whitespace-normal">
                            Industries we <span className="italic text-[#0077b5]">explore</span>
                        </h2>
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-md flex flex-col items-start lg:items-start gap-6"
                    >
                        <p className="text-sm md:text-[15px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-600 leading-[1.7]">
                            From finance to healthcare, we provide specialized IT talent tailored to the unique technological demands of your specific industry. Partner with us to scale your business with the right experts.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Section: Animated Cards Grid */}
                {/* Fixed height container to prevent layout shifts when animating */}
                <div className="relative w-full h-auto min-h-[400px] lg:min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={page}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.6, staggerChildren: 0.1 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full"
                        >
                            {currentIndustries.map((industry, index) => (
                                <motion.div
                                    key={industry.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="relative w-full aspect-[4/5] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
                                >
                                    <img
                                        src={industry.image}
                                        alt={industry.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-8 flex flex-col justify-end">
                                        <h3 className="text-white font-semibold text-2xl lg:text-3xl font-[family-name:var(--font-poppins-custom)] leading-tight group-hover:-translate-y-2 transition-transform duration-300 line-clamp-2">
                                            {industry.title}
                                        </h3>
                                    </div>

                                    {/* Hover Arrow */}
                                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ArrowUpRight className="text-white w-6 h-6" />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Pagination Dots */}
                    <div className="flex justify-center items-center gap-3 mt-10">
                        <button 
                            onClick={() => setPage(0)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${page === 0 ? "bg-[#0077b5] scale-125" : "bg-gray-300 hover:bg-gray-400"}`}
                            aria-label="View first 3 industries"
                        />
                        <button 
                            onClick={() => setPage(1)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${page === 1 ? "bg-[#0077b5] scale-125" : "bg-gray-300 hover:bg-gray-400"}`}
                            aria-label="View next 3 industries"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
