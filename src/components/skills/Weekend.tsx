import Image from "next/image";
import Git from "@/assets/image/logo/icons8-git.svg";
import GitHub from "@/assets/image/logo/icons8-github.svg";
import Figma from "@/assets/image/logo/icons8-figma.svg";
import Linux from "@/assets/image/logo/icons8-linux-96.png";
import Postman from "@/assets/image/logo/icons8-postman-inc-96.png";
import python from "@/assets/image/logo/icons8-python.svg";
import redux from "@/assets/image/logo/icons8-redux-96.png";
import fabric from "@/assets/image/logo/fabric.png";
import * as motion from "motion/react-client"


export default function Weekend() {
  return (
    <div>
      <motion.div className="w-[100vw] sm:w-[405px] h-[452px] p-2 sm:p-6 bg-[#030712] flex flex-col items-center rounded-xl  "
      whileHover={{ y: -7 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <h4 className="text-[#60A5FA] text-2xl font-bold mb-3">Other</h4>
        <div className="grid grid-cols-3 gap-6">
          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={Git}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="Git"
            />
            <p>Git</p>
          </motion.div>
          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={GitHub}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="GitHub"
            />
            <p>GitHub</p>
          </motion.div>
          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={Figma}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="Figma"
            />
            <p>Figma</p>
          </motion.div>
          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center gap-1 rounded-lg text-white ">
            <Image
              src={Linux}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="Linux"
            />
            <p>Linux</p>
          </motion.div>
          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center gap-1 rounded-lg text-white ">
            <Image
              src={Postman}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="Postman"
            />
            <p>Postman</p>
          </motion.div>
          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center gap-1 rounded-lg text-white ">
            <Image
              src={python}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="python"
            />
            <p>Python</p>
          </motion.div>
          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center gap-1 rounded-lg text-white ">
            <Image
              src={redux}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="redux"
            />
            <p>Redux</p>
          </motion.div>
          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center gap-1 rounded-lg text-white ">
            <Image
              src={fabric}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="fabric"
            />
            <p>Fabric</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
