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
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
                  <div data-aos="flip-left">
                     <motion.div 
                     whileHover={{ y: -8 }}
                     transition={{ type: "spring", stiffness: 200, damping: 15 }}
                     className="w-[100vw] sm:w-[394px] h-auto sm:h-[536px] p-4 bg-[#1F2937] rounded-lg 
                     hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-shadow duration-300 ">
                        <Image src={AsumGamer} alt="image" className=" w-[362px] h-[196px] rounded-lg object-cover  " />
                        <div className=" grid grid-cols-4 gap-2 mt-3 mb-4">
                           <Badge size="2" color="cyan"><span className="text-white">React.js</span></Badge>
                           <Badge size="2" color="cyan"><span className="text-white">Node.js</span></Badge>
                           <Badge size="2" color="cyan"><span className="text-white">Express.js</span></Badge>
                           <Badge size="2" color="cyan"><span className="text-white">MongoDB</span></Badge>
                           <Badge size="2" color="cyan"><span className="text-white">Firebase</span></Badge>
                           <Badge size="2" color="cyan"><span className="text-white">JWT</span></Badge>
                           <Badge size="2" color="cyan"><span className="text-white">Redux</span></Badge>
                           <Badge size="2" color="cyan"><span className="text-white">Tailwind CSS</span></Badge>
                        </div>
                        <h4 className="text-white text-2xl font-semibold mb-2">Asum Gamer BD</h4>
                        <p className="text-[#D1D5DB] text-sm mb-4 ">
                           Asum Gamer BD is a dynamic and interactive game review platform built using React.js, Node.js, Express.js, MongoDB, Firebase, JWT, Redux, and Tailwind CSS. This website is designed for gamers by a gamer — giving you a space to share your thoughts, discover new games, and connect with fellow gamers.
                        </p>
                        <div className="flex flex-row items-center gap-1 sm:gap-3  ">
                           <Button color="gray" variant="solid" >
                              <a href="https://github.com/AshrafulPatHan/Chill-Gamer" target="_blank"  className=" cursor-pointer">Client Repo</a>
                           </Button>
                           <Button color="gray" variant="solid">
                              <a href="https://github.com/AshrafulPatHan/chill-gamer-server" target="_blank"  className=" cursor-pointer">
                                 Server Repo
                              </a>
                           </Button>
                           <Button variant="solid">
                              <a href="https://asum-gamer-bd.vercel.app/" target="_blank"  className=" cursor-pointer">Live Link</a>
                           </Button>
                        </div>
                     </motion.div>
                  </div>
                  {/* center card */}
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
               </div>
               <div data-aos="flip-right">
                  <motion.div  
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-[100vw] sm:w-[394px] h-[536px] p-4 bg-[#1F2937] rounded-lg 
                  hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-shadow duration-300 ">
                     <Image src={School} alt="image" className="w-[362px] h-auto sm:h-[196px] rounded-lg object-cover  " />
                     <div className=" grid grid-cols-4 gap-2 mt-3 mb-4">
                        <Badge size="2" color="cyan"><span className="text-white">React.js</span></Badge>
                        <Badge size="2" color="cyan"><span className="text-white">Node.js</span></Badge>
                        <Badge size="2" color="cyan"><span className="text-white">Express.js</span></Badge>
                        <Badge size="2" color="cyan"><span className="text-white">MongoDB</span></Badge>
                        <Badge size="2" color="cyan"><span className="text-white">JWT</span></Badge>
                        <Badge size="2" color="cyan"><span className="text-white">Gsap</span></Badge>
                        <Badge size="2" color="cyan"><span className="text-white">Tailwind CSS</span></Badge>
                     </div>
                     <h4 className="text-white text-2xl font-semibold mb-2">School</h4>
                     <p className="text-[#D1D5DB] text-sm mb-4 ">
                        Welcome to Kuripara High School's official website, proudly built by a former student using React.js, Node.js, Express.js, MongoDB, JWT, GSAP, and Tailwind CSS. This site helps students, teachers, and guardians stay updated, connected, and informed about school news, notices, and achievements.
                     </p>
                     <div className="flex flex-row items-center gap-1 sm:gap-3 ">
                        <Button color="gray" variant="solid" >
                           <a href="https://github.com/AshrafulPatHan/kuripara-high-school" target="_blank"  className=" cursor-pointer">Client Repo</a>
                        </Button>
                        <Button color="gray" variant="solid">
                           <a href="https://github.com/AshrafulPatHan/not_for_publick" target="_blank"  className=" cursor-pointer">
                              Server Repo
                           </a>
                        </Button>
                        <Button variant="solid">
                           <a href="https://kuripara-school.ashraful.top/" target="_blank"  className=" cursor-pointer">Live Link</a>
                        </Button>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </div>
   )
}