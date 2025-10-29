'use client'
import Image from "next/image";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Skills } from "../components/skills";
import { Contact } from "../components/contact";
import { Navigation } from "../components/navigation";
import { use } from "react";

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
