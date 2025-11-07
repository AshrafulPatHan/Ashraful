"use client";

import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Education from "@/components/home/education";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/Skills";
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="aboutme">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
