"use client"
import Image from "next/image";
import Logo from "@/assets/image/logo.svg";
import snow from "@/assets/image/icons/snowflake.png";
import { Button, DropdownMenu } from "@radix-ui/themes";
import Link from "next/link";

type Props = {
   toggleSnow: () => void;
 };

export default function Navbar({ toggleSnow }: Props) {
   return(
      <div className="bg-gradient-to-r from-black via-gray-900 to-gray-950 backdrop-blur-lg sticky top-0 z-50 px-8 py-2 ">
         <div className="flex flex-row items-center justify-between  text-white ">
            <Link href='/' className="flex flex-row items-center gap-2 cursor-pointer">
               <Image src={Logo} alt="logo" width={40}  />
               <h3 className="text-[5vw] sm:text-xl font-bold ">Ashraful pathan</h3>
            </Link>
            <div className="hidden lg:flex lg:flex-row items-center gap-4">
               <Link href='#home' className="text-lg font-bold transition-all duration-500 hover:text-blue-600 cursor-pointer ">HOME</Link>
               <Link href='#skills' className="text-lg font-bold transition-all duration-500 hover:text-blue-600 cursor-pointer ">SKILLS</Link>
               <Link href='#projects' className="text-lg font-bold transition-all duration-500 hover:text-blue-600 cursor-pointer ">PROJECTS</Link>
               <Link href='#education' className="text-lg font-bold transition-all duration-500 hover:text-blue-600 cursor-pointer ">EDUCATION</Link>
               <Link href='#contact' className="text-lg font-bold transition-all duration-500 hover:text-blue-600 cursor-pointer ">CONTACT</Link>
            </div>
            <div className="flex flex-row items-center gap-2">
               <div>
                  <button 
                  onClick={toggleSnow}
                  className=" cursor-pointer sm:flex items-center gap-[2px] border border-blue-100 rounded-lg py-[2px] text-sm px-2 
                  hover:bg-blue-600 transform-fill duration-500 hidden ">
                     <Image src={snow} width={25} alt="Snow" />
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
                        <DropdownMenu.Item ><Link href='#home'>HOME</Link> </DropdownMenu.Item>
                        <DropdownMenu.Item ><Link href='#skills'>SKILLS</Link></DropdownMenu.Item>
                        <DropdownMenu.Item ><Link href='#projects'>PROJECTS</Link></DropdownMenu.Item>
                        <DropdownMenu.Item ><Link href='#education'>EDUCATION</Link></DropdownMenu.Item>
                        <DropdownMenu.Item ><Link href='#contact'>CONTACT</Link></DropdownMenu.Item>

                        <DropdownMenu.Separator />
                        <DropdownMenu.Item >
                           <button onClick={toggleSnow}>Snowfall</button>
                        </DropdownMenu.Item>
                     </DropdownMenu.Content>
                  </DropdownMenu.Root>
               </div>
            </div>
         </div>
      </div>
   )
}