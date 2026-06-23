import { Metadata } from "next";
import { notFound } from "next/navigation";
import JobApplyClient from "./JobApplyClient";
import { getJobsFromSheet } from "@/lib/jobs";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const jobs = await getJobsFromSheet();
    const job = jobs.find(j => j.slug === slug);
    if (!job) return { title: "Job Not Found | Sreehisoft Solutions" };
    return {
        title: `${job.title} — Apply | Sreehisoft Solutions`,
        description: `Apply for the ${job.title} position at Sreehisoft Solutions. ${job.type} · ${job.location}`,
    };
}

export default async function ApplyPage({ params }: PageProps) {
    const { slug } = await params;
    const jobs = await getJobsFromSheet();
    const job = jobs.find(j => j.slug === slug);
    if (!job) notFound();
    return <JobApplyClient job={job} />;
}
