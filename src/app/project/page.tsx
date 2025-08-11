"use client";

// import Navbar from "@/components/Navigation/navbar"
import "./project.css"
import Footer from "@/components/Navigation/footer"
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import snowflake1 from '@/assets/image/icons/icons8-snowflake-50.png'
import snowflake2 from '@/assets/image/icons/snowflake.png'
import PageNave from "@/components/Navigation/PageNave";
import projectData from "./data/projectData.json";
import ProjectCard from "./ui/ProjectCard";
// import Image from "next/image";
// import Techno from "@/assets/image/project/Techno.png";
// import { Badge, Button } from "@radix-ui/themes";

export default function ProjectPage(){
     const [snowfall, setSnowfall] = useState(true);
  const [snowImages, setSnowImages] = useState<HTMLImageElement[]>([])

  useEffect(() => {
    const img1 = new Image();
    img1.src = snowflake1.src; 

    const img2 = new Image();
    img2.src = snowflake2.src;

    setSnowImages([img1, img2]);
  }, []);
   return(
      <div>
         {snowfall && <Snowfall 
         snowflakeCount={150} 
         images={snowImages}
         radius={[5, 19]}
         />} 
         
         <PageNave toggleSnow={() => setSnowfall(!snowfall)} />
         <div className="spacer layer1 flex flex-col items-center justify-center  pb-20 ">
            <div className="flex flex-col items-center py-16  text-white max-w-screen overflow-hidden">
               <h2 className="text-[30px] font-bold text-center">My Best Work</h2>
               <p className="text-xl font-bold text-center text-[#F87171] mb-6">Explore My Projects and work</p>
               <div className="flex flex-col items-center gap-10">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
            </div>
         </div>
         <Footer/>
      </div>
   )
}