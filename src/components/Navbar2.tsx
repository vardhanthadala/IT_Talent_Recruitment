"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Smartphone, Globe, BarChart, ChevronDown, Cpu, Lightbulb, Settings, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const servicesMenu = [
    { name: "Digital Transformation", icon: Globe, href: "/services/digital-transformation" },
    { name: "Artificial Intelligence", icon: Cpu, href: "/services/artificial-intelligence" },
    { name: "Data & BI", icon: BarChart, href: "/services/data-bi" },
    { name: "Application Services", icon: Smartphone, href: "/services/application-services" },
    { name: "Technology Advisory", icon: Lightbulb, href: "/services/technology-advisory" },
    { name: "Managed IT Services", icon: Settings, href: "/services/managed-it-services" }
];

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "What We Do", href: "#", hasDropdown: true },
    { name: "Industries", href: "/industries" },
    { name: "Careers", href: "/careers" },
];

export default function Navbar2() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 pt-4 px-4 sm:px-6 lg:px-8">
            {/* Solid Floating Pill Container */}
            <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] flex items-center justify-between px-6 py-3.5 rounded-[32px] bg-[#0f172a] shadow-xl shadow-black/10">

                {/* Logo */}
                <div className="flex-shrink-0 w-48">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-[family-name:var(--font-poppins-custom)] font-bold text-white tracking-wide">
                        </span>
                    </Link>
                </div>

                {/* Centered Desktop Links */}
                <nav className="hidden md:flex items-center justify-center gap-8 flex-1">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative flex items-center h-full group"
                            onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                            onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className="flex items-center gap-1 text-[14px] font-[family-name:var(--font-poppins-custom)] font-medium text-white/90 hover:text-white transition-colors py-2"
                                onClick={(e) => link.hasDropdown && e.preventDefault()}
                            >
                                {link.name}
                                {link.hasDropdown && (
                                    <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                )}
                            </Link>

                            {/* Thick underline hover indicator (like the screenshot) */}
                            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-white rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />

                            {/* Dropdown */}
                            <AnimatePresence>
                                {link.hasDropdown && activeDropdown === link.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-72"
                                    >
                                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 flex flex-col gap-1">
                                            {servicesMenu.map((service) => (
                                                <Link
                                                    key={service.name}
                                                    href={service.href}
                                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
                                                >
                                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover/item:bg-[#0f172a] group-hover/item:text-white transition-colors text-gray-500">
                                                        <service.icon className="w-4 h-4" />
                                                    </div>
                                                    <span className="text-[13px] font-[family-name:var(--font-poppins-custom)] font-medium text-gray-700 group-hover/item:text-[#0f172a] transition-colors">
                                                        {service.name}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </nav>

                {/* CTA Button (Outlined like the screenshot) */}
                <div className="hidden md:flex flex-shrink-0 w-48 justify-end">
                    <Link
                        href="/contact"
                        className="px-5 py-2 rounded-lg border border-white/40 text-white text-[13px] font-[family-name:var(--font-poppins-custom)] font-semibold tracking-wide uppercase hover:bg-white hover:text-[#0f172a] transition-all duration-300"
                    >
                        Get In Touch
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden relative z-20 p-2 text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 w-full h-screen bg-[#0f172a] z-0 px-6 pt-32 pb-8 flex flex-col"
                    >
                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col gap-4">
                                    <Link
                                        href={link.href}
                                        className="text-2xl font-[family-name:var(--font-poppins-custom)] font-semibold text-white"
                                        onClick={() => !link.hasDropdown && setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.hasDropdown && (
                                        <div className="pl-4 flex flex-col gap-4 border-l-2 border-white/20">
                                            {servicesMenu.map((service) => (
                                                <Link
                                                    key={service.name}
                                                    href={service.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="text-[16px] font-[family-name:var(--font-poppins-custom)] font-medium text-white/70 flex items-center gap-3"
                                                >
                                                    <service.icon className="w-5 h-5 opacity-70" />
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                        <div className="mt-auto">
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full flex items-center justify-center gap-2 bg-white text-[#0f172a] px-6 py-4 rounded-xl text-[16px] font-[family-name:var(--font-poppins-custom)] font-semibold uppercase tracking-wide"
                            >
                                Get In Touch
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
