import Frontend from "../skills/Frontend";
import Backend from "../skills/Backend";
import Weekend from "../skills/Weekend";


export default function Skills() {
   return(
      <div className="py-16 px-4 bg-gradient-to-r from-gray-900 to-gray-950 text-white">
         <div className="flex flex-col items-center ">
            <h2 className="text-[36px] font-bold ">My Skills</h2>
            <p className="text-xl font-bold text-[#854CE6] mb-9 mt-2 w-[90vw] sm:w-[500px] text-center ">
               Here are some of my skills on which I have been working on for the past 1 years.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
               {/* Frontend */}
               <Frontend/>
               {/* Backend */}
               <Backend/>
               {/* weekend */}
               <Weekend/>
            </div>
         </div>
      </div>
   )
}