"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, ShieldCheck, Settings, Code } from "lucide-react";

const SERVICES = [
  {
    id: "01",
    title: "Software Development",
    description: "From cutting-edge frontend interfaces to scalable backend systems, we deliver full-stack solutions tailored to your business needs, including intuitive mobile apps and user-centric UI/UX design.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1200&auto=format&fit=crop",
    color: "bg-[#0f172a]",
    textColor: "text-white",
  },
  {
    id: "02",
    title: "Testing & Quality Assurance",
    description: "Ensure flawless performance and security with our comprehensive testing services. We offer automated, manual, performance, and security testing through expert QA analysts and SDET professionals.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    color: "bg-blue-600",
    textColor: "text-white",
  },
  {
    id: "03",
    title: "IT Operations & Cloud",
    description: "Streamline your IT infrastructure with robust DevOps practices, scalable cloud architectures, and reliable system administration. Our network engineers keep your business running smoothly 24/7.",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
    color: "bg-white",
    textColor: "text-[#0f172a]",
  },
  {
    id: "04",
    title: "AI & Data Science",
    description: "Unlock the power of your data with advanced machine learning, predictive analytics, and business intelligence. Our data engineers and scientists build the pipelines that drive strategic decision-making.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    color: "bg-blue-50",
    textColor: "text-[#0f172a]",
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
              Expertise that drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 italic">results.</span>
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
