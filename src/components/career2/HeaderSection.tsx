import { ArrowDown, Users } from "lucide-react";
import Link from "next/link";

interface HeaderSectionProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export default function HeaderSection({ searchQuery, setSearchQuery }: HeaderSectionProps) {
    return (
        <section className="bg-[#F8F9FA] py-20 px-5 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-6 text-blue-600">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
            </div>
            
            <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold text-gray-900 tracking-tight mb-4">
                Open Opportunities
            </h1>
            
            <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base mb-10 leading-relaxed">
                Explore career opportunities that empower you to shape your future and make a meaningful impact.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-lg mt-6">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for a role or keyword..." 
                        className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 text-base text-gray-900 shadow-sm transition-all"
                    />
                </div>
                <button 
                    onClick={() => document.getElementById('job-board')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all text-base whitespace-nowrap shadow-sm hover:shadow-md"
                >
                    Search Jobs
                </button>
            </div>
        </section>
    );
}
