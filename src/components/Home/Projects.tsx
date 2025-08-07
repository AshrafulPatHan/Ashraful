"use client"
import Image from "next/image";
import AsumGamer from "@/assets/image/project/asumGamer.png";
import chillGamer from "@/assets/image/project/chill.png"; 
import School from "@/assets/image/project/school.png"; 
import Techno from "@/assets/image/project/Techno.png";
import { Badge, Button } from "@radix-ui/themes";
import * as motion from "motion/react-client"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import Link from "next/link";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AsumGamerBD from "./project/AsumGamerBD";
import TechnoBlogger from "./project/TechnoBlogger";
import Kuripara from "./project/Kuripara";
import Royal from "./project/Royal_restaurant";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {

   // animations for card
   useEffect(() => {
      AOS.init({
        duration: 1600,
        once: true,
      });
    }, []);
   
   return(
      <div className="flex flex-col items-center 
      py-16  bg-gradient-to-r from-gray-900 to-gray-950 text-white max-w-screen overflow-hidden">
         <div>
            <h2 className="text-[30px] font-bold text-center ">My Best Work</h2>
            <p className="text-xl font-bold text-center text-[#F87171] mb-6 ">Explore My Projects and work</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
               <div className="flex flex-col gap-8 lg:gap-8" id="project-2Card">
                  {/* project  1*/}
                  <AsumGamerBD/>
                  {/* center card */}
                  <TechnoBlogger/>
               </div>
               <Kuripara/>
               <Royal/>
            </div>
         </div>
         <div className="mt-10">
            <Link href='/project'
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold 
              py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              All Projects
            </Link>
         </div>
      </div>
   )
}