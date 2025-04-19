import Image from "next/image";
import Logo from "@/assets/image/logo.svg";


export default function Navbar() {
   return(
      <div className="bg-gradient-to-r from-black via-gray-900 to-gray-950 backdrop-blur-lg sticky top-0 z-50 px-8 py-2 ">
         <div className="flex flex-row items-center justify-between  text-white ">
            <div className="flex flex-row items-center gap-2">
               <Image src={Logo} alt="logo" width={40}  />
               <h3 className="text-xl font-bold">Ashraful pathan</h3>
            </div>
            <div className="flex flex-row items-center gap-4">
               <p className="text-lg font-bold transition-all duration-500 hover:text-blue-600 cursor-pointer ">HOME</p>
               <p className="text-lg font-bold transition-all duration-500 hover:text-blue-600 cursor-pointer ">SKILLS</p>
               <p className="text-lg font-bold transition-all duration-500 hover:text-blue-600 cursor-pointer ">PROJECTS</p>
               <p className="text-lg font-bold transition-all duration-500 hover:text-blue-600 cursor-pointer ">EDUCATION</p>
               <p className="text-lg font-bold transition-all duration-500 hover:text-blue-600 cursor-pointer ">CONTACT</p>
            </div>
            <div>
               <button
               className=" hidden lg:flex transition-all duration-500  border 
               border-[#854CE6] text-[#854CE6] hover:bg-[#854CE6] hover:text-white rounded-full px-6 py-2"
               >Github Profile</button>
            </div>
         </div>
      </div>
   )
}