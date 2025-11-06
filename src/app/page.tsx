'use client';
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Skills } from "../components/skills";
import { Contact } from "../components/contact";
import { Navigation } from "../components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
