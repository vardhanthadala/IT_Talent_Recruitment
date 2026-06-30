import { notFound } from "next/navigation";
import { rolesData } from "@/data/what-we-do";
import DynamicHero from "@/components/what-we-do/DynamicHero";
import WhatWeDeliver from "@/components/what-we-do/WhatWeDeliver";
import TechStack from "@/components/what-we-do/TechStack";
import SharedCTA from "@/components/what-we-do/SharedCTA";
import Testimonials from "@/components/what-we-do/Testimonials";
import OtherRoles from "@/components/what-we-do/OtherRoles";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const role = rolesData[resolvedParams.slug];
    
    if (!role) {
        return {
            title: "Role Not Found - Sreehisoft Solutions IT Recruitment",
        };
    }

    return {
        title: `${role.title} | Sreehisoft Solutions IT Recruitment`,
        description: role.shortDescription,
    };
}

export default async function WhatWeDoRolePage({ params }: Props) {
    const resolvedParams = await params;
    const role = rolesData[resolvedParams.slug];

    // If the slug doesn't exist in our data, show a 404 page
    if (!role) {
        notFound();
    }

    return (
        <main className="min-h-[calc(100vh-72px)] bg-white flex flex-col">
            {/* 1. Dynamic Hero Section */}
            <DynamicHero role={role} />

            {/* 2. Detailed Overview & Responsibilities replaced with WhatWeDeliver */}
            <WhatWeDeliver role={role} />

            {/* 3. Technology Stack Grid */}
            <TechStack role={role} />

            {/* Conditionally render Testimonials for IT Training only */}
            {role.category === "IT Training" && (
                <Testimonials />
            )}

            {/* Render other roles in the same category (e.g. Other IT Training programs) */}
            <OtherRoles currentRole={role} />

            {/* 4. Call to Action */}
            <SharedCTA roleTitle={role.title} roleCategory={role.category} />
        </main>
    );
}
