import React from "react";
import {
  Navbar,
  Hero,
  ProjectsSection,
  TechStack,
  ExperienceTimeline,
  ContactSection,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--base)] text-[var(--text-primary)]">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <TechStack />
      <ExperienceTimeline />
      <ContactSection email="emilianoa.aguilar17@gmail.com" />
      <Footer />
    </main>
  );
}
