import { Metadata } from "next";
import { notFound } from "next/navigation";
import { industriesData } from "@/data/industries";
import HeroIndustry from "./_components/HeroIT";
import TechLandscape from "./_components/TechLandscape";
import SolutionsShowcase from "./_components/SolutionsShowcase";
import CtaSection from "./_components/CtaSectionIT";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const data = industriesData[resolvedParams.slug as keyof typeof industriesData];
  
  if (!data) {
    return {
      title: "Industry Not Found | Sreehisoft Solutions",
    };
  }

  return {
    title: data.meta.title,
    description: data.meta.description,
  };
}

export default async function IndustryPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = industriesData[slug as keyof typeof industriesData];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <HeroIndustry data={data.hero} />
      <TechLandscape data={data.landscape} />
      <SolutionsShowcase data={data.solutions} />
      <CtaSection data={data.cta} />
    </main>
  );
}
