"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeatureGridSection() {
  return (
    <section className="w-full">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Block 1: Image (Top Left) - Left to Right Unwrap */}
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px]"
          >
            {/* Using a high-quality office/team image from Unsplash as placeholder */}
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Team collaborating"
              fill
              className="object-cover object-center"
            />
          </motion.div>

          {/* Block 2: Text (Top Right) */}
          <div className="flex items-center justify-center bg-[#f4f9ff] p-8 sm:p-12 lg:p-16 xl:p-24 h-auto lg:h-[600px]">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-md w-full"
            >
              <h2 className="text-3xl md:text-[48px] lg:text-[56px] font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-6 tracking-[-0.02em] leading-[1.1]">
                Join our team.
              </h2>
              <p className="text-sm md:text-[15px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-600 mb-10 leading-[1.7]">
                Put your talents to use and apply your skills alongside uniquely talented people in a digital environment.
              </p>
              <Link
                href="/career2"
                className="inline-block px-6 py-2.5 border border-[#0f172a] text-[#0f172a] text-[13px] font-[family-name:var(--font-poppins-custom)] font-medium hover:bg-[#0f172a] hover:text-white transition-all duration-300"
              >
                explore openings
              </Link>
            </motion.div>
          </div>

          {/* Block 3: Text (Bottom Left) */}
          <div className="flex items-center justify-center bg-[#f4f9ff] p-8 sm:p-12 lg:p-16 xl:p-24 h-auto lg:h-[600px] order-4 lg:order-3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-md w-full"
            >
              <h2 className="text-3xl md:text-[48px] lg:text-[56px] font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-6 tracking-[-0.02em] leading-[1.1]">
                Discover our <br />
                story.
              </h2>
              <p className="text-sm md:text-[15px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-600 mb-10 leading-[1.7]">
                We are a passionate team of tech recruiters dedicated to bridging the gap between world-class engineering talent and innovative companies. Learn more about our mission, values, and how we are transforming the hiring landscape.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 py-2.5 border border-[#0f172a] text-[#0f172a] text-[13px] font-[family-name:var(--font-poppins-custom)] font-medium hover:bg-[#0f172a] hover:text-white transition-all duration-300"
              >
                about us
              </Link>
            </motion.div>
          </div>

          {/* Block 4: Image (Bottom Right) - Right to Left Unwrap */}
          <motion.div
            initial={{ clipPath: "inset(0 0 0 100%)" }}
            whileInView={{ clipPath: "inset(0 0 0 0%)" }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px] order-3 lg:order-4"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Tech team collaborating"
              fill
              className="object-cover object-center"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
