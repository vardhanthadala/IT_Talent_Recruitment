import React from "react";
import { RoleDetails } from "@/data/what-we-do";
import { CheckCircle2 } from "lucide-react";

export default function RoleOverview({ role }: { role: RoleDetails }) {
    return (
        <section className="w-full py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left: Full Description */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] leading-tight">
                            Why hire our <span className="text-[#0077b5]">{role.title}</span>?
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed font-light">
                            {role.fullDescription}
                        </p>
                    </div>

                    {/* Right: Responsibilities */}
                    <div className="bg-[#f8fafc] rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] mb-8">
                            Key Responsibilities
                        </h3>
                        <div className="flex flex-col gap-5">
                            {role.deliverables.map((resp, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-[#0077b5]" />
                                    </div>
                                    <p className="text-gray-700 leading-relaxed font-medium">
                                        <strong>{resp.title}:</strong> {resp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
