import Image from "next/image";
// import Photo from "@/assets/image/aboutme.jpg";
import * as motion from "motion/react-client"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



export default function AboutMe() {
   return(
      <div
      className="h-auto py-20 bg-gradient-to-b from-gray-900 to-gray-900 text-amber-50 max-w-screen overflow-hidden">
         <h2 className="text-center mb-1 text-4xl font-bold">About Me</h2>
         <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-4 lg:gap-[10px] ">
            <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.4 }}
            >
                <DotLottieReact
                  src="https://lottie.host/cfd698db-417a-4d69-ac4d-54962fa24bff/z2cIjFDYlr.lottie"
                  loop
                  autoplay
                  className="xl:w-[600px] h-[300px] sm:h-[400px] lg:w-[400px] sm:w-[400px] w-[90vw] rounded-full justify-center object-cover "
               />
               {/* <Image src={Photo} alt="photo" className="lg:w-[400px] sm:w-[400px] w-[90vw] rounded-full justify-center object-cover " /> */}
            </motion.div>
            <div className="lg:w-[600px] w-[90vw] ">
               <p className="lg:mt-[90px] mt-0 text-center lg:text-start ">
                  Hi, I am Ashraful Pathan — a React.js Developer. With over a year of hands-on experience, I specialize in building dynamic and responsive web applications using React.js, and I amm also confident working on the backend with Node.js, Express.js, and MongoDB. I am skilled in both JavaScript and TypeScript, and I have also worked with Next.js and Python. I am passionate about learning, creating, and bringing ideas to life through clean and functional code.
               </p>
            </div>
         </div>
      </div>
   )
}
