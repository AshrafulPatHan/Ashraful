"use client"
import Contact from "@/components/Home/Contact";
import Education from "@/components/Home/Education";
import Hero from "@/components/Home/hero";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/skills";
import Footer from "@/components/Navigation/footer";
import Navbar from "@/components/Navigation/navbar";
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import snowflake1 from '@/assets/image/icons/icons8-snowflake-50.png'
import snowflake2 from '@/assets/image/icons/snowflake.png'


export default function Home() {
  const [snowfall, setSnowfall] = useState(false);
  const [snowImages, setSnowImages] = useState<HTMLImageElement[]>([])

  useEffect(() => {
    const img1 = new Image();
    img1.src = snowflake1.src; 

    const img2 = new Image();
    img2.src = snowflake2.src; 

    setSnowImages([img1, img2]);
  }, []);
  return (
    <div>
      {snowfall && <Snowfall 
      snowflakeCount={150} 
      images={snowImages}
      radius={[5, 19]}
      />} 

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
