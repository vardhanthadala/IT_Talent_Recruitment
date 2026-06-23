import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        
        const name = formData.get("name")?.toString() || "";
        const email = formData.get("email")?.toString() || "";
        const phone = formData.get("phone")?.toString() || "";
        const location = formData.get("location")?.toString() || "";
        const linkedin = formData.get("linkedin")?.toString() || "";
        const coverLetter = formData.get("coverLetter")?.toString() || "";
        const jobTitle = formData.get("jobTitle")?.toString() || "";
        const resumeFile = formData.get("resume") as File | null;

        let resumeUrl = "";

        // 1. Upload Resume to Cloudinary if it exists
        if (resumeFile) {
            const arrayBuffer = await resumeFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            const uploadResult = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { resource_type: "auto", folder: "resumes" },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                );
                uploadStream.end(buffer);
            });

            resumeUrl = (uploadResult as any).secure_url;
        }

        // 2. Save to Google Sheets
        const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
        
        if (!process.env.GOOGLE_CLIENT_EMAIL || !privateKey || !process.env.GOOGLE_SHEET_ID) {
            console.error("Missing Google Sheets credentials in .env.local");
            return NextResponse.json({ error: "Server Configuration Error" }, { status: 500 });
        }

        const serviceAccountAuth = new JWT({
            email: process.env.GOOGLE_CLIENT_EMAIL,
            key: privateKey,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
        await doc.loadInfo(); 

        const sheet = doc.sheetsByTitle["Applications"];
        if (!sheet) {
            return NextResponse.json({ error: "Worksheet 'Applications' not found in Google Sheet" }, { status: 404 });
        }

        // Map data to the exact header names in your 'Applications' tab
        await sheet.addRow({
            "Timestamp": new Date().toLocaleString(),
            "Job Title": jobTitle,
            "Full Name": name,
            "Email": email,
            "Phone": phone,
            "Location": location,
            "LinkedIn": linkedin,
            "Cover Letter": coverLetter,
            "Resume Link": resumeUrl
        });

        return NextResponse.json({ success: true, message: "Application submitted successfully" }, { status: 200 });

    } catch (error: any) {
        console.error("Error submitting application:", error);
        return NextResponse.json({ error: error.message || "Failed to submit application" }, { status: 500 });
    }
}
