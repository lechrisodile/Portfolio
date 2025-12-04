'use client';
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { SkillsSection } from "../components/skills";
import { Contact } from "../components/contact";
import { Navigation } from "../components/navigation";
import { ProjectsSection } from "../components/project";
import { AchievementsSection } from "../components/achievements";
import { EducationSection } from "../components/EducationSection";
// import { Education } from "../components/education";
import Education from "../components/education";

export default function Home() {
  return (

    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <EducationSection />
        <SkillsSection />
        < AchievementsSection />
        <ProjectsSection />
        <Contact />
        < Education />
      </main>
    </div>
  )
}
