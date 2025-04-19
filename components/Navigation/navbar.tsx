import Image from "next/image";
import Logo from "@/assets/image/logo.svg";
import snow from "@/assets/image/icons/snowflake.png";
import { Button, DropdownMenu } from "@radix-ui/themes";
import Link from "next/link";



export default function Navbar() {
   return(
      <div className="bg-gradient-to-r from-black via-gray-900 to-gray-950 backdrop-blur-lg sticky top-0 z-50 px-8 py-2 ">
         <div className="flex flex-row items-center justify-between  text-white ">
            <Link href='/' className="flex flex-row items-center gap-2 cursor-pointer">
               <Image src={Logo} alt="logo" width={40}  />
               <h3 className="text-[5vw] sm:text-xl font-bold ">Ashraful pathan</h3>
            </Link>
            <div className="hidden lg:flex lg:flex-row items-center gap-4">
               <p className="text-lg font-bold transition-all duration-500 hover:text-blue-600 cursor-pointer ">HOME</p>
               <p className="text-lg font-bold transition-all duration-500 hover:text-blue-600 cursor-pointer ">SKILLS</p>
               <p className="text-lg font-bold transition-all duration-500 hover:text-blue-600 cursor-pointer ">PROJECTS</p>
               <p className="text-lg font-bold transition-all duration-500 hover:text-blue-600 cursor-pointer ">EDUCATION</p>
               <p className="text-lg font-bold transition-all duration-500 hover:text-blue-600 cursor-pointer ">CONTACT</p>
            </div>
            <div className="flex flex-row items-center gap-2">
               <div>
                  <button className=" cursor-pointer sm:flex items-center gap-[2px] border border-blue-100 rounded-lg py-[1px] text-sm px-2 
                  hover:bg-blue-600 transform-fill duration-500 hidden ">
                     <Image src={snow} width={30} alt="Snow" />
                     Snowfall
                  </button>
               </div>
               <div className="lg:hidden">
                  <DropdownMenu.Root>
                     <DropdownMenu.Trigger>
                        <Button variant="solid" size="2">
                           Options
                           <DropdownMenu.TriggerIcon />
                        </Button>
                     </DropdownMenu.Trigger>
                     <DropdownMenu.Content >
                        <DropdownMenu.Item >HOME</DropdownMenu.Item>
                        <DropdownMenu.Item >SKILLS</DropdownMenu.Item>
                        <DropdownMenu.Item >PROJECTS</DropdownMenu.Item>
                        <DropdownMenu.Item >EDUCATION</DropdownMenu.Item>
                        <DropdownMenu.Item >CONTACT</DropdownMenu.Item>

                        <DropdownMenu.Separator />
                        <DropdownMenu.Item >
                           Snowfall
                        </DropdownMenu.Item>
                     </DropdownMenu.Content>
                  </DropdownMenu.Root>
               </div>
            </div>
         </div>
      </div>
   )
}