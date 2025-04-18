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
               <div className="w-[405px] h-[452px] p-6 bg-[#030712] flex flex-col items-center rounded-xl  ">
                  <h4 className="text-[#60A5FA] text-2xl font-bold mb-3">Frontend</h4>
                  <div className="grid grid-cols-3 gap-6">
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={javaScript} width={48} height={48} className="w-[48px] h-[48px] " alt="javaScript" />
                        <p>JavaScript</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={typescript} width={48} height={48}  className="w-[48px] h-[48px] " alt="typescript" />
                        <p>Typescript</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={Next} width={48} height={48} className="w-[48px] h-[48px] " alt="Next js" />
                        <p>Next js</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center gap-1 rounded-lg text-white ">
                        <Image src={React} width={48} height={48} className="w-[48px] h-[48px] " alt="React" />
                        <p>React</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={Vite} width={48} height={48} className="w-[48px] h-[48px] " alt="Vite" />
                        <p>Vite</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={Tailwindcss} width={48} height={48} className="w-[48px] h-[48px] " alt="Tailwindcss" />
                        <p>Tailwindcss</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={Bootstrap} width={48} height={48} className="w-[48px] h-[48px] " alt="Bootstrap" />
                        <p>Bootstrap</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={Css} width={48} height={48} className="w-[48px] h-[48px] " alt="Css" />
                        <p>Css</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={Html} width={48} height={48} className="w-[48px] h-[48px] " alt="Html" />
                        <p>Html</p>
                     </div>
                  </div>
               </div>
               {/* Backend */}
               <div className="w-[405px] h-[452px] p-6 bg-[#030712] flex flex-col items-center rounded-xl  ">
                  <h4 className="text-[#60A5FA] text-2xl font-bold mb-3">Backend</h4>
                  <div className="grid grid-cols-3 gap-6">
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={javaScript} width={48} height={48} className="w-[48px] h-[48px] " alt="javaScript" />
                        <p>JavaScript</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={typescript} width={48} height={48}  className="w-[48px] h-[48px] " alt="typescript" />
                        <p>Typescript</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={Next} width={48} height={48} className="w-[48px] h-[48px] " alt="Next js" />
                        <p>Next js</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center gap-1 rounded-lg text-white ">
                        <Image src={React} width={48} height={48} className="w-[48px] h-[48px] " alt="React" />
                        <p>React</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={Vite} width={48} height={48} className="w-[48px] h-[48px] " alt="Vite" />
                        <p>Vite</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={Tailwindcss} width={48} height={48} className="w-[48px] h-[48px] " alt="Tailwindcss" />
                        <p>Tailwindcss</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={Bootstrap} width={48} height={48} className="w-[48px] h-[48px] " alt="Bootstrap" />
                        <p>Bootstrap</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={Css} width={48} height={48} className="w-[48px] h-[48px] " alt="Css" />
                        <p>Css</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={Html} width={48} height={48} className="w-[48px] h-[48px] " alt="Html" />
                        <p>Html</p>
                     </div>
                  </div>
               </div>
               {/* weekend */}
               <div className="w-[405px] h-[452px] p-6 bg-[#030712] flex flex-col items-center rounded-xl  ">
                  <h4 className="text-[#60A5FA] text-2xl font-bold mb-3">Other</h4>
                  <div className="grid grid-cols-3 gap-6">
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={javaScript} width={48} height={48} className="w-[48px] h-[48px] " alt="javaScript" />
                        <p>JavaScript</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={typescript} width={48} height={48}  className="w-[48px] h-[48px] " alt="typescript" />
                        <p>Typescript</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={Next} width={48} height={48} className="w-[48px] h-[48px] " alt="Next js" />
                        <p>Next js</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center gap-1 rounded-lg text-white ">
                        <Image src={React} width={48} height={48} className="w-[48px] h-[48px] " alt="React" />
                        <p>React</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={Vite} width={48} height={48} className="w-[48px] h-[48px] " alt="Vite" />
                        <p>Vite</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={Tailwindcss} width={48} height={48} className="w-[48px] h-[48px] " alt="Tailwindcss" />
                        <p>Tailwindcss</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={Bootstrap} width={48} height={48} className="w-[48px] h-[48px] " alt="Bootstrap" />
                        <p>Bootstrap</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={Css} width={48} height={48} className="w-[48px] h-[48px] " alt="Css" />
                        <p>Css</p>
                     </div>
                     <div className="w-[103px] h-[100px] p-4 bg-[#1F2937] flex flex-col items-center  rounded-lg text-white ">
                        <Image src={Html} width={48} height={48} className="w-[48px] h-[48px] " alt="Html" />
                        <p>Html</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}