import Hero from "@/components/Hero";
import EmpowerSection from "@/components/EmpowerSection";
import FeatureGridSection from "@/components/FeatureGridSection";
import ExpertiseSection2 from "@/components/ExpertiseSection2";
import CtaSection from "@/components/CtaSection";
// import ExpertiseSection from "@/components/ExpertiseSection";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-72px)] bg-white flex flex-col">
      <Hero />
      <EmpowerSection />
      <FeatureGridSection />
      {/* <ExpertiseSection /> */}
      <ExpertiseSection2 />
      <CtaSection />
    </main>
  );
}
