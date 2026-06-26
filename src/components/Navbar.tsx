"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Smartphone, Globe, BarChart, Cloud, ChevronDown, Cpu, Lightbulb, Settings, Compass, BrainCircuit, Layers, Users, Code, ShieldCheck, Server, Laptop, Landmark, HeartPulse, Factory, ShoppingCart, Briefcase, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatWeDoMobileMenu = [
    { category: "IT Training", icon: GraduationCap, items: [
      { name: "Clinical SAS Training", href: "/what-we-do/clinical-sas-training" },
      { name: "R for Clinical Trials", href: "/what-we-do/r-for-clinical-trials" },
      { name: "Python for Clinical Data Science", href: "/what-we-do/python-for-clinical-data-science" },
      { name: "R for Real-World Evidence (RWE)", href: "/what-we-do/r-for-real-world-evidence" },
      { name: "PK/PD Modeling & Pharmacometrics", href: "/what-we-do/pk-pd-modeling-pharmacometrics" },
    ]},
    { category: "Development", icon: Code, items: [
      { name: "Frontend Engineering", href: "/what-we-do/frontend-developers" },
      { name: "Backend Engineering", href: "/what-we-do/backend-engineers" },
      { name: "Full Stack Development", href: "/what-we-do/full-stack-developers" },
      { name: "Mobile App Development", href: "/what-we-do/mobile-app-devs" },
      { name: "UI/UX Design", href: "/what-we-do/ui-ux-designers" },
    ]},
    { category: "Testing & QA", icon: ShieldCheck, items: [
      { name: "Automation Testing", href: "/what-we-do/automation-engineers" },
      { name: "Manual QA Testing", href: "/what-we-do/manual-qa-testers" },
      { name: "Performance Testing", href: "/what-we-do/performance-testers" },
      { name: "Security Analysis", href: "/what-we-do/security-analysts" },
      { name: "SDET Services", href: "/what-we-do/sdet-professionals" },
    ]},
    { category: "Operations", icon: Server, items: [
      { name: "DevOps Services", href: "/what-we-do/devops-engineers" },
      { name: "Cloud Architecture", href: "/what-we-do/cloud-architects" },
      { name: "System Administration", href: "/what-we-do/system-administrators" },
      { name: "Network Engineering", href: "/what-we-do/network-engineers" },
      { name: "IT Support", href: "/what-we-do/it-support-specialists" },
    ]},
    { category: "AI & Data", icon: BrainCircuit, items: [
      { name: "Data Science", href: "/what-we-do/data-scientists" },
      { name: "Machine Learning Engineering", href: "/what-we-do/machine-learning-engineers" },
      { name: "Data Analysis", href: "/what-we-do/data-analysts" },
      { name: "Data Engineering", href: "/what-we-do/data-engineers" },
      { name: "Business Intelligence", href: "/what-we-do/bi-developers" },
    ]}
  ];

  const industriesMobileMenu = [
    { name: "IT & Technology", icon: Laptop, href: "/industries/it-technology" },
    { name: "Finance & Banking", icon: Landmark, href: "/industries/finance-banking" },
    { name: "Healthcare & Life Sciences", icon: HeartPulse, href: "/industries/healthcare-life-sciences" },
    { name: "Manufacturing & Logistics", icon: Factory, href: "/industries/manufacturing-logistics" },
    { name: "Retail & E-commerce", icon: ShoppingCart, href: "/industries/retail-ecommerce" },
    { name: "Professional Services", icon: Briefcase, href: "/industries/professional-services" },
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
                <Image src="/images/sreehisoft-logo.png" alt="Sreehisoft Solutions" width={150} height={40} className="w-auto h-8 md:h-10 object-contain" priority />
              </Link>
            </div>

            {/* Desktop Navigation (Centered) */}
            <nav className="hidden lg:flex items-stretch justify-center flex-1 space-x-2 lg:space-x-4 xl:space-x-6">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className={`${link.hasMegaMenu ? '' : 'relative'} h-full flex items-center group`}
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
                    className={`whitespace-nowrap px-1.5 md:px-2 lg:px-3 py-1.5 rounded-md text-[14px] lg:text-[16px] font-[family-name:var(--font-poppins-custom)] font-semibold transition-colors flex items-center gap-1 relative ${(activeMenu === link.name || (link.href !== '/' && pathname.startsWith(link.href)) || (link.href === '/' && pathname === '/')) ? "text-blue-600" : "text-gray-700 hover:text-gray-900"
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
                    <div className={`absolute top-full cursor-default pt-4 z-50 left-1/2 -translate-x-1/2 ${
                      link.name === 'Industries' 
                        ? 'w-[95vw] max-w-5xl' 
                        : 'w-[95vw] max-w-7xl'
                    }`}>
                      <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-8 flex flex-col">
                        
                        {link.name === "What We Do" && (
                          <>
                            {/* Icons row with connecting dotted line */}
                            <div className="grid grid-cols-5 gap-8 w-full mb-6 relative">
                              {/* Dotted connecting line */}
                              <div className="absolute top-1/2 left-4 right-[20%] h-[1px] border-t border-dashed border-gray-300 -z-10"></div>
                              {/* Column 1 Icon (Training) */}
                              <div className="flex justify-start">
                                <div className="w-auto pr-4 flex items-center text-black z-10 relative bg-white">
                                  <GraduationCap className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                              </div>
                              
                              {/* Column 2 Icon (Development) */}
                              <div className="flex justify-start">
                                <div className="w-auto pr-4 flex items-center text-black z-10 relative bg-white">
                                  <Code className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                              </div>
                              
                              {/* Column 3 Icon (Testing) */}
                              <div className="flex justify-start">
                                <div className="w-auto pr-4 flex items-center text-black z-10 relative bg-white">
                                  <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                              </div>

                              {/* Column 4 Icon (Operations) */}
                              <div className="flex justify-start">
                                <div className="w-auto pr-4 flex items-center text-black z-10 relative bg-white">
                                  <Server className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                              </div>
                              
                              {/* Column 5 Icon (AI & Data) */}
                              <div className="flex justify-start">
                                <div className="w-auto pr-4 flex items-center text-black z-10 relative bg-white">
                                  <BrainCircuit className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                              </div>
                            </div>
                            
                            {/* Lists row */}
                            <div className="grid grid-cols-5 gap-8 w-full">
                              {/* IT Training and Placement */}
                              <div>
                                <h3 className="font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-4 uppercase text-[13px] tracking-wide whitespace-nowrap">IT Training</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/what-we-do/clinical-sas-training" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors block leading-tight">Clinical SAS Training</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/r-for-clinical-trials" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors block leading-tight">R for Clinical Trials</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/python-for-clinical-data-science" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors block leading-tight">Python for Clinical Data Science</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/r-for-real-world-evidence" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors block leading-tight">R for Real-World Evidence (RWE)</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/pk-pd-modeling-pharmacometrics" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors block leading-tight">PK/PD Modeling & Pharmacometrics</Link>
                                  </li>
                                </ul>
                              </div>

                              {/* Development */}
                              <div>
                                <h3 className="font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-4 uppercase text-[13px] tracking-wide">Development</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/what-we-do/frontend-developers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Frontend Engineering</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/backend-engineers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Backend Engineering</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/full-stack-developers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Full Stack Development</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/mobile-app-devs" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Mobile App Development</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/ui-ux-designers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">UI/UX Design</Link>
                                  </li>
                                </ul>
                              </div>

                              {/* Testing */}
                              <div>
                                <h3 className="font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-4 uppercase text-[13px] tracking-wide">Testing & QA</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/what-we-do/automation-engineers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Automation Testing</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/manual-qa-testers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Manual QA Testing</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/performance-testers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Performance Testing</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/security-analysts" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Security Analysis</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/sdet-professionals" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">SDET Services</Link>
                                  </li>
                                </ul>
                              </div>

                              {/* Operations */}
                              <div>
                                <h3 className="font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-4 uppercase text-[13px] tracking-wide">Operations</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/what-we-do/devops-engineers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">DevOps Services</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/cloud-architects" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Cloud Architecture</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/system-administrators" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">System Administration</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/network-engineers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Network Engineering</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/it-support-specialists" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">IT Support</Link>
                                  </li>
                                </ul>
                              </div>

                              {/* AI & Data */}
                              <div>
                                <h3 className="font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-4 uppercase text-[13px] tracking-wide">AI & Data</h3>
                                <ul className="space-y-3">
                                  <li>
                                    <Link href="/what-we-do/data-scientists" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Data Science</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/machine-learning-engineers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Machine Learning Engineering</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/data-analysts" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Data Analysis</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/data-engineers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Data Engineering</Link>
                                  </li>
                                  <li>
                                    <Link href="/what-we-do/bi-developers" className="text-[14px] text-slate-500 hover:text-blue-600 transition-colors">Business Intelligence</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </>
                        )}

                        {link.name === "Industries" && (
                          <div className="grid grid-cols-3 gap-8 w-full">
                            {/* IT & Technology */}
                            <Link href="/industries/it-technology" onClick={() => setIsOpen(false)} className="flex flex-col gap-3 group/ind cursor-pointer">
                              <div className={`w-10 h-10 flex items-center justify-center transition-transform group-hover/ind:-translate-y-1 ${pathname === '/industries/it-technology' ? 'bg-blue-50 text-blue-600' : 'text-black bg-white'}`}>
                                <Laptop className="w-6 h-6" strokeWidth={1.5} />
                              </div>
                              <h3 className={`font-[family-name:var(--font-poppins-custom)] font-bold text-[15px] ${pathname === '/industries/it-technology' ? 'text-blue-600' : 'text-[#0f172a]'}`}>IT & Technology</h3>
                              <p className="text-slate-500 text-[13px] leading-relaxed">Software, hardware, and IT services solutions.</p>
                            </Link>

                            {/* Finance & Banking */}
                            <Link href="/industries/finance-banking" onClick={() => setIsOpen(false)} className="flex flex-col gap-3 group/ind cursor-pointer">
                              <div className={`w-10 h-10 flex items-center justify-center transition-transform group-hover/ind:-translate-y-1 ${pathname === '/industries/finance-banking' ? 'bg-blue-50 text-blue-600' : 'text-black bg-white'}`}>
                                <Landmark className="w-6 h-6" strokeWidth={1.5} />
                              </div>
                              <h3 className={`font-[family-name:var(--font-poppins-custom)] font-bold text-[15px] ${pathname === '/industries/finance-banking' ? 'text-blue-600' : 'text-[#0f172a]'}`}>Finance & Banking</h3>
                              <p className="text-slate-500 text-[13px] leading-relaxed">Fintech, banking, and insurance talent.</p>
                            </Link>

                            {/* Healthcare */}
                            <Link href="/industries/healthcare-life-sciences" onClick={() => setIsOpen(false)} className="flex flex-col gap-3 group/ind cursor-pointer">
                              <div className={`w-10 h-10 flex items-center justify-center transition-transform group-hover/ind:-translate-y-1 ${pathname === '/industries/healthcare-life-sciences' ? 'bg-blue-50 text-blue-600' : 'text-black bg-white'}`}>
                                <HeartPulse className="w-6 h-6" strokeWidth={1.5} />
                              </div>
                              <h3 className={`font-[family-name:var(--font-poppins-custom)] font-bold text-[15px] ${pathname === '/industries/healthcare-life-sciences' ? 'text-blue-600' : 'text-[#0f172a]'}`}>Healthcare & Life Sciences</h3>
                              <p className="text-slate-500 text-[13px] leading-relaxed">Medical, pharma, and biotech recruitment.</p>
                            </Link>

                            {/* Manufacturing */}
                            <Link href="/industries/manufacturing-logistics" onClick={() => setIsOpen(false)} className="flex flex-col gap-3 group/ind cursor-pointer">
                              <div className={`w-10 h-10 flex items-center justify-center transition-transform group-hover/ind:-translate-y-1 ${pathname === '/industries/manufacturing-logistics' ? 'bg-blue-50 text-blue-600' : 'text-black bg-white'}`}>
                                <Factory className="w-6 h-6" strokeWidth={1.5} />
                              </div>
                              <h3 className={`font-[family-name:var(--font-poppins-custom)] font-bold text-[15px] ${pathname === '/industries/manufacturing-logistics' ? 'text-blue-600' : 'text-[#0f172a]'}`}>Manufacturing & Logistics</h3>
                              <p className="text-slate-500 text-[13px] leading-relaxed">Supply chain and industrial solutions.</p>
                            </Link>

                            {/* Retail */}
                            <Link href="/industries/retail-ecommerce" onClick={() => setIsOpen(false)} className="flex flex-col gap-3 group/ind cursor-pointer">
                              <div className={`w-10 h-10 flex items-center justify-center transition-transform group-hover/ind:-translate-y-1 ${pathname === '/industries/retail-ecommerce' ? 'bg-blue-50 text-blue-600' : 'text-black bg-white'}`}>
                                <ShoppingCart className="w-6 h-6" strokeWidth={1.5} />
                              </div>
                              <h3 className={`font-[family-name:var(--font-poppins-custom)] font-bold text-[15px] ${pathname === '/industries/retail-ecommerce' ? 'text-blue-600' : 'text-[#0f172a]'}`}>Retail & E-commerce</h3>
                              <p className="text-slate-500 text-[13px] leading-relaxed">Digital storefronts and consumer tech.</p>
                            </Link>

                            {/* Professional Services */}
                            <Link href="/industries/professional-services" onClick={() => setIsOpen(false)} className="flex flex-col gap-3 group/ind cursor-pointer">
                              <div className={`w-10 h-10 flex items-center justify-center transition-transform group-hover/ind:-translate-y-1 ${pathname === '/industries/professional-services' ? 'bg-blue-50 text-blue-600' : 'text-black bg-white'}`}>
                                <Briefcase className="w-6 h-6" strokeWidth={1.5} />
                              </div>
                              <h3 className={`font-[family-name:var(--font-poppins-custom)] font-bold text-[15px] ${pathname === '/industries/professional-services' ? 'text-blue-600' : 'text-[#0f172a]'}`}>Professional Services</h3>
                              <p className="text-slate-500 text-[13px] leading-relaxed">Non-IT, legal, and business consulting experts.</p>
                            </Link>
                          </div>
                        )}

                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center justify-end w-auto lg:w-1/4 space-x-6">
              <Link href="/contact" className="whitespace-nowrap px-4 lg:px-5 py-2 rounded-full bg-blue-600 text-white text-[15px] lg:text-[16px] font-[family-name:var(--font-poppins-custom)] font-medium hover:bg-blue-700 transition-colors">
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
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
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-3/4 max-w-sm bg-white z-[60] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col shadow-2xl border-r border-gray-200 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
            <Image src="/images/sreehisoft-logo.png" alt="Sreehisoft Solutions" width={150} height={40} className="w-auto h-8 object-contain" priority />
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
              {link.hasMegaMenu && link.name === "What We Do" && (
                <div className="pl-6 mt-2 ml-4 mb-4">
                  {whatWeDoMobileMenu.map((cat) => (
                    <div key={cat.category} className="mb-4">
                      <div className="flex items-center gap-2 mb-2 text-slate-800 font-semibold text-sm">
                        <cat.icon className="w-4 h-4 text-blue-600" />
                        <span>{cat.category}</span>
                      </div>
                      <div className="pl-6 space-y-2 border-l border-gray-200">
                        {cat.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {link.hasMegaMenu && link.name === "Industries" && (
                <div className="pl-6 space-y-3 mt-2 border-l-2 border-gray-100 ml-4 mb-4">
                  {industriesMobileMenu.map((subItem) => (
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
