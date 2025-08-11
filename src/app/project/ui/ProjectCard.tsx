'use client';

import Image from "next/image";
import { Badge, Button } from "@radix-ui/themes";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  title: string;
  image: string;
  badges: string[];
  description: string;
  clientRepo: string;
  serverRepo: string;
  liveLink: string;
  aos?: string;
}

const imageMap: Record<string, any> = {
  asumGamer: require('@/assets/image/project/asumGamer.png'),
  chillGamer: require('@/assets/image/project/chill.png'),
  School: require('@/assets/image/project/school.png'),
  Techno: require('@/assets/image/project/Techno.png'),
  Restaurant: require('@/assets/image/project/Royal.png'),
  Ui: require('@/assets/image/project/pathan_ui.png'),
  Pronoy: require('@/assets/image/project/pronoy.png'),
};

export default function ProjectCard({ 
  title, 
  image, 
  badges, 
  description, 
  clientRepo, 
  serverRepo, 
  liveLink, 
  aos = "fade-up" 
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;

    // Set initial state based on aos prop
    const getInitialState = () => {
      switch (aos) {
        case "fade-up":
          return { y: 50, opacity: 0 };
        case "fade-down":
          return { y: -50, opacity: 0 };
        case "fade-left":
          return { x: 50, opacity: 0 };
        case "fade-right":
          return { x: -50, opacity: 0 };
        case "zoom-in":
          return { scale: 0.8, opacity: 0 };
        case "zoom-out":
          return { scale: 1.2, opacity: 0 };
        default:
          return { y: 50, opacity: 0 };
      }
    };

    // Set initial state
    gsap.set(card, getInitialState());

    // Create scroll trigger animation (replaces AOS)
    gsap.to(card, {
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        end: "bottom 15%",
        once: true,
      }
    });

    // Hover animation (replaces Framer Motion whileHover)
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -8,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Add event listeners
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [aos]);

  return (
    <div
      ref={cardRef}
      className="w-[97vw] lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw] h-auto lg:h-[400px] bg-gradient-to-r from-gray-700 to-gray-950 rounded-3xl mb-8
      flex flex-col-reverse lg:flex-row overflow-hidden shadow-lg cursor-pointer"
    >
      {/* Text Section */}
      <div className="w-full lg:w-[50%] px-5 pt-4 pb-6 flex flex-col justify-between">
        <div>
          <h4 className="text-white text-2xl font-semibold mb-3">{title}</h4>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {badges.map((badge, index) => (
              <Badge key={index} size="2" color="cyan">
                <span className="text-white">{badge}</span>
              </Badge>
            ))}
          </div>
          <p className="text-[#D1D5DB] text-sm mb-6">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button color="gray" variant="solid">
            <a href={clientRepo} target="_blank">Client Repo</a>
          </Button>
          <Button color="gray" variant="solid">
            <a href={serverRepo} target="_blank">Server Repo</a>
          </Button>
          <Button variant="solid">
            <a href={liveLink} target="_blank">Live Link</a>
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-[50%]">
        <Image
          src={imageMap[image]}
          alt={title}
          className="w-full h-auto lg:h-[400px] object-cover rounded-t-3xl lg:rounded-none lg:rounded-r-3xl"
        />
      </div>
    </div>
  );
}




// history 2 


// 'use client';
// import Image from "next/image";
// import { Badge, Button } from "@radix-ui/themes";
// import { motion } from "framer-motion";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";

// interface ProjectCardProps {
//   title: string;
//   image: string;
//   badges: string[];
//   description: string;
//   clientRepo: string;
//   serverRepo: string;
//   liveLink: string;
//   aos?: string;
// }

// const imageMap: Record<string, any> = {
//   asumGamer: require('@/assets/image/project/asumGamer.png'),
//   chillGamer: require('@/assets/image/project/chill.png'),
//   School: require('@/assets/image/project/school.png'),
//   Techno: require('@/assets/image/project/Techno.png'),
//   Restaurant: require('@/assets/image/project/Royal.png'),
//   Ui: require('@/assets/image/project/pathan_ui.png'),
//   Pronoy: require('@/assets/image/project/pronoy.png'),
// };

