import * as motion from "motion/react-client"

export default function Admin(){
   return(
      <div className="flex flex-col items-center h-screen">
         Praktis motion
         <div className="flex flex-col items-center gap-8 mt-11">
            {/* <motion.div 
            className="w-[10vw] bg-amber-300 h-[10vw] rounded-2xl flex flex-col items-center justify-center  "
            initial={{rotate:"0deg"}}
            animate={{
               rotate:"360deg",
               y:[0,-55,0],
               x:[0,55,0]
            }}
            exit={{rotate:"0deg"}}
            transition={{
               duration:0.5,
               ease:"circInOut",
            }}
            >
               hi
            </motion.div> */}
            {/* praktis 2 */}
            <motion.div 
            className="w-[10vw] bg-amber-300 h-[10vw] rounded-2xl flex flex-col items-center justify-center  "
            initial={{rotate:"0deg"}}
            animate={{
               y:[55,0],
               x:[-55,0]
            }}
            exit={{rotate:"0deg"}}
            transition={{
               duration:0.6,
               // ease:"easeIn",
               // ease:"easeOut",
               // ease:"linear",
               ease:"linear",
            }}
            >
               hi
            </motion.div>
         </div>
      </div>
   )
}