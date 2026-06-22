"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, LineChart, Globe, ShieldCheck, Smartphone, Settings } from "lucide-react";

const SERVICES = [
  {
    id: "01",
    title: "Digital Transformation",
    description: "Accelerate your business with comprehensive digital strategies tailored for modern enterprises. We help you navigate the digital landscape to improve efficiency, agility, and customer experience.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    color: "bg-[#0f172a]",
    textColor: "text-white",
  },
  {
    id: "02",
    title: "Artificial Intelligence",
    description: "Leverage cutting-edge AI and machine learning algorithms to unlock new opportunities, automate complex workflows, and gain predictive insights from your data.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    color: "bg-blue-600",
    textColor: "text-white",
  },
  {
    id: "03",
    title: "Data & BI",
    description: "Transform raw, unstructured data into actionable, strategic insights with robust data pipelines, intuitive dashboards, and enterprise-grade business intelligence tools.",
    icon: LineChart,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
    color: "bg-white",
    textColor: "text-[#0f172a]",
  },
  {
    id: "04",
    title: "Application Services",
    description: "Deliver powerful, scalable corporate and consumer applications. From complex enterprise software to sleek mobile apps, we engineer solutions that perform.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1200&auto=format&fit=crop",
    color: "bg-blue-50",
    textColor: "text-[#0f172a]",
  },
  {
    id: "05",
    title: "Technology Advisory",
    description: "Navigate complex technology landscapes with expert guidance. We help you choose the right tech stack, architectural patterns, and scalability strategies.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    color: "bg-[#0f172a]",
    textColor: "text-white",
  },
  {
    id: "06",
    title: "Managed IT Services",
    description: "Reliable, scalable, and secure operations backed by strict SLAs. Focus on your core business while we handle your infrastructure and system reliability.",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
    color: "bg-blue-600",
    textColor: "text-white",
  }
];

export default function ExpertiseSection2() {
  return (
    <section className="w-full bg-white py-24 lg:py-40 relative">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 2xl:px-24">
        
        {/* Sticky Header / Description */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
          
          <div className="w-full lg:w-[40%] lg:sticky lg:top-40 z-10 pb-10 lg:pb-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-[48px] lg:text-[56px] font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-6 tracking-[-0.02em] leading-[1.1]"
            >
              Expertise that drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">results.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-[18px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-600 leading-[1.6] max-w-lg mb-8"
            >
              We don't just build software. We engineer comprehensive digital ecosystems designed to scale your operations, empower your teams, and completely outpace the competition.
            </motion.p>
          </div>

          {/* Scrolling Stacking Cards */}
          <div className="w-full lg:w-[60%] flex flex-col gap-6 lg:gap-12 pb-32">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              const isDark = service.color === "bg-[#0f172a]" || service.color === "bg-blue-600";

              return (
                <div
                  key={service.id}
                  className={`sticky top-32 rounded-[2rem] overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-black/[0.05] flex flex-col sm:flex-row min-h-[400px] ${service.color}`}
                >
                  {/* Card Content */}
                  <div className="w-full sm:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <span className={`text-4xl font-bold font-[family-name:var(--font-poppins-custom)] opacity-30 ${isDark ? 'text-white' : 'text-blue-600'}`}>
                          {service.id}
                        </span>
                        <div className={`p-4 rounded-2xl ${isDark ? 'bg-white/10 text-white' : 'bg-blue-600 text-white'} backdrop-blur-md`}>
                          <Icon className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className={`text-[26px] lg:text-[32px] font-[family-name:var(--font-poppins-custom)] font-bold mb-4 tracking-[-0.02em] leading-[1.2] ${service.textColor}`}>
                        {service.title}
                      </h3>
                      <p className={`${isDark ? 'text-white/80' : 'text-gray-600'} text-[15px] lg:text-[16px] font-[family-name:var(--font-poppins-custom)] font-light leading-[1.6]`}>
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Image */}
                  <div className="w-full sm:w-1/2 relative h-[300px] sm:h-auto">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 ${isDark ? 'bg-black/20' : 'bg-transparent'}`} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
