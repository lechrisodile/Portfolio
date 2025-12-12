'use client'; // Reste nécessaire car tes composants Hero, About, etc. ont surement de l'interactivité

import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { ProjectsSection } from "../components/project";
import { Achievements } from "../components/achievements";
import { Education } from "../components/education";
import { HardSkills } from "@/components/hardSkills";
import { SoftSkills } from "@/components/softskills";
import { Skills } from "@/components/hard&softskills";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <About />
        {/* <HardSkills />
        <SoftSkills /> */}
        <Skills />
        <Education />
        <Achievements />
        <ProjectsSection />
        <Contact />
      </main>
    </div>
  );
}