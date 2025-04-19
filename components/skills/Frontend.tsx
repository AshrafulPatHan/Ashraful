import Image from "next/image";
import javaScript from "@/assets/image/logo/icons8-javascript.svg";
import React from "@/assets/image/logo/react.svg";
import Next from "@/assets/image/logo/icons8-nextjs.svg";
import Vite from "@/assets/image/logo/icons8-vite.svg";
import typescript from "@/assets/image/logo/icons8-typescript.svg";
import Tailwindcss from "@/assets/image/logo/icons8-tailwindcss.svg";
import Bootstrap from "@/assets/image/logo/icons8-bootstrap.svg";
import Html from "@/assets/image/logo/icons8-html5-96.png";
import Css from "@/assets/image/logo/icons8-css3.svg";
import * as motion from "motion/react-client"


export default function Frontend() {
  return (
    <div>
      <div className=" w-[100vw] sm:w-[405px] h-[452px] p-2 sm:p-6 bg-[#030712] flex flex-col items-center rounded-xl  ">
        <h4 className="text-[#60A5FA] text-2xl font-bold mb-3">Frontend</h4>
        <div className="grid grid-cols-3 gap-6">
          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className=" w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={javaScript}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="javaScript"
            />
            <p>JavaScript</p>
          </motion.div>
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={typescript}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="typescript"
            />
            <p>Typescript</p>
          </motion.div>
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={Next}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="Next js"
            />
            <p>Next js</p>
          </motion.div>
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center gap-1 rounded-lg text-white ">
            <Image
              src={React}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="React"
            />
            <p>React</p>
          </motion.div>
          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={Vite}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="Vite"
            />
            <p>Vite</p>
          </motion.div>
          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={Tailwindcss}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="Tailwindcss"
            />
            <p>Tailwindcss</p>
          </motion.div>
          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={Bootstrap}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="Bootstrap"
            />
            <p>Bootstrap</p>
          </motion.div>
          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={Css}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="Css"
            />
            <p>Css</p>
          </motion.div>
          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={Html}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="Html"
            />
            <p>Html</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