// export default function ProjectCard({ title, image, badges, description, clientRepo, serverRepo, liveLink, aos = "fade-up" }: ProjectCardProps) {

//   useEffect(() => {
//     AOS.init({ duration: 1600, once: true });
//   }, []);

//   return (
//     <motion.div
//       data-aos={aos}
//       whileHover={{ y: -8 }}
//       transition={{ type: "spring", stiffness: 200, damping: 15 }}
//       className="w-[97vw] lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw] h-auto lg:h-[400px] bg-gradient-to-r from-gray-700 to-gray-950 rounded-3xl mb-8
//       flex flex-col-reverse lg:flex-row overflow-hidden shadow-lg"
//     >
//       {/* Text Section */}
//       <div className="w-full lg:w-[50%] px-5 pt-4 pb-6 flex flex-col justify-between">
//         <div>
//           <h4 className="text-white text-2xl font-semibold mb-3">{title}</h4>
//           <div className="grid grid-cols-4 gap-2 mb-4">
//             {badges.map((badge, index) => (
//               <Badge key={index} size="2" color="cyan">
//                 <span className="text-white">{badge}</span>
//               </Badge>
//             ))}
//           </div>
//           <p className="text-[#D1D5DB] text-sm mb-6">{description}</p>
//         </div>
//         <div className="flex flex-wrap gap-2">
//           <Button color="gray" variant="solid">
//             <a href={clientRepo} target="_blank">Client Repo</a>
//           </Button>
//           <Button color="gray" variant="solid">
//             <a href={serverRepo} target="_blank">Server Repo</a>
//           </Button>
//           <Button variant="solid">
//             <a href={liveLink} target="_blank">Live Link</a>
//           </Button>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="w-full lg:w-[50%]">
//         <Image
//           src={imageMap[image]}
//           alt={title}
//           className="w-full h-auto lg:h-[400px] object-cover rounded-t-3xl lg:rounded-none lg:rounded-r-3xl"
//         />
//       </div>
//     </motion.div>
//   );
// }


// history 1

// 'use client';
// import Image from "next/image";
// import { Badge, Button } from "@radix-ui/themes";
// import { motion } from "framer-motion";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";

// interface ProjectCardProps {
//   title: string;
//   image: string;
//   badges: string[];
//   description: string;
//   clientRepo: string;
//   serverRepo: string;
//   liveLink: string;
//   aos?: string;
// }

// const imageMap: Record<string, any> = {
//   asumGamer: require('@/assets/image/project/asumGamer.png'),
//   chillGamer: require('@/assets/image/project/chill.png'),
//   School: require('@/assets/image/project/school.png'),
//   Techno: require('@/assets/image/project/Techno.png')
// };

// export default function ProjectCard({ title, image, badges, description, clientRepo, serverRepo, liveLink, aos = "fade-up" }: ProjectCardProps) {

//   useEffect(() => {
//     AOS.init({ duration: 1600, once: true });
//   }, []);

//   return (
//     <div data-aos={aos} className="w-full sm:w-[394px] h-auto p-4 bg-[#1F2937] rounded-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-shadow duration-300">
//       <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}>
//         <Image src={imageMap[image]} alt={title} className="w-full h-[196px] rounded-lg object-cover" />
//         <div className="grid grid-cols-3 gap-2 mt-3 mb-4">
//           {badges.map((badge, index) => (
//             <Badge key={index} size="2" color="cyan">
//               <span className="text-white">{badge}</span>
//             </Badge>
//           ))}
//         </div>
//         <h4 className="text-white text-2xl font-semibold mb-2">{title}</h4>
//         <p className="text-[#D1D5DB] text-sm mb-4">{description}</p>
//         <div className="flex flex-wrap gap-2">
//           <Button color="gray" variant="solid">
//             <a href={clientRepo} target="_blank">Client Repo</a>
//           </Button>
//           <Button color="gray" variant="solid">
//             <a href={serverRepo} target="_blank">Server Repo</a>
//           </Button>
//           <Button variant="solid">
//             <a href={liveLink} target="_blank">Live Link</a>
//           </Button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
