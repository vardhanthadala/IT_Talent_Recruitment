"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { rolesData, RoleDetails } from "@/data/what-we-do";

interface OtherRolesProps {
    currentRole: RoleDetails;
}

export default function OtherRoles({ currentRole }: OtherRolesProps) {
    if (currentRole.category !== "IT Training") return null;

    const otherRoles = Object.values(rolesData).filter(
        (role) => role.category === currentRole.category && role.id !== currentRole.id
    );

    if (otherRoles.length === 0) return null;

    return (
        <section className="py-24 bg-white w-full border-t border-gray-100 font-[family-name:var(--font-poppins-custom)] overflow-hidden">
            <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 2xl:px-24">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 md:mb-20 gap-8">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-[48px] lg:text-[56px] font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] tracking-[-0.02em] leading-[1.1]"
                    >
                        Other <span className="font-normal italic text-blue-600">programs</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-lg text-slate-500 text-[15px] leading-relaxed"
                    >
                        Explore our specialized IT training tracks designed to help you master the latest technologies and advance your career in the clinical and data sectors.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                    {otherRoles.map((role, index) => (
                        <motion.div
                            key={role.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <Link href={`/what-we-do/${role.id}`} className="group block h-full">
                                <div className="h-full bg-white rounded-2xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] hover:-translate-y-1">
                                    <div>
                                        <h3 className="text-[22px] font-bold text-[#0f172a] pr-4 leading-tight mb-4">
                                            {role.title}
                                        </h3>
                                        <p className="text-[14px] text-slate-500 leading-relaxed font-light mb-8">
                                            {role.shortDescription}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-[#0f172a] text-[13px] font-[family-name:var(--font-poppins-custom)] font-medium transition-colors">
                                        explore course
                                        <svg 
                                            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300 text-blue-500" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
