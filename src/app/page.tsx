'use client'; // Reste nécessaire car tes composants Hero, About, etc. ont surement de l'interactivité

import { Hero } from "../components/hero";
import { About } from "../components/about";
import { SkillsSection } from "../components/skills";
import { Contact } from "../components/contact";
// Navigation retirée d'ici car elle est dans le layout
import { ProjectsSection } from "../components/project";
import { Achievements } from "../components/achievements";
import { Education } from "../components/education";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <About />
        <SkillsSection />
        <Education />
        <Achievements />
        <ProjectsSection />
        <Contact />
      </main>
    </div>
  );
}