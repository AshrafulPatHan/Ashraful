"use client"
import Image from "next/image";
import AsumGamer from "@/assets/image/project/asumGamer.png";
import { Badge, Button } from "@radix-ui/themes";
import * as motion from "motion/react-client"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useRef } from "react";
import gsap from 'gsap';
// import Link from "next/link";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

export default function Royal() {


   // animations for card
   useEffect(() => {
      AOS.init({
        duration: 1600,
        once: true,
      });
    }, []);


    return(
        <div data-aos="flip-left">
            <motion.div 
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-[100vw] sm:w-[394px] h-auto sm:h-[536px] p-4 bg-[#1F2937] rounded-lg 
            hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-shadow duration-300 ">
               <Image src={AsumGamer} alt="image" className=" w-[362px] h-[196px] rounded-lg object-cover  " />
               <div className=" grid grid-cols-4 gap-2 mt-3 mb-4">
                  <Badge size="2" color="cyan"><span className="text-white">Typescript</span></Badge>
                  <Badge size="2" color="cyan"><span className="text-white">React.js</span></Badge>
                  <Badge size="2" color="cyan"><span className="text-white">Node.js</span></Badge>
                  <Badge size="2" color="cyan"><span className="text-white">Express.js</span></Badge>
                  <Badge size="2" color="cyan"><span className="text-white">MongoDB</span></Badge>
                  <Badge size="2" color="cyan"><span className="text-white">Nest.js</span></Badge>
                  <Badge size="2" color="cyan"><span className="text-white">JWT</span></Badge>
                  <Badge size="2" color="cyan"><span className="text-white">Redux</span></Badge>
                  <Badge size="2" color="cyan"><span className="text-white">Tailwind CSS</span></Badge>
                </div>
                <h4 className="text-white text-2xl font-semibold mb-2">Royal Restaurant</h4>
                <p className="text-[#D1D5DB] text-sm mb-4 ">
                Royal Restaurant a modern, full-stack restaurant website crafted to deliver a smooth, visually appealing, and responsive experience for users. The frontend is built with React.js and TypeScript, using Vite for faster builds and optimal performance. Styling is handled with Tailwind CSS, offering a sleek and mobile-friendly layout, while GSAP is used to integrate subtle and engaging animations that bring the interface to life.
                </p>
               <div className="flex flex-row items-center gap-1 sm:gap-3  ">
                  <Button color="gray" variant="solid" >
                     <a href="https://github.com/AshrafulPatHan/Royal_restaurant" target="_blank"  className=" cursor-pointer">Client Repo</a>
                  </Button>
                  <Button color="gray" variant="solid">
                     <a href="https://github.com/AshrafulPatHan/Royal_Restaurant_server" target="_blank"  className=" cursor-pointer">
                        Server Repo
                     </a>
                  </Button>
                  <Button variant="solid">
                     <a href="https://royal-restaurant-ashraful.vercel.app/" target="_blank"  className=" cursor-pointer">Live Link</a>
                  </Button>
               </div>
            </motion.div>
        </div>
    )
}