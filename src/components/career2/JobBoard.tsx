import JobCard from "./JobCard";
import { Job } from "@/data/jobs";
import { Loader2 } from "lucide-react";

interface JobBoardProps {
    searchQuery: string;
    jobs: Job[];
    isLoading: boolean;
}

export default function JobBoard({ searchQuery, jobs, isLoading }: JobBoardProps) {
    const isJobNew = (postedDateStr: string) => {
        if (!postedDateStr) return false;
        const postedDate = new Date(postedDateStr);
        if (isNaN(postedDate.getTime())) return false;
        
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        return postedDate >= thirtyDaysAgo;
    };

    if (isLoading) {
        return (
            <section id="job-board" className="bg-[#F8F9FA] pb-24 px-5 flex justify-center pt-12">
                <Loader2 className="w-8 h-8 text-[#FF5A1F] animate-spin" />
            </section>
        );
    }

    // Group jobs by department
    const jobsByDepartment = jobs.reduce((acc, job) => {
        if (!acc[job.department]) {
            acc[job.department] = [];
        }
        acc[job.department].push(job);
        return acc;
    }, {} as Record<string, Job[]>);

    return (
        <section id="job-board" className="bg-[#F8F9FA] pb-24 px-5">
            <div className="max-w-4xl mx-auto flex flex-col gap-16">
                {Object.entries(jobsByDepartment).map(([departmentName, departmentJobs]) => {
                    const filteredJobs = departmentJobs.filter(job => 
                        job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        job.location.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                    
                    if (filteredJobs.length === 0) return null;
                    
                    return (
                        <div key={departmentName}>
                            <h2 className="text-xl font-medium text-gray-900 mb-6">{departmentName}</h2>
                            <div className="flex flex-col gap-4">
                                {filteredJobs.map((job, index) => (
                                    <JobCard 
                                        key={job.slug} 
                                        job={job} 
                                        isNew={isJobNew(job.postedDate)}
                                        salaryRange={job.salary}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
                {jobs.length === 0 && (
                    <div className="text-center text-neutral-500 py-12">
                        No open positions available at the moment. Please check back later.
                    </div>
                )}
            </div>
        </section>
    );
}
