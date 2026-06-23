import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { Job } from "@/data/jobs";

// Helper to convert multiline text into an array
const parseMultiline = (text: string | undefined): string[] => {
    if (!text) return [];
    return text.split(/[\n-]+/)
        .map(item => item.trim())
        .filter(item => item.length > 0);
};

export async function getJobsFromSheet(): Promise<Job[]> {
    try {
        const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
        
        if (!process.env.GOOGLE_CLIENT_EMAIL || !privateKey || !process.env.GOOGLE_SHEET_ID) {
            console.error("Missing Google Sheets credentials in .env.local");
            return [];
        }

        const serviceAccountAuth = new JWT({
            email: process.env.GOOGLE_CLIENT_EMAIL,
            key: privateKey,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
        await doc.loadInfo(); 

        const sheet = doc.sheetsByTitle["Form Responses 1"];
        if (!sheet) {
            console.error("Worksheet 'Form Responses 1' not found");
            return [];
        }

        const rows = await sheet.getRows();

        const jobs: Job[] = rows.map(row => {
            return {
                slug: row.get('Slug') || '',
                title: row.get('Position') || '',
                department: row.get('Department') || '',
                experience: row.get('Experience') || '',
                type: row.get('Employment Type') || '',
                location: row.get('Location') || '',
                salary: row.get('Salary') || '',
                postedDate: row.get('Posted Date') || row.get('Timestamp') || '',
                description: row.get('Job Summary') || '',
                responsibilities: parseMultiline(row.get('Key Responsibilities')),
                requirements: parseMultiline(row.get('Required Skills')),
                preferredSkills: parseMultiline(row.get('Preferred Skills')),
                qualifications: parseMultiline(row.get('Qualifications')),
                niceToHave: parseMultiline(row.get('Nice to Have')),
                keywords: row.get('Keywords') || ''
            };
        });

        return jobs.filter(job => job.slug);

    } catch (error) {
        console.error("Error fetching jobs from Google Sheets:", error);
        return [];
    }
}
