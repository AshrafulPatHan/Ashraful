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
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const weekRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Animate subtitle
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: subtitleRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Frontend card animation
      if (frontRef.current) {
        gsap.fromTo(
          frontRef.current,
          {
            x: -100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: frontRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Backend card animation
      if (backRef.current) {
        gsap.fromTo(
          backRef.current,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: backRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Other card animation
      if (weekRef.current) {
        gsap.fromTo(
          weekRef.current,
          {
            x: 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: weekRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
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
        <h2 ref={titleRef} className="text-[36px] font-bold mb-3">
          My Skills
        </h2>
        <p
          ref={subtitleRef}
          className="text-xl font-bold text-[#854CE6] mb-9 mt-2 w-[90vw] sm:w-[500px] text-center"
        >
          Here are some of my skills on which I have been working on for past.
        </p>

        {/* Cards */}
        <div className="flex flex-col xl:flex-row items-center gap-8">
          <div className="flex flex-col xl:flex-row gap-8" id="skills-2Card">
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