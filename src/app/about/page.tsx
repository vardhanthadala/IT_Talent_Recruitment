import Hero from "@/components/about/hero";
import Impact from "@/components/about/impact";
import Services from "@/components/about/services";
import Leaders from "@/components/about/leaders";
import Clients from "@/components/about/clients";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black w-full flex flex-col">
      <Hero />
      <Impact />
      <Services />
      <Leaders />
      <Clients />
    </main>
  );
}
