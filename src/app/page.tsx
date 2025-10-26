'use client';
import { Navigation } from "@/app/components/navigation/Navigation";
import { Hero } from "@/app/components/hero/Hero";
import { About } from "@/app/components/about/About";
import { Skills } from "@/app/components/skill/Skills";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  );
}
