"use client";

import {
  HardDrive, Cloud, Bot, Activity, Code2, BrainCircuit, ShieldCheck, BarChart3,
  Landmark, LineChart, Stethoscope, Microscope, HeartPulse, Factory,
  Truck, Box, Settings, ShoppingCart, Smartphone, Globe, CreditCard,
  Briefcase, Users, Scale, Target, ArrowUpRight, ArrowRight
} from "lucide-react";

// Alias ActivityHeart mapping to Activity to avoid import issues
const iconMap: Record<string, any> = {
  HardDrive, Cloud, Bot, Activity, Code2, BrainCircuit, ShieldCheck, BarChart3,
  Landmark, LineChart, Stethoscope, Microscope, HeartPulse, Factory,
  Truck, Box, Settings, ShoppingCart, Smartphone, Globe, CreditCard,
  Briefcase, Users, Scale, Target, ArrowUpRight, ArrowRight,
  ActivityHeart: Activity
};

export default function DynamicIcon({ name, className }: { name: string, className?: string }) {
  const IconComponent = iconMap[name] || Cloud; // Fallback to Cloud if not found

  return <IconComponent className={className} />;
}
