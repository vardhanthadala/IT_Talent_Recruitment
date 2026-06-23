import { NextResponse } from "next/server";
import { getJobsFromSheet } from "@/lib/jobs";

export async function GET() {
    try {
        const jobs = await getJobsFromSheet();
        return NextResponse.json(jobs);
    } catch (error) {
        console.error("Error fetching jobs API:", error);
        return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
    }
}
