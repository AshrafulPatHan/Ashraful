import Image from "next/image";
import AsumGamer from "@/assets/image/project/asumGamer.png";
import chillGamer from "@/assets/image/project/chill.png";
import Techno from "@/assets/image/project/Techno.png";
import { Badge, Button } from "@radix-ui/themes";


export default function Projects() {
   return(
      <div className="flex flex-col items-center ">
         <div>
            <h2 className="text-[30px] font-bold text-center ">My Best Work</h2>
            <p className="text-xl font-bold text-center text-[#F87171] ">Explore My Projects and work</p>
            <div>
               <div className="w-[394px] h-[536px] p-4 bg-[#1F2937] rounded-lg  ">
                  <Image src={AsumGamer} alt="" />
                  <div>
                     <Badge color="blue" className="text-white" >In review</Badge>
                     <Badge color="cyan"><span className="text-white">next</span></Badge>
                     <Badge color="gray" variant="solid" highContrast>
                        New
                     </Badge>
                  </div>
                  <h4></h4>
                  <p></p>
                  <div className="flex flex-row items-center gap-6">
                     <Button color="gray" variant="solid">
                        Client Repo
                     </Button>
                     <Button color="gray" variant="solid">
                        Server Repo
                     </Button>
                     <Button variant="solid">Live Link</Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}