"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { RoleDetails } from "@/data/what-we-do";
import { 
  FiCode, FiPenTool, FiShield, FiDatabase, FiCloud, 
  FiCpu, FiActivity, FiTrendingUp, FiUsers, FiSettings, 
  FiLayers, FiZap, FiStar, FiCheckCircle, FiAward, 
  FiTarget, FiCompass, FiBriefcase, FiGrid 
} from 'react-icons/fi';

export default function WhatWeDeliver({ role }: { role: RoleDetails }) {
  const usedIcons = new Set<string>();

  const getUniqueIcon = (title: string) => {
    const t = title.toLowerCase();
    const c = "w-5 h-5 text-blue-500 group-hover:text-white transition-colors";
    
    const fallbackPool = [FiZap, FiStar, FiCheckCircle, FiAward, FiTarget, FiCompass, FiBriefcase, FiGrid];

    const rules = [
      [['code', 'api', 'develop', 'script', 'stack'], FiCode, 'FiCode'],
      [['design', 'ui', 'ux', 'pixel', 'architect', 'prototype'], FiPenTool, 'FiPenTool'],
      [['secur', 'compliance', 'vulnerabil', 'access', 'patch'], FiShield, 'FiShield'],
      [['data', 'schema', 'storage', 'lake', 'warehouse'], FiDatabase, 'FiDatabase'],
      [['cloud', 'migrat', 'server', 'infrastruct', 'network', 'vpn', 'hardware'], FiCloud, 'FiCloud'],
      [['ai', 'ml', 'algorithm', 'system', 'machine', 'model', 'vision'], FiCpu, 'FiCpu'],
      [['test', 'qa', 'defect', 'bug', 'monitor', 'quality', 'assess', 'review', 'audit'], FiActivity, 'FiActivity'],
      [['analytic', 'report', 'dashboard', 'strategy', 'trend', 'perform', 'business'], FiTrendingUp, 'FiTrendingUp'],
      [['team', 'collaborat', 'support', 'user', 'agile', 'management', 'assistance'], FiUsers, 'FiUsers'],
      [['process', 'optimiz', 'setup', 'configur', 'maintain', 'automat'], FiSettings, 'FiSettings'],
      [['integrat', 'pipeline', 'framework', 'solution', 'deploy'], FiLayers, 'FiLayers']
    ];

    let SelectedIcon: any = null;
    let iconName = "";

    // 1. Keyword matching
    for (const [keywords, IconComponent, name] of rules) {
      if (!usedIcons.has(name as string) && (keywords as string[]).some(k => t.includes(k))) {
        SelectedIcon = IconComponent;
        iconName = name as string;
        break;
      }
    }

    // 2. High-quality fallback if no match or keyword already used
    if (!SelectedIcon) {
      for (const Fallback of fallbackPool) {
        if (!usedIcons.has(Fallback.name)) {
          SelectedIcon = Fallback;
          iconName = Fallback.name;
          break;
        }
      }
    }

    // 3. Absolute fallback
    if (!SelectedIcon) {
      SelectedIcon = FiZap;
      iconName = 'FiZap_fallback';
    }

    usedIcons.add(iconName);
    return <SelectedIcon className={c} />;
  };

  const deliverablesWithIcons = role.deliverables.map(d => ({
    ...d,
    icon: getUniqueIcon(d.title)
  }));

  return (
    <section className="w-full py-24 bg-white font-[family-name:var(--font-poppins-custom)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 md:mb-20 gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[48px] lg:text-[56px] font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] tracking-[-0.02em] leading-[1.1]"
          >
            What we <span className="font-normal italic text-blue-600">deliver</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-lg text-slate-500 text-[15px] leading-relaxed"
          >
            With the right tools, methodologies, and a <span className="text-blue-600 font-medium">human-centered approach</span>, you can build products your customers will love. Here's how we help.
          </motion.p>
        </div>

        {/* Grid Section - True Masonry Layout (Removes row gaps) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative pb-12">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6 md:gap-8 z-10">
            {deliverablesWithIcons.filter((_, i) => i % 3 === 0).map((service, index) => (
              <ServiceCard key={index} service={service} delay={index * 0.1} />
            ))}
          </div>

          {/* Column 2 - Staggered Down */}
          <div className="flex flex-col gap-6 md:gap-8 md:mt-16 z-10">
            {deliverablesWithIcons.filter((_, i) => i % 3 === 1).map((service, index) => (
              <ServiceCard key={index} service={service} delay={index * 0.1 + 0.2} />
            ))}
          </div>

          {/* Column 3 - Staggered Down Further */}
          <div className="flex flex-col gap-6 md:gap-8 md:mt-32 z-10">
            {deliverablesWithIcons.filter((_, i) => i % 3 === 2).map((service, index) => (
              <ServiceCard key={index} service={service} delay={index * 0.1 + 0.4} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }: { service: any, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-default h-[340px] flex flex-col"
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-[22px] font-bold text-[#0f172a] pr-4 leading-tight">{service.title}</h3>
        <div className="w-10 h-10 shrink-0 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 border border-blue-100/50">
          {service.icon}
        </div>
      </div>
      <p className="text-[14px] text-slate-500 leading-relaxed font-light">
        {service.description}
      </p>
    </motion.div>
  );
}
