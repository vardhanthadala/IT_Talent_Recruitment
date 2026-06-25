"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import DynamicIcon from "@/components/DynamicIcon";
import { useRef } from "react";

interface SolutionItem {
  id: string;
  title: string;
  description: string;
  visualFirst: boolean;
  icon: string;
  image: string;
  features?: string[];
}

interface SolutionsData {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  items: SolutionItem[];
}

// Reusable Image Block Component with Parallax and Unwrap Animation
function ParallaxImage({ imageSrc, alt, unwrapDirection }: { imageSrc: string, alt: string, unwrapDirection: 'left-to-right' | 'right-to-left' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const customEase = [0.22, 1, 0.36, 1] as const;

  return (
    <div ref={ref} className="w-full h-[300px] md:h-[400px] rounded-[24px] overflow-hidden relative">
      {/* Unwrap Mask Animation - perfectly matches the white section background */}
      <motion.div 
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: customEase }}
        className={`absolute inset-0 bg-white z-20 ${unwrapDirection === 'left-to-right' ? 'origin-right' : 'origin-left'}`}
      />
      
      <motion.div 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: customEase }}
        style={{ y }} 
        className="absolute inset-[-10%] w-[120%] h-[120%] z-10"
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
      </motion.div>
    </div>
  );
}

export default function SolutionsShowcase({ data }: { data: SolutionsData }) {
  const customEase = [0.22, 1, 0.36, 1] as const; // Smooth, agency-level easing

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 2xl:px-24">

        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <span className="text-blue-600 font-[family-name:var(--font-poppins-custom)] font-bold tracking-[0.2em] text-[13px] uppercase mb-4 block">
              {data.eyebrow}
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-[48px] lg:text-[56px] font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-6 tracking-[-0.02em] leading-[1.1]">
            <AnimatedText text={data.titleLine1} as="span" delay={0.1} /> <AnimatedText text={data.titleLine2} as="span" className="italic font-normal text-blue-600" delay={0.3} />
          </h2>

          <AnimatedText
            text={data.description}
            as="p"
            delay={0.5}
            stagger={0.02}
            className="text-lg md:text-[20px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-600 max-w-3xl leading-[1.6]"
          />
        </div>

        <div className="space-y-24 md:space-y-40">
          {data.items.map((solution) => (
            <div key={solution.id} className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

              {/* If visualFirst is true on desktop, Visual is left. On mobile, Visual is always top. */}
              {solution.visualFirst && (
                <div className="w-full md:w-[45%] lg:w-[40%] order-1 md:order-1">
                  <ParallaxImage
                    imageSrc={solution.image}
                    alt={solution.title}
                    unwrapDirection="left-to-right"
                  />
                </div>
              )}

              <motion.div
                initial={{ opacity: 0, x: solution.visualFirst ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: customEase }}
                className={`w-full md:w-[55%] lg:w-[60%] order-2 ${solution.visualFirst ? 'md:order-2' : 'md:order-1'}`}
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-8">
                  <DynamicIcon name={solution.icon} className="w-6 h-6" />
                </div>
                <AnimatedText
                  text={solution.title}
                  as="h3"
                  className="text-[32px] lg:text-[40px] font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-6 leading-[1.15] tracking-tight"
                />
                <AnimatedText
                  text={solution.description}
                  as="p"
                  stagger={0.015}
                  delay={0.2}
                  className="text-[16px] lg:text-[18px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-600 mb-8 leading-[1.7]"
                />
                
                {solution.features && solution.features.length > 0 && (
                  <motion.ul 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="space-y-4 mb-8"
                  >
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-[15px] font-[family-name:var(--font-poppins-custom)] text-gray-700 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-4 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </motion.div>

              {!solution.visualFirst && (
                <div className="w-full md:w-[45%] lg:w-[40%] order-1 md:order-2">
                  <ParallaxImage
                    imageSrc={solution.image}
                    alt={solution.title}
                    unwrapDirection="right-to-left"
                  />
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
