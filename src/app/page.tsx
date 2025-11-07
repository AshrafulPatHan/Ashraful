"use client";

import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Education from "@/components/home/education";
import Hero from "@/components/home/Hero";
import Offers from "@/components/home/offers";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/Skills";
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import "../components/home/home.css"


export default function Home() {
  return (
    <div className="bg-[#090813] ">
      <Navbar  />
      <header className="overflow-x-hidden ">
        <div id="home">
          <Hero />
        </div>
      </header>
      <main className="overflow-x-hidden">
        <div id="aboutme">
          <About />
        </div>
        <Offers />
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
