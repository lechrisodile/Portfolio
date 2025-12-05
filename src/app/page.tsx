'use client';
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { SkillsSection } from "../components/skills";
import { Contact } from "../components/contact";
import { Navigation } from "../components/navigation";
import { ProjectsSection } from "../components/project";
import { Achievements } from "../components/achievements";
import { Education } from "../components/education";


export default function Home() {
  return (

    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        < Education />
        <SkillsSection />
        < Achievements />
        <ProjectsSection />
        <Contact />

      </main>
    </div>
  )
}
