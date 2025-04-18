import Frontend from "../skills/Frontend";
import Backend from "../skills/Backend";
import Weekend from "../skills/Weekend";


export default function Skills() {
   return(
      <div>
         <div className="flex flex-col items-center ">
            <h2 className="text-[36px] font-bold ">My Skills</h2>
            <p className="text-xl font-bold text-[#854CE6] mb-9 mt-2 w-[500px] text-center ">
               Here are some of my skills on which I have been working on for the past 1 years.
            </p>
            <div className="flex flex-row items-center gap-8">
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