import Image from "next/image";
import Node from "@/assets/image/logo/icons8-node-js.svg";
import Express from "@/assets/image/logo/express.svg";
import MongoDB from "@/assets/image/logo/mongodb.svg";
import JWT from "@/assets/image/logo/icons8-jwt.svg";
import SQL from "@/assets/image/logo/icons8-sql-96.png";
import MONGOOSE from "@/assets/image/logo/mongoose.svg";
import MYSQL from "@/assets/image/logo/icons8-mysql.svg";
import Firebase from "@/assets/image/logo/icons8-firebase.svg";
import Docker from "@/assets/image/logo/icons8-docker.svg";
// import Docker from "@/assets/image/logo/docker.svg";
import * as motion from "motion/react-client"


export default function Backend() {
  return (
    <div>
      <motion.div className="w-[100vw] sm:w-[405px] h-[452px] p-2 sm:p-6 bg-[#030712] flex flex-col items-center rounded-xl  "
      whileHover={{ y: -7 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <h4 className="text-[#60A5FA] text-2xl font-bold mb-3">Backend</h4>
        <div className="grid grid-cols-3 gap-6">
          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={Node}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="Node"
            />
            <p>Node</p>
          </motion.div>

          <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={Express}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="Express"
            />
            <p>Express</p>
          </motion.div>

          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={MongoDB}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="MongoDB"
            />
            <p>MongoDB</p>
          </motion.div>

         <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={MYSQL}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="JWT"
            />
            <p>MySQL</p>
          </motion.div>

         <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={SQL}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="JWT"
            />
            <p>SQL</p>
          </motion.div>

          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={MONGOOSE}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="JWT"
            />
            <p>Mongoose</p>
          </motion.div>

          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center gap-1 rounded-lg text-white ">
            <Image
              src={Firebase}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="Firebase"
            />
            <p>Firebase</p>
          </motion.div>

          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={JWT}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="JWT"
            />
            <p>JWT</p>
          </motion.div>
          
          <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center  rounded-lg text-white ">
            <Image
              src={Docker}
              width={48}
              height={48}
              className="w-[48px] h-[48px] "
              alt="JWT"
            />
            <p>Docker</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
