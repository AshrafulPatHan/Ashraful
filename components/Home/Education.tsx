import Image from "next/image";
import tolaram from "@/assets/image/tolaram.png";


export default function Education() {
   return(
      <div className="py-16  bg-gradient-to-b from-gray-900 to-gray-900 text-white">
         <div className="flex flex-col items-center">
            <h2 className="text-[30px] font-bold mb-1  ">Education and Training</h2>
            <p className="text-lg font-medium text-[#9CA3AF] mb-12  text-center">My education has been a journey of self-discovery and growth. Here are my educational details.</p>
            <div>
               <div className="flex flex-col gap-4 w-[100vw] lg:w-[900px] p-6 bg-[#030712] text-white rounded-lg  ">
                  <div className="flex flex-row items-center gap-4">
                     <div>
                        <Image src={tolaram} alt="Hsc" className="w-[74px] h-[74px]  " />
                     </div>
                     <div>
                        <h3 className="font-bold text-[20px] ">government tolaram college</h3>
                        <p className="font-bold text-[18px] ">Bander, Narayanganj</p>
                        <p className="font-bold text-[16px] text-[#818CF8] ">Hsc,Science</p>
                        <p className="text-[14px] text-[#6B7280] ">2024-Present</p>
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <h4>Grade: Pending GPA</h4>
                     <p>Currently pursuing a Diploma in Engineering in Computer Science and Technology at Bhola Polytechnic Institute. I have successfully completed 6 out of 8 semesters, gaining expertise in courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Microcontroller Programming, and Sensor Technologies. Additionally, I am proficient in tools like MS Word and Excel.</p>
                     <p>As an active member of the Target Programmer Bhola Polytechnic Institute, I collaborate on innovative projects with a team of skilled developers, enhancing my technical and teamwork skills.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}