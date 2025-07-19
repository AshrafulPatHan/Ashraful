"use client"
import Image from "next/image";
import facebookLogo  from "@/assets/image/logo/icons8-facebook.svg";
import twitterLogo  from "@/assets/image/logo/bird.svg";
import linkedinLogo  from "@/assets/image/logo/icons8-linkedin.svg";
import GithubLogo  from "@/assets/image/logo/github.png";
import Ashraful  from "@/assets/image/ashraful.png";
import { Typewriter } from 'react-simple-typewriter';
import * as motion from "motion/react-client"
import RESUME from "./ui/Button_resume";


export default function Hero() {
   return(
      <div className="  py-16 lg:py-32 bg-gradient-to-r from-black via-gray-900 to-gray-950 text-white 
       px-4 pt-20 ">
         <div className="flex flex-col md:flex-row items-center md:items-start gap-1 xl:gap-[140px] justify-center">
            <div className=" w-[90vw] md:w-[640px] flex flex-col items-center md:items-start ">
               <p className="text-sm font-medium text-[#60A5FA] ">Hello!</p>
               <div 
               >
                  <h1 className=" text-[29px] sm:text-[38px] xl:text-[48px] font-bold text-center md:text-start ">Ashraful Pathan</h1>
                  <h2 className="text-2xl xl:text-[30px] font-medium sm:font-bold text-center md:text-start">
                     I am {' '} 
                     <span className="text-blue-400">
                        <Typewriter
                           words={['MernStack Developer', 'Front-End Developer', 'Full-Stack Learner']}
                           loop={true}
                           cursor
                           cursorStyle='|'
                           typeSpeed={70}
                           deleteSpeed={50}
                           delaySpeed={1000}
                        />
                     </span>
                  </h2>
                  <p className="w-[80vw] md:w-auto text-center md:text-start text-lg ">
                  Hi, I am Ashraful Pathan A MernStack developer I can Mack dynamic website and web server ! Are you need any web application?
                  </p>
               </div>
               <div className="flex flex-row items-center gap-3 mt-7">
                  <a href="https://github.com/AshrafulPatHan" 
                  target="_blank" 
                  className=" "
                  rel="noopener noreferrer" >
                     <Image
                     src={GithubLogo}
                     alt="Facebook link"
                     width={30}
                     height={30}
                     
                     />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100090953234693" 
                     target="_blank" 
                     rel="noopener noreferrer" className=" ">
                        <Image
                        src={facebookLogo}
                        alt="Facebook link"
                        width={30}
                        height={30}
                        />
                     </a>
                  <a href="https://x.com/AshrafulPa25233" 
                     target="_blank" 
                     rel="noopener noreferrer" className="">
                        <Image
                        src={twitterLogo}
                        alt="Facebook link"
                        width={30}
                        height={30}
                        />
                     </a>
                  <a href="https://www.linkedin.com/in/ashraful-pathan" 
                     target="_blank" 
                     rel="noopener noreferrer" className=" ">
                        <Image
                        src={linkedinLogo}
                        alt="Facebook link"
                        width={30}
                        height={30}
                        />
                     </a>
               </div>
               <RESUME/>
            </div>
            <motion.div
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.8 }}
               transition={{ duration: 0.4 }}
            >
               <Image src={Ashraful} alt="Ashraful Pathan" 
               className="rounded-full w-[382px] justify-center bg-white "
               />
            </motion.div>  
         </div>
      </div>
   )
}
