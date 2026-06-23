import { ArrowDown, Users, Briefcase } from "lucide-react";
import Link from "next/link";

interface HeaderSectionProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export default function HeaderSection({ searchQuery, setSearchQuery }: HeaderSectionProps) {
    return (
        <section className="bg-white py-20 px-5 flex flex-col items-center justify-center text-center">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] font-[family-name:var(--font-poppins-custom)] font-bold text-gray-900 leading-[1.08] tracking-[-0.03em] mb-4">
                Join Our Team
            </h1>
            
            <p className="text-base sm:text-lg lg:text-[21px] font-[family-name:var(--font-poppins-custom)] font-light text-gray-500 max-w-2xl mx-auto mb-10 leading-[1.6]">
                Discover open roles where your skills can thrive. Take the next step in your career and help us build the future.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-lg mt-6">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for a role or keyword..." 
                        className="w-full pl-12 pr-6 py-3.5 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 text-base text-gray-900 transition-all bg-white"
                    />
                </div>
                <button 
                    onClick={() => document.getElementById('job-board')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all text-base whitespace-nowrap"
                >
                    Search Jobs
                </button>
            </div>
        </section>
    );
}
