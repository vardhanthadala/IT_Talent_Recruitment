"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const leaders = [
  {
    name: "Sarah Mitchell",
    title: "Vice President, Talent Strategy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "David Reynolds",
    title: "Chief Delivery Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
  }
];

export default function Leaders() {
  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="relative mt-0 lg:mt-20">
          {/* Light background box */}
          <div className="absolute inset-0 bg-[#f0f4f8] rounded-bl-[40px] rounded-br-[40px] sm:rounded-[40px] top-0 lg:top-24 bottom-0 z-0"></div>

          <div className="relative z-10 flex flex-col-reverse lg:flex-row items-start gap-12 lg:gap-16 px-6 sm:px-12 pt-8 lg:pt-24 pb-12 lg:pb-20">
            
            {/* Left side: Leader Cards */}
            <div className="w-full lg:w-7/12 flex flex-col sm:flex-row gap-8">
              {leaders.map((leader, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="w-full sm:w-1/2 flex flex-col group"
                >
                  {/* Image container */}
                  <div className="mt-0 lg:-mt-32 mb-6 relative w-full aspect-[4/5] rounded-tl-2xl rounded-tr-[80px] rounded-bl-2xl rounded-br-2xl overflow-hidden shadow-xl">
                    <Image 
                      src={leader.image}
                      alt={leader.name}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Text content */}
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-sm text-gray-600 mb-6 min-h-[40px]">{leader.title}</p>
                    
                    <div className="flex items-center gap-3">
                      <button type="button" className="p-2 rounded-full bg-[#f0f4f8] text-gray-400 hover:bg-[#0077b5] hover:text-white transition-colors cursor-pointer group/icon" aria-label="LinkedIn Profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </button>
                      <button type="button" className="p-2 rounded-full bg-[#f0f4f8] text-gray-400 hover:bg-black hover:text-white transition-colors cursor-pointer group/icon" aria-label="X (formerly Twitter) Profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right side: Text Content */}
            <div className="w-full lg:w-5/12 pb-8 lg:pb-0 pt-8 lg:pt-8 xl:pt-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[48px] font-[family-name:var(--font-poppins-custom)] font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
                  Our <span className="text-[#0077b5] italic">Leaders</span>
                </h2>
                <p className="text-base sm:text-lg font-[family-name:var(--font-poppins-custom)] font-light text-gray-700 leading-[1.7] mb-6">
                  At Dexze, we believe maximizing a company's investment in technology requires empowering a company's most valuable asset — their people. Our Leadership team embodies this focus through the empowerment of our own people. 
                </p>
                <p className="text-base sm:text-lg font-[family-name:var(--font-poppins-custom)] font-light text-gray-700 leading-[1.7]">
                  Many of our Leaders began as individual contributors and rose through the ranks to shepherd others, own process, and deliver excellence in IT Staffing and Services.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
