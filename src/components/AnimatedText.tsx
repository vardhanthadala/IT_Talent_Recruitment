"use client";

import { motion } from "framer-motion";
import { ElementType } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export default function AnimatedText({
  text,
  className = "",
  as: Tag = "div",
  delay = 0,
  stagger = 0.04,
  once = true,
}: AnimatedTextProps) {
  // Split text into words, keeping spaces
  const words = text.split(" ");
  const customEase = [0.22, 1, 0.36, 1];

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay * i, ease: customEase },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: customEase,
      },
    },
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: -40,
    },
  };

  // Using a custom motion component based on the 'as' prop
  const MotionTag = motion(Tag as any);

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
    >
      {words.map((word, index) => (
        <span className="inline-block overflow-hidden" key={index} style={{ paddingBottom: '0.1em', marginBottom: '-0.1em', paddingRight: '0.25em' }}>
          <motion.span variants={child} className="inline-block origin-bottom">
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
