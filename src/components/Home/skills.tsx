"use client"
import * as motion from "motion/react-client"
import Frontend from "../skills/Frontend";
import Backend from "../skills/Backend";
import Weekend from "../skills/Weekend";
import { useEffect , useRef } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {


// effect
      useEffect(() => {
         AOS.init({
           duration: 1600,
           once: false,
         });
       }, []);
   return(
      <div className="py-16 px-4 bg-gradient-to-r from-gray-900 to-gray-950 text-white max-w-screen overflow-hidden ">
         <div className="flex flex-col items-center  ">
            <h2 className="text-[36px] font-bold mb-3 ">My Skills</h2>
            <p className="text-xl font-bold text-[#854CE6] mb-9 mt-2 w-[90vw] sm:w-[500px] text-center ">
               Here are some of my skills on which I have been working on for past .
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
               <div className="flex flex-col gap-8 " id="skills-2Card">
                  {/* Frontend */}
                  <div data-aos="fade-up-right">
                     <Frontend/>
                  </div>
                  {/* Backend */}
                  <div data-aos="fade-up">
                     <Backend/>
                  </div>
               </div>
               {/* weekend */}
               <div 
               data-aos="fade-up-left"
               >
                  <Weekend/>
               </div>
            </div>
         </div>
      </div>
   )
}
