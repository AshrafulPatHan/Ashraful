"use client"
import Image from "next/image";
import Techno from "@/assets/image/project/Techno.png";
import { Badge, Button } from "@radix-ui/themes";
import * as motion from "motion/react-client"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useRef } from "react";
import gsap from 'gsap';
// import Link from "next/link";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

export default function TechnoBlogger() {

   // animations for card
   useEffect(() => {
      AOS.init({
        duration: 1600,
        once: true,
      });
    }, []);


    return(
        <div data-aos="flip-up" >
            <motion.div 
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-[100vw] sm:w-[394px] h-[536px] p-4 bg-[#1F2937] rounded-lg  
            hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-shadow duration-300 ">
               <Image src={Techno} alt="image" className="w-[362px] h-auto sm:h-[196px] rounded-lg object-cover  " />
               <div className=" grid grid-cols-4 gap-2 mt-3 mb-4">
                  <Badge size="2" color="cyan"><span className="text-white">React.js</span></Badge>
                  <Badge size="2" color="cyan"><span className="text-white">Node.js</span></Badge>
                  <Badge size="2" color="cyan"><span className="text-white">Express.js</span></Badge>
                  <Badge size="2" color="cyan"><span className="text-white">MongoDB</span></Badge>
                  <Badge size="2" color="cyan"><span className="text-white">Firebase</span></Badge>
                  <Badge size="2" color="cyan"><span className="text-white">JWT</span></Badge>
                  <Badge size="2" color="cyan"><span className="text-white">Tailwind CSS</span></Badge>
               </div>
               <h4 className="text-white text-2xl font-semibold mb-2">techno blogger</h4>
               <p className="text-[#D1D5DB] text-sm mb-4 ">
               Techno Blogger is a modern, full-stack blogging platform built using React.js, Node.js, Express.js, MongoDB, Firebase, JWT, Redux, and Tailwind CSS. Designed with a fully responsive UI, it works seamlessly on any device, giving users a smooth and engaging experience wherever they are.
               </p>
               <div className="flex flex-row items-center gap-1 sm:gap-3 ">
                  <Button color="gray" variant="solid" >
                     <a href="https://github.com/AshrafulPatHan/Techno-Bloger" target="_blank"  className=" cursor-pointer">Client Repo</a>
                  </Button>
                  <Button color="gray" variant="solid">
                     <a href="https://github.com/AshrafulPatHan/Techno-Server" target="_blank"  className=" cursor-pointer">
                        Server Repo
                     </a>
                  </Button>
                  <Button variant="solid">
                     <a href="https://techno-bloger.web.app/" target="_blank"  className=" cursor-pointer">Live Link</a>
                  </Button>
               </div>
            </motion.div>
        </div>
    )
}