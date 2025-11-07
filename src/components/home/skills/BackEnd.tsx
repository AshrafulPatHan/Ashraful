"use client";
import Image from "next/image";
import Node from "@/assets/image/logo/icons8-node-js.svg";
import Express from "@/assets/image/logo/express.svg";
import MongoDB from "@/assets/image/logo/mongodb.svg";
import JWT from "@/assets/image/logo/icons8-jwt.svg";
import Laravel from "@/assets/image/logo/Laravel-Logo.wine.svg";
import Php from "@/assets/image/logo/php-logo.svg";
import MYSQL from "@/assets/image/logo/icons8-mysql.svg";
import Firebase from "@/assets/image/logo/icons8-firebase.svg";
import Docker from "@/assets/image/logo/icons8-docker.svg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Backend() {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<HTMLDivElement[]>([]);

  // store item refs dynamically
  const setRefs = (el: HTMLDivElement | null) => {
    if (el && !iconRefs.current.includes(el)) iconRefs.current.push(el);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main container scroll animation
      gsap.from(cardRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      });

      // Each skill icon animation
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

  const backendSkills = [
    { name: "Node", img: Node },
    { name: "Express", img: Express },
    { name: "MongoDB", img: MongoDB },
    { name: "MySQL", img: MYSQL },
    { name: "PHP", img: Php },
    { name: "Laravel", img: Laravel },
    { name: "Firebase", img: Firebase },
    { name: "JWT", img: JWT },
    { name: "Docker", img: Docker },
  ];

  return (
    <div
      ref={cardRef}
      className="w-[100vw] sm:w-[405px] h-[452px] p-2 sm:p-6 bg-[#030712] flex flex-col items-center rounded-xl transition-transform duration-300 hover:-translate-y-2"
    >
      <h4 className="text-[#60A5FA] text-2xl font-bold mb-3">Backend</h4>

      <div className="grid grid-cols-3 gap-6">
        {backendSkills.map((skill, i) => (
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
