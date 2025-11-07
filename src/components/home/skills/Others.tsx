"use client";
import Image from "next/image";
import Git from "@/assets/image/logo/icons8-git.svg";
import GitHub from "@/assets/image/logo/icons8-github.svg";
import Figma from "@/assets/image/logo/icons8-figma.svg";
import Linux from "@/assets/image/logo/icons8-linux-96.png";
import Postman from "@/assets/image/logo/icons8-postman-inc-96.png";
import Python from "@/assets/image/logo/icons8-python.svg";
import Gimp from "@/assets/image/logo/icons8-gimp.svg";
import Flask from "@/assets/image/logo/flask-seeklogo.svg";
import Mongoose from "@/assets/image/logo/mongoose.svg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Other() {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<HTMLDivElement[]>([]);

  // store item refs dynamically
  const setRefs = (el: HTMLDivElement | null) => {
    if (el && !iconRefs.current.includes(el)) iconRefs.current.push(el);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main container animation
      gsap.from(cardRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      });

      // Each icon animation
      gsap.from(iconRefs.current, {
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const skills = [
    { name: "Git", img: Git },
    { name: "GitHub", img: GitHub },
    { name: "Figma", img: Figma },
    { name: "Linux", img: Linux },
    { name: "Postman", img: Postman },
    { name: "Python", img: Python },
    { name: "Mongoose", img: Mongoose },
    { name: "Gimp", img: Gimp },
    { name: "Flask", img: Flask },
  ];

  return (
    <div
      ref={cardRef}
      className="w-[100vw] sm:w-[405px] h-[452px] p-2 sm:p-6 bg-[#030712] flex flex-col items-center rounded-xl transition-transform duration-300 hover:-translate-y-2"
    >
      <h4 className="text-[#60A5FA] text-2xl font-bold mb-3">Other</h4>

      <div className="grid grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            ref={setRefs}
            className="group w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center justify-center rounded-lg text-white transform transition duration-200 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <Image
              src={skill.img}
              width={48}
              height={48}
              alt={skill.name}
              className="w-[48px] h-[48px] mb-1"
            />
            <p className="text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
