import Link from "next/link";
import { ArrowUpRight, MapPin, Briefcase, Clock, Banknote } from "lucide-react";
import type { Job } from "@/data/jobs";

interface JobCardProps {
    job: Job;
    isNew?: boolean;
    salaryRange?: string;
}

export default function JobCard({ job, isNew = false, salaryRange }: JobCardProps) {
    return (
        <div className="group flex flex-col md:flex-row md:items-center justify-between gap-6 w-full hover:bg-black/[0.02] p-4 -mx-4 rounded-xl transition-colors">
            
            <div className="flex flex-col gap-2">
                {isNew && (
                    <div className="mb-1">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[0.65rem] font-bold uppercase tracking-wider rounded-md">
                            New
                        </span>
                    </div>
                )}
                
                <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-poppins-custom)] font-bold text-neutral-900 group-hover:text-blue-600 transition-colors leading-[1.08] tracking-[-0.03em]">
                    {job.title}
                </h3>
                
                <p className="text-gray-600 text-sm md:text-base font-[family-name:var(--font-poppins-custom)] font-light max-w-2xl mt-1 mb-2 leading-[1.6]">
                    {job.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-3">
                    {job.location && (
                        <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gray-300 text-gray-900 text-sm font-medium bg-white">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                        </div>
                    )}
                    {job.type && (
                        <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gray-300 text-gray-900 text-sm font-medium bg-white">
                            <Briefcase className="w-4 h-4" />
                            {job.type}
                        </div>
                    )}
                    {job.experience && (
                        <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gray-300 text-gray-900 text-sm font-medium bg-white">
                            <Clock className="w-4 h-4" />
                            {job.experience}
                        </div>
                    )}
                    {salaryRange && (
                        <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gray-300 text-gray-900 text-sm font-medium bg-white">
                            <Banknote className="w-4 h-4" />
                            {salaryRange}
                        </div>
                    )}
                </div>
            </div>
            
            <Link 
                href={`/career2/apply/${job.slug}`}
                className="shrink-0 flex items-center gap-1 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors self-start md:self-auto mt-4 md:mt-0"
            >
                Apply <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </Link>
            
        </div>
    );
}
