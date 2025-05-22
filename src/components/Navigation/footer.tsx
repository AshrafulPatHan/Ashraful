import Image from "next/image";
import facebookLogo  from "@/assets/image/logo/icons8-facebook.svg";
import twitterLogo  from "@/assets/image/logo/bird.svg";
import linkedinLogo  from "@/assets/image/logo/icons8-linkedin.svg";
import GithubLogo  from "@/assets/image/logo/github.png";

export default function Footer() {
   return(
      <div className="font-Cinzel h-auto  p-10 bg-gradient-to-r from-black via-gray-900 to-gray-950 backdrop-blur-md ">
         <div className="flex flex-col items-center gap-4 py-12 text-white">
            <h4 className="font-bold text-2xl ">Ashraful Pathan</h4>
            <div className="flex flex-row items-center gap-6 text-xl font-semibold">
               <p>Blog</p>
               <p>projects</p>
               <p className="hidden sm:flex">Admin Panel</p>
               <p className="sm:hidden ">Admin </p>
               <p>code</p>
            </div>
            <div className="flex flex-row items-center gap-3">
               <a href="https://github.com/AshrafulPatHan" 
                target="_blank" 
                className=" "
                rel="noopener noreferrer" >
                    <Image
                    src={GithubLogo}
                    alt="Facebook link"
                    width={30}
                    height={30}
                    
                    />
               </a>
               <a href="https://www.facebook.com/profile.php?id=100090953234693" 
                  target="_blank" 
                  rel="noopener noreferrer" className=" ">
                     <Image
                     src={facebookLogo}
                     alt="Facebook link"
                     width={30}
                     height={30}
                     />
                  </a>
               <a href="https://x.com/AshrafulPa25233" 
                  target="_blank" 
                  rel="noopener noreferrer" className="">
                     <Image
                     src={twitterLogo}
                     alt="Facebook link"
                     width={30}
                     height={30}
                     />
                  </a>
               <a href="https://www.linkedin.com/in/ashraful-pathan" 
                  target="_blank" 
                  rel="noopener noreferrer" className=" ">
                     <Image
                     src={linkedinLogo}
                     alt="Facebook link"
                     width={30}
                     height={30}
                     />
                  </a>
            </div>
            <p className="text-sm mt-3 text-center " > © 2025 Ashraful Pathan. All rights reserved.</p>
         </div>
      </div>
   )
}