"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Layout, Server, Cloud, ShieldCheck, BrainCircuit } from "lucide-react";

export default function TechEcosystem() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    { id: "ai", label: "AI & ML", icon: BrainCircuit, x: 50, y: 15, color: "text-purple-600", bg: "bg-purple-100", details: "Neural Networks & Predictive Models" },
    { id: "cloud", label: "Cloud", icon: Cloud, x: 80, y: 40, color: "text-blue-600", bg: "bg-blue-100", details: "AWS, Azure, GCP Infrastructure" },
    { id: "security", label: "Security", icon: ShieldCheck, x: 20, y: 40, color: "text-emerald-600", bg: "bg-emerald-100", details: "Zero-Trust & Data Encryption" },
    { id: "backend", label: "Backend", icon: Server, x: 50, y: 65, color: "text-amber-600", bg: "bg-amber-100", details: "Microservices & APIs" },
    { id: "frontend", label: "Frontend", icon: Layout, x: 50, y: 90, color: "text-rose-600", bg: "bg-rose-100", details: "React, Vue, & Native Apps" }
  ];

  // Map connections: from node ID to array of connected node IDs
  const connections = [
    { from: "ai", to: "cloud" },
    { from: "ai", to: "security" },
    { from: "ai", to: "backend" },
    { from: "cloud", to: "backend" },
    { from: "security", to: "backend" },
    { from: "backend", to: "frontend" }
  ];

  const floatingAnimation = (delay: number) => ({
    y: ["-5px", "5px"],
    transition: {
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
      delay
    }
  });

  return (
    <section className="w-full bg-[#0f172a] py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-[40px] font-[family-name:var(--font-poppins-custom)] font-bold text-white mb-4 tracking-tight"
          >
            Technology Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-[family-name:var(--font-poppins-custom)] font-light text-slate-400 max-w-2xl mx-auto"
          >
            A fully connected, robust architecture designed for scale.
          </motion.p>
        </div>

        <div className="relative w-full max-w-3xl mx-auto h-[600px] bg-slate-900/50 border border-white/10 rounded-[40px] shadow-2xl backdrop-blur-sm p-4">
          
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {connections.map((conn, idx) => {
              const nodeFrom = nodes.find(n => n.id === conn.from);
              const nodeTo = nodes.find(n => n.id === conn.to);
              
              const isHighlighted = activeNode === conn.from || activeNode === conn.to;
              const isDimmed = activeNode !== null && !isHighlighted;

              return (
                <motion.line
                  key={idx}
                  x1={`${nodeFrom?.x}%`}
                  y1={`${nodeFrom?.y}%`}
                  x2={`${nodeTo?.x}%`}
                  y2={`${nodeTo?.y}%`}
                  stroke={isHighlighted ? "#60a5fa" : "#334155"}
                  strokeWidth={isHighlighted ? 3 : 2}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: idx * 0.2 }}
                  className={`transition-all duration-300 ${isDimmed ? "opacity-20" : "opacity-80"} ${isHighlighted ? "filter drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" : ""}`}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node, idx) => {
            const isHovered = activeNode === node.id;
            const isDimmed = activeNode !== null && activeNode !== node.id;

            return (
              <motion.div
                key={node.id}
                animate={floatingAnimation(idx * 0.5)}
                className={`absolute z-10 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isDimmed ? "opacity-30 scale-90" : "opacity-100 scale-100"}`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className="relative group cursor-pointer flex flex-col items-center">
                  
                  {/* Node Circle */}
                  <div className={`w-20 h-20 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md transition-all duration-300 ${isHovered ? 'bg-white shadow-[0_0_30px_rgba(255,255,255,0.4)] scale-110' : 'bg-slate-800/80 hover:bg-slate-700/80'}`}>
                    <node.icon className={`w-8 h-8 transition-colors duration-300 ${isHovered ? node.color : 'text-slate-300'}`} />
                  </div>

                  {/* Label */}
                  <div className={`mt-3 text-center transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-70'}`}>
                    <h4 className="text-white font-[family-name:var(--font-poppins-custom)] font-semibold text-sm tracking-wide">
                      {node.label}
                    </h4>
                  </div>

                  {/* Details Card (Reveals on Hover) */}
                  <div className={`absolute top-full mt-8 w-48 p-3 rounded-xl bg-white shadow-xl transition-all duration-300 pointer-events-none transform ${isHovered ? 'opacity-100 translate-y-0 scale-100 z-50' : 'opacity-0 -translate-y-4 scale-95 -z-10'}`}>
                    <p className="text-xs text-slate-600 font-medium text-center">
                      {node.details}
                    </p>
                  </div>

                  {/* Pulsing rings on hover */}
                  {isHovered && (
                    <div className="absolute top-[10px] w-[60px] h-[60px] rounded-full border border-white/50 animate-ping" style={{ animationDuration: '2s' }}></div>
                  )}
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
