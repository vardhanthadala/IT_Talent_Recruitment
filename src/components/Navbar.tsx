"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Smartphone, Globe, BarChart, Cloud, ChevronDown, Cpu, Lightbulb, Settings, Compass, BrainCircuit, Layers, Users, Code, ShieldCheck, Server, Laptop, Landmark, HeartPulse, Factory, ShoppingCart, Briefcase } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesMenu = [
    {
      category: "CORE SERVICES",
      items: [
        { name: "Digital Transformation", description: "Comprehensive digital transformation for modern enterprises", icon: Globe, href: "/services/digital-transformation" },
        { name: "Artificial Intelligence", description: "Leverage AI and machine learning to unlock opportunities", icon: Cpu, href: "/services/artificial-intelligence" },
        { name: "Data & BI", description: "Transform raw data into actionable insights", icon: BarChart, href: "/services/data-bi" },
        { name: "Application Services", description: "Corporate and consumer applications for your business", icon: Smartphone, href: "/services/application-services" },
        { name: "Technology Advisory", description: "Expert guidance tailored to your specific business needs", icon: Lightbulb, href: "/services/technology-advisory" },
        { name: "Managed IT Services", description: "Reliable, scalable, and secure operations backed by SLAs", icon: Settings, href: "/services/managed-it-services" }
      ]
    }
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "What We Do", href: "#", hasMegaMenu: true },
    { name: "Industries", href: "/industries", hasMegaMenu: true },
    { name: "Careers", href: "/career2" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-200 ease-in-out ${scrolled ? "bg-white shadow-sm border-b border-gray-200" : "bg-white"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-stretch justify-between h-16 lg:h-[72px]">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center w-auto lg:w-1/4">
              <Link href="/" className="flex items-center gap-2 group">
                {/* Place your logo Image component here later */}
              </Link>
            </div>

            {/* Desktop Navigation (Centered) */}
            <nav className="hidden md:flex items-stretch justify-center flex-1 space-x-2 lg:space-x-4 xl:space-x-6">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative h-full flex items-center group"
                  onMouseEnter={() => link.hasMegaMenu && setActiveMenu(link.name)}
                  onMouseLeave={() => link.hasMegaMenu && setActiveMenu(null)}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.hasMegaMenu) {
                        e.preventDefault();
                      }
                    }}
                    className={`whitespace-nowrap px-1.5 md:px-2 lg:px-3 py-1.5 rounded-md text-[14px] lg:text-[16px] font-[family-name:var(--font-poppins-custom)] font-semibold transition-colors flex items-center gap-1 relative ${activeMenu === link.name ? "text-blue-600" : "text-gray-700 hover:text-gray-900"
                      }`}
                  >
                    {link.name}
                    {link.hasMegaMenu && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === link.name ? "rotate-180" : ""}`} />
                    )}
                    <span className="absolute inset-x-3 bottom-0 h-[2px] bg-blue-600 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {link.hasMegaMenu && activeMenu === link.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[95vw] max-w-5xl cursor-default pt-4 z-50">
                      <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-8 flex flex-col">
                        
                        {link.name === "What We Do" && (
                          <>
                            {/* Icons row with connecting dotted line */}
                            <div className="flex items-center justify-between mb-6 relative">
                              {/* Dotted connecting line */}
                              <div className="absolute top-1/2 left-[10%] right-[10%] h-[1px] border-t border-dashed border-gray-300 -z-10"></div>
                              
                              {/* Column 1 Icon (Development) */}
                              <div className="w-10 h-10 flex items-center justify-center text-black z-10 relative bg-white">
                                <Code className="w-6 h-6" strokeWidth={1.5} />
                              </div>
                              
                              {/* Column 2 Icon (Testing) */}
                              <div className="w-10 h-10 flex items-center justify-center text-black z-10 relative bg-white">
                                <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
                              </div>
                              
                              {/* Column 3 Icon (Operations) */}
                              <div className="w-10 h-10 flex items-center justify-center text-black z-10 relative bg-white">
                                <Server className="w-6 h-6" strokeWidth={1.5} />
                              </div>

                              {/* Column 4 Icon (AI & Data) */}
                              <div className="w-10 h-10 flex items-center justify-center text-black z-10 relative bg-white">
                                <BrainCircuit className="w-6 h-6" strokeWidth={1.5} />
                              </div>
                            </div>
                            
                            {/* Lists row */}
                            <div className="grid grid-cols-4 gap-8 w-full">
                              {/* Development */}
                              <div>
                                <h3 className="font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-4 uppercase text-[13px] tracking-wide">Development</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/what-we-do/frontend-developers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Frontend Developers</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/backend-engineers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Backend Engineers</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/full-stack-developers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Full Stack Developers</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/mobile-app-devs" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Mobile App Devs</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/ui-ux-designers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">UI/UX Designers</Link>
                                  </li>
                                </ul>
                              </div>

                              {/* Testing */}
                              <div>
                                <h3 className="font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-4 uppercase text-[13px] tracking-wide">Testing & QA</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/what-we-do/automation-engineers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Automation Engineers</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/manual-qa-testers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Manual QA Testers</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/performance-testers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Performance Testers</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/security-analysts" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Security Analysts</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/sdet-professionals" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">SDET Professionals</Link>
                                  </li>
                                </ul>
                              </div>

                              {/* Operations */}
                              <div>
                                <h3 className="font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-4 uppercase text-[13px] tracking-wide">Operations</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/what-we-do/devops-engineers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">DevOps Engineers</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/cloud-architects" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Cloud Architects</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/system-administrators" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">System Administrators</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/network-engineers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Network Engineers</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/it-support-specialists" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">IT Support Specialists</Link>
                                  </li>
                                </ul>
                              </div>

                              {/* AI & Data */}
                              <div>
                                <h3 className="font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-4 uppercase text-[13px] tracking-wide">AI & Data</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/what-we-do/data-scientists" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Data Scientists</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/machine-learning-engineers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Machine Learning Engineers</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/data-analysts" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Data Analysts</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/data-engineers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Data Engineers</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/bi-developers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">BI Developers</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </>
                        )}

                        {link.name === "Industries" && (
                          <div className="grid grid-cols-3 gap-8 w-full">
                            {/* IT & Technology */}
                            <div className="flex flex-col gap-3 group/ind cursor-pointer">
                              <div className="w-10 h-10 flex items-center justify-center text-black bg-white transition-transform group-hover/ind:-translate-y-1">
                                <Laptop className="w-6 h-6" strokeWidth={1.5} />
                              </div>
                              <h3 className="font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] text-[15px]">IT & Technology</h3>
                              <p className="text-slate-500 text-[13px] leading-relaxed">Software, hardware, and IT services solutions.</p>
                            </div>

                            {/* Finance & Banking */}
                            <div className="flex flex-col gap-3 group/ind cursor-pointer">
                              <div className="w-10 h-10 flex items-center justify-center text-black bg-white transition-transform group-hover/ind:-translate-y-1">
                                <Landmark className="w-6 h-6" strokeWidth={1.5} />
                              </div>
                              <h3 className="font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] text-[15px]">Finance & Banking</h3>
                              <p className="text-slate-500 text-[13px] leading-relaxed">Fintech, banking, and insurance talent.</p>
                            </div>

                            {/* Healthcare */}
                            <div className="flex flex-col gap-3 group/ind cursor-pointer">
                              <div className="w-10 h-10 flex items-center justify-center text-black bg-white transition-transform group-hover/ind:-translate-y-1">
                                <HeartPulse className="w-6 h-6" strokeWidth={1.5} />
                              </div>
                              <h3 className="font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] text-[15px]">Healthcare & Life Sciences</h3>
                              <p className="text-slate-500 text-[13px] leading-relaxed">Medical, pharma, and biotech recruitment.</p>
                            </div>

                            {/* Manufacturing */}
                            <div className="flex flex-col gap-3 group/ind cursor-pointer">
                              <div className="w-10 h-10 flex items-center justify-center text-black bg-white transition-transform group-hover/ind:-translate-y-1">
                                <Factory className="w-6 h-6" strokeWidth={1.5} />
                              </div>
                              <h3 className="font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] text-[15px]">Manufacturing & Logistics</h3>
                              <p className="text-slate-500 text-[13px] leading-relaxed">Supply chain and industrial solutions.</p>
                            </div>

                            {/* Retail */}
                            <div className="flex flex-col gap-3 group/ind cursor-pointer">
                              <div className="w-10 h-10 flex items-center justify-center text-black bg-white transition-transform group-hover/ind:-translate-y-1">
                                <ShoppingCart className="w-6 h-6" strokeWidth={1.5} />
                              </div>
                              <h3 className="font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] text-[15px]">Retail & E-commerce</h3>
                              <p className="text-slate-500 text-[13px] leading-relaxed">Digital storefronts and consumer tech.</p>
                            </div>

                            {/* Professional Services */}
                            <div className="flex flex-col gap-3 group/ind cursor-pointer">
                              <div className="w-10 h-10 flex items-center justify-center text-black bg-white transition-transform group-hover/ind:-translate-y-1">
                                <Briefcase className="w-6 h-6" strokeWidth={1.5} />
                              </div>
                              <h3 className="font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] text-[15px]">Professional Services</h3>
                              <p className="text-slate-500 text-[13px] leading-relaxed">Non-IT, legal, and business consulting experts.</p>
                            </div>
                          </div>
                        )}

                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden md:flex items-center justify-end w-auto lg:w-1/4 space-x-6">
              <Link href="/contact" className="whitespace-nowrap px-4 lg:px-5 py-2 rounded-full bg-blue-600 text-white text-[15px] lg:text-[16px] font-[family-name:var(--font-poppins-custom)] font-medium hover:bg-blue-700 transition-colors">
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-3/4 max-w-sm bg-white z-[60] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col shadow-2xl border-r border-gray-200 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
            <Image src="/logos/Rolvatech_logo.png" alt="Rolva Tech" width={150} height={40} className="w-auto h-8" priority />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 -mr-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                className="block px-3 py-3 rounded-lg text-[16px] font-[family-name:var(--font-poppins-custom)] font-medium text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
                onClick={(e) => {
                  if (link.hasMegaMenu) {
                    e.preventDefault();
                  } else {
                    setIsOpen(false);
                  }
                }}
              >
                {link.name}
              </Link>
              {link.hasMegaMenu && (
                <div className="pl-6 space-y-3 mt-2 border-l-2 border-gray-100 ml-4 mb-4">
                  {servicesMenu[0].items.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-3 py-2 rounded-lg transition-colors group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <subItem.icon className="w-5 h-5 text-gray-400 group-hover:text-black" />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-black">{subItem.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="border-t border-gray-100 pt-4 mt-4 space-y-2">
            <Link
              href="/contact"
              className="block px-3 py-3 rounded-lg text-[16px] font-[family-name:var(--font-poppins-custom)] font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
