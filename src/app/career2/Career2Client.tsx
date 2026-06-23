"use client";

import { useState, useEffect } from "react";
import HeaderSection from "@/components/career2/HeaderSection";
import JobBoard from "@/components/career2/JobBoard";
import { Job } from "@/data/jobs";

export default function Career2Client() {
    const [searchQuery, setSearchQuery] = useState("");
    const [jobs, setJobs] = useState<Job[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchJobs() {
            try {
                const res = await fetch("/api/jobs");
                if (res.ok) {
                    const data = await res.json();
                    setJobs(data);
                }
            } catch (err) {
                console.error("Failed to fetch jobs", err);
            } finally {
                setIsLoading(false);
            }
        }
        fetchJobs();
    }, []);

    return (
        <div className="flex-1 w-full bg-white">
            <HeaderSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <JobBoard searchQuery={searchQuery} jobs={jobs} isLoading={isLoading} />
        </div>
    );
}
