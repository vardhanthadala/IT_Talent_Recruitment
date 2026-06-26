"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2, User, Building, ChevronDown } from "lucide-react";
import Image from "next/image";

const SERVICES_DATA: Record<string, string[]> = {
    "Development": ["Frontend Engineering", "Backend Engineering", "Full Stack Development", "Mobile App Development", "UI/UX Design"],
    "Testing & QA": ["Automation Testing", "Manual QA Testing", "Performance Testing", "Security Analysis", "SDET Services"],
    "Operations": ["DevOps Services", "Cloud Architecture", "System Administration", "Network Engineering", "IT Support"],
    "AI & Data": ["Data Science", "Machine Learning Engineering", "Data Analysis", "Data Engineering", "Business Intelligence"],
};

export default function ContactClient() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        inquiryType: "",
        serviceCategory: "",
        specificService: "",
        hiringRoles: "",
        message: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const newData = { ...prev, [name]: value };
            if (name === "inquiryType") {
                newData.serviceCategory = "";
                newData.specificService = "";
                newData.hiringRoles = "";
            }
            if (name === "serviceCategory") {
                newData.specificService = "";
            }
            return newData;
        });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (formData.phone && !/^\+?[0-9\s\-\(\)]+$/.test(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number";
        }

        if (!formData.inquiryType) newErrors.inquiryType = "Please select a reason for contact";
        
        if (formData.inquiryType === 'it_services') {
            if (!formData.serviceCategory) newErrors.serviceCategory = "Please select a service area";
            if (formData.serviceCategory && !formData.specificService) newErrors.specificService = "Please select a specific service";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        setSubmitError("");
        
        try {
            const scriptUrl = process.env.NEXT_PUBLIC_CONTACT_SCRIPT_URL;
            
            if (scriptUrl) {
                const submitData = new FormData();
                submitData.append("Date", new Date().toLocaleString());
                submitData.append("Full Name", formData.fullName);
                submitData.append("Email", formData.email);
                submitData.append("Phone", formData.phone);
                submitData.append("Reason", formData.inquiryType);
                submitData.append("Service Area", formData.serviceCategory);
                submitData.append("Specific Service", formData.specificService);
                submitData.append("Hiring Roles", formData.hiringRoles);
                submitData.append("Message", formData.message);

                await fetch(scriptUrl, {
                    method: "POST",
                    body: submitData,
                    mode: 'no-cors' // Google Scripts requires no-cors mode
                });
            } else {
                // Fallback simulation if no script URL is provided yet
                await new Promise(resolve => setTimeout(resolve, 1500));
            }

            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ fullName: "", email: "", phone: "", inquiryType: "", serviceCategory: "", specificService: "", hiringRoles: "", message: "" });
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitError("There was an error sending your message. Please try again later.");
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#f8f9fa] pt-24 pb-24 font-[family-name:var(--font-poppins-custom)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Top Section: Image & Form */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start mb-24">
                    
                    {/* Left: Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 rounded-[32px] overflow-hidden h-[400px] lg:h-[700px] relative shadow-lg"
                    >
                        <Image 
                            src="/images/office_building2.jpg"
                            alt="Sreehisoft Solutions Office"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 lg:pl-12 pt-8 lg:pt-16"
                    >
                        {submitted ? (
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="h-full flex flex-col items-center justify-center text-center p-8 sm:p-12 bg-white"
                            >
                                <motion.div 
                                    initial={{ scale: 0, rotate: -90 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                                    className="mb-8"
                                >
                                    <CheckCircle2 className="w-24 h-24 text-blue-600" strokeWidth={1} />
                                </motion.div>
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                >
                                    <h3 className="text-3xl font-light text-neutral-900 mb-4 tracking-tight">
                                        Inquiry Received
                                    </h3>
                                    
                                    <p className="text-neutral-500 mb-10 max-w-sm mx-auto text-base leading-relaxed">
                                        Thank you for reaching out to <strong className="font-medium text-neutral-900">Sreehisoft Solutions</strong>. Our team is reviewing your details and will contact you shortly.
                                    </p>
                                    
                                    <button 
                                        onClick={() => setSubmitted(false)}
                                        className="text-blue-600 font-medium text-sm flex items-center justify-center mx-auto hover:text-blue-700 transition-colors group"
                                    >
                                        <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                                        Go back to form
                                    </button>
                                </motion.div>
                            </motion.div>
                        ) : (
                            <div className="bg-transparent">
                                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-3 tracking-tight">Let's Get In Touch.</h1>
                                <p className="text-neutral-500 mb-10 text-[15px]">
                                    Or just reach out manually to <a href="mailto:contact@sreehisoft.com" className="text-blue-600 hover:underline">contact@sreehisoft.com</a>.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {/* Full Name */}
                                        <div>
                                            <label htmlFor="fullName" className="block text-xs font-medium text-neutral-500 mb-2 pl-1">Full Name</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <User className="h-4 w-4 text-neutral-400" />
                                                </div>
                                                <input 
                                                    type="text" 
                                                    id="fullName" 
                                                    name="fullName" 
                                                    required
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    className={`w-full bg-white border ${errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-200'} rounded-full py-3.5 pl-11 pr-4 text-sm text-neutral-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder:text-neutral-400`}
                                                    placeholder="Enter your full name..."
                                                />
                                            </div>
                                            {errors.fullName && <p className="text-red-500 text-xs mt-1.5 pl-4">{errors.fullName}</p>}
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-xs font-medium text-neutral-500 mb-2 pl-1">Email Address <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Mail className={`h-4 w-4 ${errors.email ? 'text-red-400' : 'text-neutral-400'}`} />
                                                </div>
                                                <input 
                                                    type="email" 
                                                    id="email" 
                                                    name="email" 
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={`w-full bg-white border ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-200'} rounded-full py-3.5 pl-11 pr-4 text-sm text-neutral-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder:text-neutral-400`}
                                                    placeholder="Enter your email address..."
                                                />
                                            </div>
                                            {errors.email && <p className="text-red-500 text-xs mt-1.5 pl-4">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {/* Phone Number */}
                                        <div>
                                            <label htmlFor="phone" className="block text-xs font-medium text-neutral-500 mb-2 pl-1">Phone Number</label>
                                            <div className={`relative flex items-center bg-white border ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-200'} rounded-full overflow-hidden focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 transition-all`}>
                                                <div className="flex items-center pl-4 pr-3 py-3.5 border-r border-neutral-200 bg-neutral-50">
                                                    <span className="text-lg leading-none mr-2">🇮🇳</span>
                                                    <span className="text-sm font-medium text-neutral-700">+91</span>
                                                </div>
                                                <input 
                                                    type="tel" 
                                                    id="phone" 
                                                    name="phone" 
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full bg-transparent py-3.5 px-4 text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
                                                    placeholder="(000) 000-0000"
                                                />
                                            </div>
                                            {errors.phone && <p className="text-red-500 text-xs mt-1.5 pl-4">{errors.phone}</p>}
                                        </div>

                                        {/* Inquiry Type */}
                                        <div>
                                            <label htmlFor="inquiryType" className="block text-xs font-medium text-neutral-500 mb-2 pl-1">Reason for Contact <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <select 
                                                    id="inquiryType"
                                                    name="inquiryType"
                                                    required
                                                    value={formData.inquiryType}
                                                    onChange={handleChange}
                                                    className={`w-full bg-white border ${errors.inquiryType ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-200'} rounded-full py-3.5 px-4 pr-10 text-sm text-neutral-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all appearance-none cursor-pointer`}
                                                >
                                                    <option value="" disabled>Select a reason...</option>
                                                    <option value="it_services">I need IT Services</option>
                                                    <option value="hire_talent">I want to Hire Talent</option>
                                                    <option value="it_training">For IT Training</option>
                                                    <option value="other">General Inquiry</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                                    <ChevronDown className="h-4 w-4 text-neutral-400" />
                                                </div>
                                            </div>
                                            {errors.inquiryType && <p className="text-red-500 text-xs mt-1.5 pl-4">{errors.inquiryType}</p>}
                                        </div>
                                    </div>

                                    {/* Conditional Render: IT Services */}
                                    {formData.inquiryType === 'it_services' && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            transition={{ duration: 0.3 }}
                                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                                        >
                                            <div>
                                                <label htmlFor="serviceCategory" className="block text-xs font-medium text-neutral-500 mb-2 pl-1">Service Area <span className="text-red-500">*</span></label>
                                                <div className="relative">
                                                    <select 
                                                        id="serviceCategory"
                                                        name="serviceCategory"
                                                        required
                                                        value={formData.serviceCategory}
                                                        onChange={handleChange}
                                                        className={`w-full bg-white border ${errors.serviceCategory ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-200'} rounded-full py-3.5 px-4 pr-10 text-sm text-neutral-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all appearance-none cursor-pointer`}
                                                    >
                                                        <option value="" disabled>Select a service area...</option>
                                                        {Object.keys(SERVICES_DATA).map(category => (
                                                            <option key={category} value={category}>{category}</option>
                                                        ))}
                                                    </select>
                                                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                                        <ChevronDown className="h-4 w-4 text-neutral-400" />
                                                    </div>
                                                </div>
                                                {errors.serviceCategory && <p className="text-red-500 text-xs mt-1.5 pl-4">{errors.serviceCategory}</p>}
                                            </div>

                                            {formData.serviceCategory ? (
                                                <motion.div 
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <label htmlFor="specificService" className="block text-xs font-medium text-neutral-500 mb-2 pl-1">Specific Service <span className="text-red-500">*</span></label>
                                                    <div className="relative">
                                                        <select 
                                                            id="specificService"
                                                            name="specificService"
                                                            required
                                                            value={formData.specificService}
                                                            onChange={handleChange}
                                                            className={`w-full bg-white border ${errors.specificService ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-200'} rounded-full py-3.5 px-4 pr-10 text-sm text-neutral-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all appearance-none cursor-pointer`}
                                                        >
                                                            <option value="" disabled>Select a specific service...</option>
                                                            {SERVICES_DATA[formData.serviceCategory].map(service => (
                                                                <option key={service} value={service}>{service}</option>
                                                            ))}
                                                        </select>
                                                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                                            <ChevronDown className="h-4 w-4 text-neutral-400" />
                                                        </div>
                                                    </div>
                                                    {errors.specificService && <p className="text-red-500 text-xs mt-1.5 pl-4">{errors.specificService}</p>}
                                                </motion.div>
                                            ) : (
                                                <div className="hidden sm:block"></div>
                                            )}
                                        </motion.div>
                                    )}

                                    {/* Conditional Render: Hire Talent */}
                                    {formData.inquiryType === 'hire_talent' && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <label htmlFor="hiringRoles" className="block text-xs font-medium text-neutral-500 mb-2 pl-1">What kind of roles are you looking to fill?</label>
                                            <input 
                                                type="text" 
                                                id="hiringRoles" 
                                                name="hiringRoles" 
                                                value={formData.hiringRoles}
                                                onChange={handleChange}
                                                className="w-full bg-white border border-neutral-200 rounded-full py-3.5 px-4 text-sm text-neutral-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder:text-neutral-400"
                                                placeholder="e.g. Senior Frontend Developer, DevOps Engineer..."
                                            />
                                        </motion.div>
                                    )}

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-xs font-medium text-neutral-500 mb-2 pl-1">Message <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <textarea 
                                                id="message" 
                                                name="message" 
                                                rows={5}
                                                required
                                                maxLength={300}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className={`w-full bg-white border ${errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-200'} rounded-2xl py-4 px-4 text-sm text-neutral-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all resize-none placeholder:text-neutral-400`}
                                                placeholder="Enter your main text here..."
                                            ></textarea>
                                            <div className="absolute bottom-4 right-4 text-[11px] text-neutral-400">
                                                {formData.message.length}/300
                                            </div>
                                        </div>
                                        {errors.message && <p className="text-red-500 text-xs mt-1.5 pl-4">{errors.message}</p>}
                                    </div>

                                    {submitError && (
                                        <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
                                            {submitError}
                                        </div>
                                    )}

                                    {/* Submit */}
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-colors flex items-center justify-center gap-2 mt-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit Form"}
                                        {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                                    </button>
                                </form>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Bottom Section: Info Cards */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 border-t border-neutral-200 pt-16"
                >
                    <div className="mb-12">
                        <span className="inline-block border border-neutral-200 rounded-full px-4 py-1.5 text-xs font-semibold text-neutral-500 tracking-wide uppercase mb-6 bg-white">
                            Reach Out To Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">We'd Love to Hear From You.</h2>
                        <p className="text-neutral-500 text-[15px]">
                            Or just reach out manually to <a href="mailto:contact@sreehisoft.com" className="text-blue-600 hover:underline">contact@sreehisoft.com</a>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {/* Email Support */}
                        <div className="flex flex-col">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                                <Mail className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900 mb-2">Email Support</h3>
                            <p className="text-sm text-neutral-500 mb-4">Our team can respond in real time.</p>
                            <a href="mailto:contact@sreehisoft.com" className="text-blue-600 text-sm font-medium hover:underline">contact@sreehisoft.com</a>
                        </div>

                        {/* Visit Our Office */}
                        <div className="flex flex-col">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                                <Building className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900 mb-2">Visit Our Office</h3>
                            <p className="text-sm text-neutral-500 mb-4">Visit our location in real life.</p>
                            <span className="text-blue-600 text-sm font-medium">Madhapur, Hyderabad, TS</span>
                        </div>

                        {/* Call Us Directly */}
                        <div className="flex flex-col">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                                <Phone className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900 mb-2">Call Us Directly</h3>
                            <p className="text-sm text-neutral-500 mb-4">Available during working hours.</p>
                            <a href="tel:+917780667248" className="text-blue-600 text-sm font-medium hover:underline">+91 77806 67248</a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </main>
    );
}

