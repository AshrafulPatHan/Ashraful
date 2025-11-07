"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Other from "./skills/Others";
import Backend from "./skills/BackEnd";
import Frontend from "./skills/FrontEnd";


gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const weekRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // animate "My Skills" header
      gsap.from(".skills-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Frontend card animation
      gsap.from(frontRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: frontRef.current,
          start: "top 85%",
        },
      });

      // Backend card animation
      gsap.from(backRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: backRef.current,
          start: "top 85%",
        },
      });

      // Other card animation
      gsap.from(weekRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: weekRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-16 px-4 bg-gradient-to-r from-gray-900 to-gray-950 text-white max-w-screen overflow-hidden"
    >
      <div className="flex flex-col items-center">
        {/* Title */}
        <h2 className="skills-title text-[36px] font-bold mb-3">
          My Skills
        </h2>
        <p className="text-xl font-bold text-[#854CE6] mb-9 mt-2 w-[90vw] sm:w-[500px] text-center">
          Here are some of my skills on which I have been working on for past.
        </p>

        {/* Cards */}
        <div className="flex flex-col xl:flex-row items-center gap-8">
          <div className="flex flex-col gap-8" id="skills-2Card">
            {/* Frontend */}
            <div ref={frontRef}>
              <Frontend />
            </div>
            {/* Backend */}
            <div ref={backRef}>
              <Backend />
            </div>
          </div>

          {/* Other */}
          <div ref={weekRef}>
            <Other />
          </div>
        </div>
      </div>
    </div>
  );
}
