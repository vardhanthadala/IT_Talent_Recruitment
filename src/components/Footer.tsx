import Link from "next/link";
import { ArrowRight, Atom } from "lucide-react";
import { FaXTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

const FOOTER_LINKS = {
  services: [
    { name: "Software Engineering", href: "#" },
    { name: "Data & AI", href: "#" },
    { name: "Cloud & DevOps", href: "#" },
    { name: "Product Design", href: "#" },
    { name: "Managed Teams", href: "#" },
  ],
  industries: [
    { name: "Healthcare & Life Sciences", href: "#" },
    { name: "Finance & Fintech", href: "#" },
    { name: "Automotive & Mobility", href: "#" },
    { name: "Energy & Utilities", href: "#" },
    { name: "Retail & E-commerce", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Process", href: "#" },
    { name: "Internal Careers", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Careers", href: "#" },
  ],
  connect: [
    { name: "LinkedIn", href: "#", icon: FaLinkedin, hoverColor: "group-hover:text-[#0077B5]" },
    { name: "GitHub", href: "#", icon: FaGithub, hoverColor: "group-hover:text-[#333333]" },
    { name: "X.com", href: "#", icon: FaXTwitter, hoverColor: "group-hover:text-black" },
    { name: "Instagram", href: "#", icon: FaInstagram, hoverColor: "group-hover:text-[#E1306C]" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-24 pb-8 border-t border-gray-100">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 2xl:px-24">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-20">

          {/* Left Column: Brand & CTA */}
          <div className="flex flex-col items-start w-full lg:w-[40%]">
            <Link href="/" className="flex items-center mb-10 min-h-[40px] min-w-[150px]">
              {/* TODO: Add your logo <Image /> here later */}
            </Link>

            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-poppins-custom)] font-medium text-[#0f172a] leading-[1.2] tracking-tight mb-8 max-w-sm">
              Anything's possible when you have the talent.
            </h2>

            <Link
              href="/contact"
              className="bg-[#0f172a] text-white font-[family-name:var(--font-poppins-custom)] font-medium px-2 py-2 flex items-center justify-between sm:justify-center group hover:bg-[#1e293b] transition-colors shadow-lg shadow-black/5"
            >
              <span className="px-6 text-[15px]">Hire Top Talent</span>
              <div className="w-10 h-10 bg-white text-[#0f172a] flex items-center justify-center rounded-[2px] transition-transform duration-300">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-all" />
              </div>
            </Link>
          </div>

          {/* Right Column: Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full lg:w-[60%]">

            <div>
              <h4 className="text-[#0f172a] font-[family-name:var(--font-poppins-custom)] font-semibold mb-6">Services</h4>
              <ul className="flex flex-col gap-4">
                {FOOTER_LINKS.services.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-500 hover:text-blue-600 text-[14px] font-[family-name:var(--font-poppins-custom)] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[#0f172a] font-[family-name:var(--font-poppins-custom)] font-semibold mb-6">Industries</h4>
              <ul className="flex flex-col gap-4">
                {FOOTER_LINKS.industries.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-500 hover:text-blue-600 text-[14px] font-[family-name:var(--font-poppins-custom)] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[#0f172a] font-[family-name:var(--font-poppins-custom)] font-semibold mb-6">Company</h4>
              <ul className="flex flex-col gap-4">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-500 hover:text-blue-600 text-[14px] font-[family-name:var(--font-poppins-custom)] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[#0f172a] font-[family-name:var(--font-poppins-custom)] font-semibold mb-6">Connect</h4>
              <ul className="flex flex-col gap-4">
                {FOOTER_LINKS.connect.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <Link href={link.href} className={`flex items-center gap-3 text-gray-500 ${link.hoverColor} text-[14px] font-[family-name:var(--font-poppins-custom)] transition-colors group`}>
                        <Icon className={`w-4 h-4 text-gray-400 ${link.hoverColor} transition-colors`} />
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[13px] font-[family-name:var(--font-poppins-custom)] text-gray-500 hover:text-[#0f172a]">Privacy Policy</Link>
            <Link href="#" className="text-[13px] font-[family-name:var(--font-poppins-custom)] text-gray-500 hover:text-[#0f172a]">Terms of Use</Link>
          </div>
          <p className="text-[13px] font-[family-name:var(--font-poppins-custom)] text-gray-500">
            <span className="text-blue-600 font-medium">Company Name.</span> © {new Date().getFullYear()} All rights reserved. Powered By <a href="https://dexze.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline transition-all">Dexze</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
