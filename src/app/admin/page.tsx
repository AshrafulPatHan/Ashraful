import * as motion from "motion/react-client"
import Link from "next/link"
import toast from "react-hot-toast"

export default function Admin(){
   return(
   <>
      <div className="flex flex-col items-center h-screen">
         <Link href='/' className="text-amber-600 font-bold text-2xl">Go Home /</Link>
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
            whileHover={{
               scale:1.05
            }}
            transition={{
               duration:0.6,
               // ease:"easeIn",
               // ease:"easeOut",
               // ease:"linear",
               ease:"linear",
            }}
            exit={{rotate:"0deg"}}
            >
               hi
            </motion.div>
         </div>
      </div>
   </>
   )
}
