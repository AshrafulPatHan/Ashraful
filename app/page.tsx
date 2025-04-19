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
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}
