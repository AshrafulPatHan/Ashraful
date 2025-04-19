import Contact from "@/components/Home/Contact";
import Education from "@/components/Home/Education";
import Hero from "@/components/Home/hero";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/skills";
import Footer from "@/components/Navigation/footer";
import Navbar from "@/components/Navigation/navbar";



export default function Home() {
  return (
    <div>
    <Navbar />
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
