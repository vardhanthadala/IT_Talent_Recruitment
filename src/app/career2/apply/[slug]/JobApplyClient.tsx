"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, MapPin, Building2, Paperclip, Check, Clock } from "lucide-react";
import type { Job } from "@/data/jobs";

export default function JobApplyClient({ job }: { job: Job }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        coverLetter: "",
    });
    const [resume, setResume] = useState<File | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const applyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (submitted) {
            // Wait for render, then scroll to the success message so they don't end up at the footer
            setTimeout(() => {
                applyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
        }
    }, [submitted]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setResume(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!resume) {
            alert("Please attach a resume.");
            return;
        }

        setIsSubmitting(true);
        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("location", formData.location);
        data.append("linkedin", formData.linkedin);
        data.append("coverLetter", formData.coverLetter);
        data.append("jobSlug", job.slug);
        data.append("jobTitle", job.title);
        data.append("resume", resume);

        try {
            const res = await fetch("/api/apply", {
                method: "POST",
                body: data,
            });

            if (res.ok) {
                setSubmitted(true);
            } else {
                const errorData = await res.json();
                alert(`Error: ${errorData.error || "Failed to submit application."}`);
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("There was a network error submitting your application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const scrollToApply = () => {
        applyRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="min-h-screen bg-white">
            {/* ─── JOB DETAILS ─── */}
            <section className="border-b border-gray-200">
                <div className="mx-auto w-full max-w-[960px] px-5 md:px-10 pt-32 md:pt-40 pb-12 md:pb-16">
                    {/* Back Link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Link
                            href="/career2"
                            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-10"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to all jobs</span>
                        </Link>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-semibold leading-[1.1em] tracking-[-0.03em] text-neutral-900"
                    >
                        {job.title}
                    </motion.h1>

                    {/* Traits */}
                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-500"
                    >
                        {job.department && (
                            <li className="flex items-center gap-2">
                                <Building2 className="w-4 h-4" />
                                {job.department}
                            </li>
                        )}
                        {job.type && (
                            <li className="flex items-center gap-2">
                                <Briefcase className="w-4 h-4" />
                                {job.type}
                            </li>
                        )}
                        {job.location && (
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                            </li>
                        )}
                    </motion.ul>
                </div>
            </section>

            {/* ─── BODY: Description + Sidebar ─── */}
            <section className="mx-auto w-full max-w-[960px] px-5 md:px-10 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="job-description"
                    >
                        {job.description && (
                            <>
                                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 tracking-[-0.02em] mb-4">
                                    Job Description
                                </h2>
                                <p className="text-neutral-600 leading-[1.7] text-base md:text-lg">{job.description}</p>
                            </>
                        )}
                        
                        {job.experience && (
                            <>
                                <h2 className="mt-10 text-xl md:text-2xl font-semibold text-neutral-900 tracking-[-0.02em]">
                                    Experience
                                </h2>
                                <p className="mt-4 text-neutral-600 leading-[1.7] text-base md:text-lg">
                                    {job.experience}
                                </p>
                            </>
                        )}

                        <h2 className="mt-10 text-xl md:text-2xl font-semibold text-neutral-900 tracking-[-0.02em]">
                            Key Responsibilities
                        </h2>
                        <ul className="mt-4 space-y-3">
                            {job.responsibilities.map((item, i) => (
                                <li key={i} className="flex gap-3 text-neutral-600 leading-[1.6]">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <h2 className="mt-10 text-xl md:text-2xl font-semibold text-neutral-900 tracking-[-0.02em]">
                            Required Skills

                        </h2>
                        <ul className="mt-4 space-y-3">
                            {job.requirements.map((item, i) => (
                                <li key={i} className="flex gap-3 text-neutral-600 leading-[1.6]">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {job.preferredSkills && job.preferredSkills.length > 0 && (
                            <>
                                <h2 className="mt-10 text-xl md:text-2xl font-semibold text-neutral-900 tracking-[-0.02em]">
                                    Preferred Skills
                                </h2>
                                <ul className="mt-4 space-y-3">
                                    {job.preferredSkills.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-neutral-600 leading-[1.6]">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                        {job.qualifications && job.qualifications.length > 0 && (
                            <>
                                <h2 className="mt-10 text-xl md:text-2xl font-semibold text-neutral-900 tracking-[-0.02em]">
                                    Qualifications
                                </h2>
                                <ul className="mt-4 space-y-3">
                                    {job.qualifications.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-neutral-600 leading-[1.6]">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                        {job.niceToHave && job.niceToHave.length > 0 && (
                            <>
                                <h2 className="mt-10 text-xl md:text-2xl font-semibold text-neutral-900 tracking-[-0.02em]">
                                    Nice to Have
                                </h2>
                                <ul className="mt-4 space-y-3">
                                    {job.niceToHave.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-neutral-600 leading-[1.6]">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                        {job.keywords && (
                            <>
                                <h2 className="mt-10 text-xl md:text-2xl font-semibold text-neutral-900 tracking-[-0.02em]">
                                    Keywords
                                </h2>
                                <p className="mt-4 text-neutral-600 leading-[1.7] text-base md:text-lg whitespace-pre-wrap">
                                    {job.keywords}
                                </p>
                            </>
                        )}
                    </motion.div>

                    {/* Sidebar */}
                    <motion.aside
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:sticky lg:top-28 self-start"
                    >
                        <p className="text-sm text-neutral-400">Posted on {job.postedDate}</p>

                        <button
                            onClick={scrollToApply}
                            className="group mt-6 inline-block w-full"
                        >
                            <span className="relative block">
                                <span className="flex items-center justify-center rounded-[100vw] border-[1.5px] border-black bg-black px-6 py-3 text-sm font-medium text-white">
                                    Apply now
                                </span>
                                <span
                                    className="pointer-events-none absolute inset-[-1.5px] flex items-center justify-center rounded-[100vw] border-[1.5px] border-[#d8d8d8] bg-white px-6 py-3 text-sm font-medium text-black [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(150%_at_50%_50%)] transition-[clip-path] duration-400 ease-[cubic-bezier(0.33,1,0.68,1)]"
                                    aria-hidden="true"
                                >
                                    Apply now
                                </span>
                            </span>
                        </button>

                        <div className="mt-8 space-y-3">
                            <a
                                href={`mailto:?subject=Rolva Tech is hiring a ${encodeURIComponent(job.title)}&body=Check out this job: ${typeof window !== "undefined" ? window.location.href : ""}`}
                                className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                Tell a friend
                            </a>
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                                Share on LinkedIn
                            </a>
                        </div>
                    </motion.aside>
                </div>
            </section>

            {/* ─── APPLICATION FORM ─── */}
            <section ref={applyRef} id="apply" className="border-t border-gray-200 bg-neutral-50 scroll-mt-10">
                <div className="mx-auto w-full max-w-[960px] px-5 md:px-10 py-16 md:py-24">
                    {!submitted ? (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-[-0.03em]">
                                Apply here
                            </h2>
                            <p className="mt-3 text-neutral-500 text-sm">
                                Fields marked with <span className="text-red-500">*</span> are required.
                            </p>

                            <form onSubmit={handleSubmit} className="mt-10 space-y-8 max-w-[600px]">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all focus:border-black focus:ring-1 focus:ring-black"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        Email address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all focus:border-black focus:ring-1 focus:ring-black"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        Phone number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all focus:border-black focus:ring-1 focus:ring-black"
                                    />
                                </div>

                                {/* Location */}
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="City, state, etc."
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all focus:border-black focus:ring-1 focus:ring-black"
                                    />
                                </div>

                                {/* LinkedIn */}
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        LinkedIn profile
                                    </label>
                                    <input
                                        type="url"
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all focus:border-black focus:ring-1 focus:ring-black"
                                    />
                                </div>



                                {/* Resume Upload */}
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        Resume <span className="text-red-500">*</span>
                                    </label>
                                    <div
                                        onClick={() => fileInputRef.current?.click()}
                                        className="flex items-center gap-3 w-full rounded-lg border border-dashed border-gray-300 bg-white px-4 py-3 text-sm cursor-pointer hover:border-gray-400 transition-colors"
                                    >
                                        {resume ? (
                                            <>
                                                <Check className="w-4 h-4 text-green-600 shrink-0" />
                                                <span className="text-neutral-700 truncate">{resume.name}</span>
                                            </>
                                        ) : (
                                            <>
                                                <Paperclip className="w-4 h-4 text-neutral-400 shrink-0" />
                                                <span className="text-neutral-400">Attach resume/CV (PDF or DOCX)</span>
                                            </>
                                        )}
                                    </div>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        className="hidden"
                                        required
                                    />
                                </div>

                                {/* Cover Letter */}
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        Cover letter
                                    </label>
                                    <textarea
                                        name="coverLetter"
                                        rows={5}
                                        value={formData.coverLetter}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all focus:border-black focus:ring-1 focus:ring-black resize-none"
                                        placeholder="Tell us why you're a great fit for this role..."
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`group relative inline-block ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    <span className="relative block">
                                        <span className="flex items-center justify-center rounded-[100vw] border-[1.5px] border-black bg-black px-8 py-3.5 text-sm font-medium text-white">
                                            {isSubmitting ? "Submitting..." : "Submit application"}
                                        </span>
                                        <span
                                            className="pointer-events-none absolute inset-[-1.5px] flex items-center justify-center rounded-[100vw] border-[1.5px] border-[#d8d8d8] bg-white px-8 py-3.5 text-sm font-medium text-black [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(150%_at_50%_50%)] transition-[clip-path] duration-400 ease-[cubic-bezier(0.33,1,0.68,1)]"
                                            aria-hidden="true"
                                        >
                                            {isSubmitting ? "Submitting..." : "Submit application"}
                                        </span>
                                    </span>
                                </button>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center justify-center text-center py-12 min-h-[50vh]"
                        >
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                                <Check className="w-8 h-8 text-green-600" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-[-0.03em]">
                                Your application has been sent!
                            </h2>
                            <p className="mt-4 text-neutral-500 max-w-md">
                                You can expect to receive a confirmation email shortly. Thank you for your interest in joining Rolva Tech.
                            </p>
                            <Link
                                href="/career2"
                                className="mt-8 group inline-block"
                            >
                                <span className="relative block">
                                    <span className="flex items-center justify-center rounded-[100vw] border-[1.5px] border-black bg-black px-6 py-3 text-sm font-medium text-white">
                                        Back to Careers
                                    </span>
                                    <span
                                        className="pointer-events-none absolute inset-[-1.5px] flex items-center justify-center rounded-[100vw] border-[1.5px] border-[#d8d8d8] bg-white px-6 py-3 text-sm font-medium text-black [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(150%_at_50%_50%)] transition-[clip-path] duration-400 ease-[cubic-bezier(0.33,1,0.68,1)]"
                                        aria-hidden="true"
                                    >
                                        Back to Careers
                                    </span>
                                </span>
                            </Link>
                        </motion.div>
                    )}
                </div>
            </section>
        </main>
    );
}
