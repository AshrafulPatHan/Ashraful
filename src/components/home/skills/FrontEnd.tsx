"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Logos
import javaScript from "@/assets/image/logo/icons8-javascript.svg";
import ReactLogo from "@/assets/image/logo/react.svg";
import Next from "@/assets/image/logo/icons8-nextjs.svg";
import Vite from "@/assets/image/logo/icons8-vite.svg";
import typescript from "@/assets/image/logo/icons8-typescript.svg";
import Tailwindcss from "@/assets/image/logo/icons8-tailwindcss.svg";
import Bootstrap from "@/assets/image/logo/icons8-bootstrap.svg";
import Html from "@/assets/image/logo/icons8-html5-96.png";
import Css from "@/assets/image/logo/icons8-css3.svg";

gsap.registerPlugin(ScrollTrigger);

export default function Frontend() {
  const cardRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  // store item refs dynamically
  const setRefs = (el: HTMLDivElement | null) => {
    if (el && !itemsRef.current.includes(el)) itemsRef.current.push(el);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the entire card container
      gsap.from(cardRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      });

      // Animate individual skill boxes
      gsap.from(itemsRef.current, {
        opacity: 0,
        scale: 0.8,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const skills = [
    { src: typescript, label: "Typescript" },
    { src: javaScript, label: "JavaScript" },
    { src: Next, label: "Next.js" },
    { src: ReactLogo, label: "React" },
    { src: Vite, label: "Vite" },
    { src: Tailwindcss, label: "Tailwindcss" },
    { src: Bootstrap, label: "Bootstrap" },
    { src: Css, label: "CSS" },
    { src: Html, label: "HTML" },
  ];

  return (
    <div className="flex justify-center">
      <div
        ref={cardRef}
        className="w-[100vw] sm:w-[405px] h-[452px] p-2 sm:p-6 bg-[#030712] flex flex-col items-center rounded-xl shadow-md transition-all duration-500 hover:-translate-y-2"
      >
        <h4 className="text-[#60A5FA] text-2xl font-bold mb-3">Frontend</h4>

        <div className="grid grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={setRefs}
              className="group w-auto sm:w-[103px] h-[100px] p-4 bg-[#1F2937] hover:bg-[#22182b] flex flex-col items-center justify-center rounded-lg text-white cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95"
            >
              <Image
                src={skill.src}
                width={48}
                height={48}
                className="w-[48px] h-[48px] transition-transform duration-300 group-hover:scale-110"
                alt={skill.label}
              />
              <p className="mt-1 text-sm">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
