"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Clients() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 440 : scrollLeft + 440;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };
  const testimonials = [
    {
      name: "David Mitchell",
      title: "VP of Engineering at TechNova",
      text: "Dexze completely transformed our hiring process. Their team understood our highly specific technical requirements and provided us with top-tier engineers who hit the ground running. We couldn't be happier.",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Sarah Jenkins",
      title: "Director of Talent Acquisition at CloudScale",
      text: "Finding reliable IT talent in today's market is a huge challenge. Dexze's rigorous vetting process and deep industry network saved us countless hours and delivered exceptional candidates.",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Marcus Reynolds",
      title: "Chief Technology Officer at FinServe",
      text: "What sets Dexze apart is their commitment to understanding our culture. The developers they placed with us weren't just technically brilliant—they were the perfect cultural fit for our fast-paced startup.",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    {
      name: "Elena Rodriguez",
      title: "Head of Software Development at Innovate AI",
      text: "We needed to scale our backend team rapidly without compromising on quality. Dexze acted as a true partner, streamlining the entire recruitment cycle and consistently exceeding our expectations.",
      avatar: "https://i.pravatar.cc/150?img=9"
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#f4f4f4] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 mb-10 md:mb-16">
            {/* Left side: Heading */}
            <div className="w-full lg:w-5/12 flex flex-col justify-between">
              <div>
                <span className="text-[#0077b5] uppercase tracking-widest text-xs font-bold mb-4 md:mb-6 block">CLIENTS</span>
                <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-poppins-custom)] font-bold text-gray-900 leading-[1.2] md:leading-[1.1] tracking-tight mb-6 md:mb-8">
                  What people say<br className="hidden md:block" /> <span className="text-[#0077b5] italic">about us?</span>
                </h2>
              </div>
              
              {/* Desktop Arrows */}
              <div className="items-center gap-4 hidden lg:flex mt-12">
                <button onClick={() => scroll('left')} className="text-gray-500 hover:text-[#0077b5] transition-colors p-1 cursor-pointer">
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button onClick={() => scroll('right')} className="text-gray-500 hover:text-[#0077b5] transition-colors p-1 cursor-pointer">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Right side: Testimonial Cards */}
            <div 
              ref={scrollRef}
              className="w-full lg:w-7/12 flex gap-6 overflow-x-auto pb-4 snap-x scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
              
              {testimonials.map((t, i) => (
                <div 
                  key={i} 
                  className="w-full sm:w-[85%] md:w-[420px] bg-white rounded-[20px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] snap-center flex-shrink-0"
                >
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-200">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" unoptimized />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-[17px] tracking-tight">{t.name}</h4>
                      <p className="text-gray-500 text-[13px]">{t.title}</p>
                    </div>
                  </div>
                  <p className="text-[#111827] leading-[1.6] text-[15px] whitespace-normal">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Mobile Arrows */}
            <div className="flex items-center gap-4 lg:hidden mt-2">
              <button onClick={() => scroll('left')} className="text-gray-500 hover:text-[#0077b5] transition-colors p-1 cursor-pointer">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button onClick={() => scroll('right')} className="text-gray-500 hover:text-[#0077b5] transition-colors p-1 cursor-pointer">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Bottom Logos Marquee */}
          <div className="relative pt-6 mt-4 border-t border-gray-200/50 overflow-hidden w-full">
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes marqueeInfinite {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee-infinite {
                animation: marqueeInfinite 25s linear infinite;
                width: max-content;
              }
            `}} />
            
            {/* Gradient overlays to fade the edges */}
            <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-[#f4f4f4] to-transparent z-10"></div>
            <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-[#f4f4f4] to-transparent z-10"></div>
            
            <div className="flex animate-marquee-infinite transition-all duration-500">
              
              {/* Function to render one set of logos */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 md:gap-16 px-4 md:px-8">
                  <div className="flex items-center gap-1.5 md:gap-2 text-xl md:text-2xl font-bold tracking-tighter text-gray-400 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:text-black transition-all cursor-default">
                    <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24"><path d="M12 2L24 22H0L12 2z" fill="currentColor"/></svg> Vercel
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2 text-xl md:text-2xl font-bold tracking-tight text-gray-400 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:text-[#181717] transition-all cursor-default">
                    <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.7.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z"/></svg> GitHub
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2 text-xl md:text-2xl font-bold tracking-tighter text-gray-400 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:text-[#635BFF] transition-all cursor-default">
                    stripe
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2 text-xl md:text-2xl font-bold tracking-tight text-gray-400 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:text-[#5E6AD2] transition-all cursor-default">
                    <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.828-5.343l5.656-5.657a2 2 0 0 0-2.828-2.828l-4.243 4.243-1.414-1.414a2 2 0 1 0-2.828 2.828l2.828 2.828a2 2 0 0 0 2.829 0z" fill="currentColor"/></svg> Linear
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2 text-xl md:text-2xl font-bold text-gray-400 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:text-[#FC6D26] transition-all cursor-default">
                    <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12c0-5.523-4.477-10-10-10z"/></svg> GitLab
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2 text-xl md:text-2xl font-bold tracking-tighter text-gray-400 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:text-[#632CA6] transition-all cursor-default">
                    <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M21.583 5.405l-6.32 6.32c-.068-.415-.246-.807-.518-1.144-.452-.56-1.084-.913-1.782-1.002-.698-.088-1.402.106-1.985.545L4.417 3.565c-.538-.41-1.3-.314-1.724.218-.423.53-.33 1.294.208 1.704l6.562 6.562c-.068.415-.246.807-.518 1.144-.452.56-1.084.913-1.782 1.002-.698.088-1.402-.106-1.985-.545L2.417 18.595c-.538.41-.63 1.174-.208 1.704.424.53 1.186.628 1.724.218l6.32-6.32c.068.415.246.807.518 1.144.452.56 1.084.913 1.782 1.002.698.088 1.402-.106 1.985-.545l6.561 6.56c.538.41 1.3.314 1.724-.218.423-.53.33-1.294-.208-1.704l-6.562-6.562c.068-.415.246-.807.518-1.144.452-.56 1.084-.913 1.782-1.002.698-.088 1.402.106 1.985-.545l2.761-3.95c.538-.41.63-1.174.208-1.704-.424-.53-1.186-.628-1.724-.218z"/></svg> DataDog
                  </div>
                </div>
              ))}
            </div>
          </div>

      </div>
    </section>
  );
}
