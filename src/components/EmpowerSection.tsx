"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Globe, GraduationCap, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const rotatingPhrases = [
  "Driving organizational growth.",
  "Building high-performing teams.",
  "Unlocking human potential.",
  "Shaping the future of work."
];

const rotatingSubPhrases = [
  "We are your dedicated tech talent partners",
  "We are your specialized engineering recruiters",
  "We are your agile workforce experts",
  "We are your scaling growth engine"
];

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration, hasAnimated]);

  return { count, ref };
}

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const { count, ref } = useCountUp(value, 2000);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function EmpowerSection() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // trigger fade out
      setTimeout(() => {
        setIndex((current) => (current + 1) % rotatingPhrases.length);
        setFade(true); // trigger fade in
      }, 500); // change text halfway through transition
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 2xl:px-24">

        {/* Top Header & Intro */}
        <div className="mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-[48px] lg:text-[56px] font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-6 tracking-[-0.02em] leading-[1.1]"
          >
            Empowering careers.{" "}
            <span
              className={`font-normal italic text-blue-600 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
                }`}
            >
              {rotatingPhrases[index]}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-[20px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-600 max-w-4xl leading-[1.6]"
          >
            Connecting ambitious IT professionals with forward-thinking tech companies. We deliver specialized tech recruitment, deep technical insights, and agile workforce solutions designed for the modern digital landscape.
          </motion.p>
        </div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:mb-32">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group border border-gray-100 p-8 md:p-12 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 bg-white flex flex-col rounded-xl"
          >
            <h3 className="text-[24px] font-[family-name:var(--font-poppins-custom)] font-semibold text-[#0f172a] mb-4 group-hover:text-blue-600 transition-colors duration-300">Accelerate your tech career</h3>
            <p className="text-[16px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-600 mb-8 leading-[1.6] flex-grow">
              Join our exclusive network of elite developers. We connect you directly with fast-growing tech startups and innovative companies for roles that perfectly match your stack and ambitions.
            </p>
            <div>
              <Link href="/jobs" className="inline-block bg-blue-600 text-white text-[15px] font-[family-name:var(--font-poppins-custom)] font-medium px-8 py-3.5 rounded-sm hover:bg-blue-700 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                Find your next job now
              </Link>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="group border border-gray-100 p-8 md:p-12 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 bg-white flex flex-col rounded-xl"
          >
            <h3 className="text-[24px] font-[family-name:var(--font-poppins-custom)] font-semibold text-[#0f172a] mb-4 group-hover:text-blue-600 transition-colors duration-300">Scale your engineering team</h3>
            <p className="text-[16px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-600 mb-8 leading-[1.6] flex-grow">
              Don't let talent shortages slow your product roadmap. We provide scaling startups with highly-vetted technical talent, ready to ship code and make an immediate impact from day one.
            </p>
            <div>
              <Link href="/talent" className="inline-block bg-blue-600 text-white text-[15px] font-[family-name:var(--font-poppins-custom)] font-medium px-8 py-3.5 rounded-sm hover:bg-blue-700 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                Hire top talent today
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Second Header & Intro */}
        <div className="mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-[48px] lg:text-[56px] font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-6 tracking-[-0.02em] leading-[1.1]"
          >
            We help you build the products of tomorrow
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-3xl md:text-[48px] lg:text-[56px] font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-6 tracking-[-0.02em] leading-[1.1]"
          >
            <span
              className={`font-normal italic text-blue-600 transition-opacity duration-500 inline-block ${fade ? "opacity-100" : "opacity-0"
                }`}
            >
              {rotatingSubPhrases[index]}
            </span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-[18px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-600 max-w-[900px] leading-[1.6]"
          >
            We believe the right developer can completely transform a product — and the right tech team can disrupt an industry. As a specialized, agile recruitment startup, we deliver hyper-focused talent sourcing that modern tech companies trust. Backed by deep technical knowledge and a fast-moving network, we help you find the exact engineers you need to ship faster and scale smarter.
          </motion.p>
        </div>

        {/* 4 Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="mb-6 h-24 w-24 flex items-center justify-center">
              <img src="/images/insights/image_1.webp" alt="Insight 1" className="w-full h-full object-contain" />
            </div>
            <h4 className="text-[44px] font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-1 leading-none"><AnimatedNumber value={10} suffix="+" /></h4>
            <p className="text-blue-600 font-[family-name:var(--font-poppins-custom)] font-medium mb-3 text-[16px]">tech stacks</p>
            <p className="text-[14px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-600 leading-[1.5] max-w-[200px]">Expert coverage across modern frontend, backend, and cloud architectures.</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-6 h-24 w-24 flex items-center justify-center">
              <img src="/images/insights/image_2.webp" alt="Insight 2" className="w-full h-full object-contain" />
            </div>
            <h4 className="text-[44px] font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-1 leading-none"><AnimatedNumber value={100} suffix="%" /></h4>
            <p className="text-blue-600 font-[family-name:var(--font-poppins-custom)] font-medium mb-3 text-[16px]">remote-ready</p>
            <p className="text-[14px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-600 leading-[1.5] max-w-[200px]">A borderless network providing rapid, distributed talent matching.</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-6 h-24 w-24 flex items-center justify-center">
              <img src="/images/insights/image_3.webp" alt="Insight 3" className="w-full h-full object-contain" />
            </div>
            <h4 className="text-[44px] font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-1 leading-none"><AnimatedNumber value={98} suffix="%" /></h4>
            <p className="text-blue-600 font-[family-name:var(--font-poppins-custom)] font-medium mb-3 text-[16px]">match rate</p>
            <p className="text-[14px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-600 leading-[1.5] max-w-[200px]">Rigorous technical vetting ensuring successful long-term engineering fits.</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-6 h-24 w-24 flex items-center justify-center">
              <img src="/images/insights/image_4.webp" alt="Insight 4" className="w-full h-full object-contain" />
            </div>
            <h4 className="text-[44px] font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-1 leading-none"><AnimatedNumber value={100} suffix="+" /></h4>
            <p className="text-blue-600 font-[family-name:var(--font-poppins-custom)] font-medium mb-3 text-[16px]">engineers placed</p>
            <p className="text-[14px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-600 leading-[1.5] max-w-[200px]">A growing community of elite developers ready to build your next idea.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
