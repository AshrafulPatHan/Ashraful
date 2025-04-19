"use client"
import Contact from "@/components/Home/Contact";
import Education from "@/components/Home/Education";
import Hero from "@/components/Home/hero";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/skills";
import Footer from "@/components/Navigation/footer";
import Navbar from "@/components/Navigation/navbar";
import { useState } from "react";
import Snowfall from "react-snowfall";



export default function Home() {
  const [snowfall, setSnowfall] = useState(false);
  return (
    <div>
    {snowfall && <Snowfall snowflakeCount={150} />} {/* show snowfall if true */}

    <Navbar toggleSnow={() => setSnowfall(!snowfall)} /> {/* pass toggle function */}
    <div id="home">
      <Hero />
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
    <Footer />
  </div>
  );
}
