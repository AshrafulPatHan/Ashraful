import Image from "next/image";
import AsumGamer from "@/assets/image/project/asumGamer.png";
import chillGamer from "@/assets/image/project/chill.png";
import Techno from "@/assets/image/project/Techno.png";
import { Badge, Button } from "@radix-ui/themes";


export default function Projects() {
   return(
      <div className="flex flex-col items-center 
      py-16  bg-gradient-to-r from-gray-900 to-gray-950 text-white">
         <div>
            <h2 className="text-[30px] font-bold text-center ">My Best Work</h2>
            <p className="text-xl font-bold text-center text-[#F87171] mb-6 ">Explore My Projects and work</p>
            <div className="flex flex-row items-center gap-10">
               <div className="w-[394px] h-[536px] p-4 bg-[#1F2937] rounded-lg  ">
                  <Image src={AsumGamer} alt="image" className="w-[362px] h-[196px] rounded-lg object-cover  " />
                  <div className=" grid grid-cols-4 gap-2 mt-3 mb-4">
                     <Badge size="2" color="cyan"><span className="text-white">React.js</span></Badge>
                     <Badge size="2" color="cyan"><span className="text-white">Node.js</span></Badge>
                     <Badge size="2" color="cyan"><span className="text-white">Express.js</span></Badge>
                     <Badge size="2" color="cyan"><span className="text-white">MongoDB</span></Badge>
                     <Badge size="2" color="cyan"><span className="text-white">Firebase</span></Badge>
                     <Badge size="2" color="cyan"><span className="text-white">JWT</span></Badge>
                     <Badge size="2" color="cyan"><span className="text-white">Redux</span></Badge>
                     <Badge size="2" color="cyan"><span className="text-white">Tailwind CSS</span></Badge>
                  </div>
                  <h4 className="text-white text-2xl font-semibold mb-2">Asum Gamer BD</h4>
                  <p className="text-[#D1D5DB] text-sm mb-4 ">A game review website</p>
                  <div className="flex flex-row items-center gap-3 ">
                     <Button color="gray" variant="solid" >
                         <a href="https://github.com/AshrafulPatHan/Chill-Gamer" target="_blank"  className=" cursor-pointer">Client Repo</a>
                     </Button>
                     <Button color="gray" variant="solid">
                        <a href="https://github.com/AshrafulPatHan/chill-gamer-server" target="_blank"  className=" cursor-pointer">
                           Server Repo
                        </a>
                     </Button>
                     <Button variant="solid">
                        <a href="https://asum-gamer-bd.vercel.app/" target="_blank"  className=" cursor-pointer">Live Link</a>
                     </Button>
                  </div>
               </div>
               <div className="w-[394px] h-[536px] p-4 bg-[#1F2937] rounded-lg  ">
                  <Image src={Techno} alt="image" className="w-[362px] h-[196px] rounded-lg object-cover  " />
                  <div className=" grid grid-cols-4 gap-2 mt-3 mb-4">
                     <Badge size="2" color="cyan"><span className="text-white">React.js</span></Badge>
                     <Badge size="2" color="cyan"><span className="text-white">Node.js</span></Badge>
                     <Badge size="2" color="cyan"><span className="text-white">Express.js</span></Badge>
                     <Badge size="2" color="cyan"><span className="text-white">MongoDB</span></Badge>
                     <Badge size="2" color="cyan"><span className="text-white">Firebase</span></Badge>
                     <Badge size="2" color="cyan"><span className="text-white">JWT</span></Badge>
                     <Badge size="2" color="cyan"><span className="text-white">Tailwind CSS</span></Badge>
                  </div>
                  <h4 className="text-white text-2xl font-semibold mb-2">techno blogger</h4>
                  <p className="text-[#D1D5DB] text-sm mb-4 ">A Blogging website</p>
                  <div className="flex flex-row items-center gap-3 ">
                     <Button color="gray" variant="solid" >
                         <a href="https://github.com/AshrafulPatHan/Techno-Bloger" target="_blank"  className=" cursor-pointer">Client Repo</a>
                     </Button>
                     <Button color="gray" variant="solid">
                        <a href="https://github.com/AshrafulPatHan/Techno-Server" target="_blank"  className=" cursor-pointer">
                           Server Repo
                        </a>
                     </Button>
                     <Button variant="solid">
                        <a href="https://techno-bloger.web.app/" target="_blank"  className=" cursor-pointer">Live Link</a>
                     </Button>
                  </div>
               </div>
               <div className="w-[394px] h-[536px] p-4 bg-[#1F2937] rounded-lg  ">
                  <Image src={chillGamer} alt="image" className="w-[362px] h-[196px] rounded-lg object-cover  " />
                  <div className=" grid grid-cols-4 gap-2 mt-3 mb-4">
                     <Badge size="2" color="cyan"><span className="text-white">React.js</span></Badge>
                     <Badge size="2" color="cyan"><span className="text-white">Node.js</span></Badge>
                     <Badge size="2" color="cyan"><span className="text-white">Express.js</span></Badge>
                     <Badge size="2" color="cyan"><span className="text-white">MongoDB</span></Badge>
                     <Badge size="2" color="cyan"><span className="text-white">Firebase</span></Badge>
                     <Badge size="2" color="cyan"><span className="text-white">Tailwind CSS</span></Badge>
                  </div>
                  <h4 className="text-white text-2xl font-semibold mb-2">ChillGamer</h4>
                  <p className="text-[#D1D5DB] text-sm mb-4 ">A game review website</p>
                  <div className="flex flex-row items-center gap-3 ">
                     <Button color="gray" variant="solid" >
                         <a href="https://github.com/AshrafulPatHan/Chill-Gamer" target="_blank"  className=" cursor-pointer">Client Repo</a>
                     </Button>
                     <Button color="gray" variant="solid">
                        <a href="https://github.com/AshrafulPatHan/chill-gamer-server" target="_blank"  className=" cursor-pointer">
                           Server Repo
                        </a>
                     </Button>
                     <Button variant="solid">
                        <a href="https://chillgamer-10bf2.web.app/" target="_blank"  className=" cursor-pointer">Live Link</a>
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}