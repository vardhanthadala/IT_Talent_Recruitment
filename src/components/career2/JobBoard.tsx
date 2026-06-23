import { useState } from "react";
import JobCard from "./JobCard";
import { Job } from "@/data/jobs";
import { Loader2 } from "lucide-react";

interface JobBoardProps {
    searchQuery: string;
    jobs: Job[];
    isLoading: boolean;
}

export default function JobBoard({ searchQuery, jobs, isLoading }: JobBoardProps) {
    const [activeDepartment, setActiveDepartment] = useState("View all");

    const isJobNew = (postedDateStr: string) => {
        if (!postedDateStr) return false;
        const postedDate = new Date(postedDateStr);
        if (isNaN(postedDate.getTime())) return false;
        
        const thresholdDate = new Date();
        thresholdDate.setDate(thresholdDate.getDate() - 45);
        return postedDate >= thresholdDate;
    };

    if (isLoading) {
        return (
            <section id="job-board" className="bg-white pb-24 px-5 flex justify-center pt-12">
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            </section>
        );
    }

    // Dynamically extract unique departments from the Google Sheet data
    const departments = ["View all", ...Array.from(new Set(jobs.map(j => j.department))).filter(Boolean)];

    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              job.location.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDepartment = activeDepartment === "View all" || job.department === activeDepartment;
        
        return matchesSearch && matchesDepartment;
    });

    return (
        <section id="job-board" className="bg-white pb-24 px-5">
            <div className="max-w-4xl mx-auto flex flex-col">
                
                {/* Department Filters (Pills) */}
                <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 hide-scrollbar">
                    {departments.map(dept => (
                        <button
                            key={dept}
                            onClick={() => setActiveDepartment(dept)}
                            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all ${
                                activeDepartment === dept 
                                    ? "bg-blue-600 text-white border border-blue-600" 
                                    : "bg-transparent text-gray-900 border border-gray-300 hover:bg-gray-50"
                            }`}
                        >
                            {dept}
                        </button>
                    ))}
                </div>

                {/* Job List */}
                <div className="flex flex-col border-t border-gray-300">
                    {filteredJobs.map((job) => (
                        <div key={job.slug} className="py-8 border-b border-gray-300">
                            <JobCard 
                                job={job} 
                                isNew={isJobNew(job.postedDate)}
                                salaryRange={job.salary}
                            />
                        </div>
                    ))}
                </div>

                {jobs.length === 0 && (
                    <div className="text-center text-neutral-500 py-12">
                        No open positions available at the moment. Please check back later.
                    </div>
                )}
                {jobs.length > 0 && filteredJobs.length === 0 && (
                    <div className="text-center text-neutral-500 py-12">
                        No positions found in this department.
                    </div>
                )}
            </div>
        </section>
    );
}
