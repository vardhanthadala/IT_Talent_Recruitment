"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import DynamicIcon from "@/components/DynamicIcon";

interface CardData {
  title: string;
  description: string;
  icon: string;
  image: string;
}

interface LandscapeData {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  cards: CardData[];
}

export default function TechLandscape({ data }: { data: LandscapeData }) {
  const customEase = [0.22, 1, 0.36, 1]; // Smooth, agency-level easing

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: customEase
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: customEase
      }
    }
  };

  return (
    <section className="w-full bg-[#f8f9fa] py-20 md:py-32">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 2xl:px-24">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase }}
            >
              <span className="text-[#0077b5] font-[family-name:var(--font-poppins-custom)] font-bold tracking-[0.2em] text-[13px] uppercase mb-4 block">
                {data.eyebrow}
              </span>
            </motion.div>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] tracking-tight leading-[1.1]">
              <AnimatedText text={data.titleLine1} as="span" delay={0.1} /> <br className="hidden md:block" />
              <AnimatedText text={data.titleLine2} as="span" className="italic font-normal text-[#0077b5]" delay={0.3} />
            </h2>
          </div>
          <AnimatedText
            text={data.description}
            as="p"
            delay={0.5}
            stagger={0.02}
            className="text-[16px] md:text-[18px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-500 max-w-lg leading-relaxed"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"
        >
          {data.cards.map((card, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image with Ken Burns */}
              <div className="absolute inset-0 w-full h-full">
                <Image 
                  src={card.image} 
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-90"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-auto transition-transform duration-700 ease-out group-hover:scale-90 group-hover:bg-blue-600">
                  <DynamicIcon name={card.icon} className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-[24px] font-[family-name:var(--font-poppins-custom)] font-semibold text-white mb-3 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-4">
                  {card.title}
                </h3>
                
                <div className="overflow-hidden">
                  <p className="text-[15px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-300 leading-[1.6] opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-y-0">
                    {card.description}
                  </p>
                </div>

                {/* Arrow Icon Indicator */}
                <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center opacity-0 translate-x-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-x-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
