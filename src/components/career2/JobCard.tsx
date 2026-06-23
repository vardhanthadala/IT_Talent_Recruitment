import Link from "next/link";
import { MapPin, Briefcase, Banknote, Clock } from "lucide-react";
import type { Job } from "@/data/jobs";

interface JobCardProps {
    job: Job;
    isNew?: boolean;
    salaryRange?: string;
}

export default function JobCard({ job, isNew = false, salaryRange }: JobCardProps) {
    return (
        <div className="border border-gray-200 rounded-xl p-6 bg-white hover:border-[#FF5A1F]/30 hover:shadow-md transition-all group">
            {isNew && (
                <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#FFF0E6] text-[#FF5A1F] text-[0.65rem] font-bold uppercase tracking-wider rounded-md">
                        New
                    </span>
                </div>
            )}
            
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#FF5A1F] transition-colors">{job.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 max-w-2xl">
                        {job.description}
                    </p>
                </div>
                
                <Link 
                    href={`/career2/apply/${job.slug}`}
                    className="shrink-0 inline-flex items-center justify-center px-4 py-2 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors whitespace-nowrap"
                >
                    View role
                </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-4 border-t border-gray-100">
                {job.location && (
                    <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {job.location}
                    </div>
                )}
                {job.type && (
                    <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                        <Briefcase className="w-4 h-4 text-gray-400" />
                        {job.type}
                    </div>
                )}
                {job.experience && (
                    <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                        <Clock className="w-4 h-4 text-gray-400" />
                        {job.experience}
                    </div>
                )}
                {salaryRange && (
                    <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                        <Banknote className="w-4 h-4 text-gray-400" />
                        {salaryRange}
                    </div>
                )}
            </div>
        </div>
    );
}
