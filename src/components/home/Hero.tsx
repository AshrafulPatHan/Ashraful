"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import facebookLogo from "@/assets/image/logo/facebook.svg";
import twitterLogo from "@/assets/image/logo/bird.svg";
import linkedinLogo from "@/assets/image/logo/linkedin.svg";
import GithubLogo from "@/assets/image/logo/github.png";
import Ashraful from "@/assets/image/ashraful.png";
import RESUME from "../ui/RESUME";

export default function Hero() {
  const textRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP fade-up animation for main content
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // GSAP floating effect for image
    gsap.to(imageRef.current, {
      y: -10,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "easeInOut",
    });
 
    // Typewriter-like effect using GSAP
    const words = [
      "MernStack Developer",
      "Front-End Developer",
      "Full-Stack Learner", 
    ];
    let index = 0;

    const typeAnimation = () => {
      const word = words[index];
      gsap.to(textRef.current, {
        text: word,
        duration: 1.5,
        ease: "none",
        onComplete: () => {
          gsap.to({}, { duration: 1, onComplete: erase });
        },
      });
    };

    const erase = () => {
      gsap.to(textRef.current, {
        text: "",
        duration: 0.8,
        ease: "none",
        onComplete: () => {
          index = (index + 1) % words.length;
          gsap.to({}, { duration: 0.3, onComplete: typeAnimation });
        },
      });
    };

    typeAnimation();
  }, []);

  return (
    <div className="relative py-16 lg:py-32 text-white px-4 pt-20 h-screen ">
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row items-center md:items-start gap-1 xl:gap-[140px] justify-center "
      >
        {/* Left Side */}
        <div className="w-[90vw] md:w-[640px] flex flex-col items-center md:items-start">
          <p className="text-sm font-medium text-[#60A5FA]">Hello!</p>

          <div>
            <h1 className="text-[29px] sm:text-[38px] xl:text-[48px] font-bold text-center md:text-start">
              Ashraful Pathan
            </h1>
            <h2 className="text-2xl xl:text-[30px] font-medium sm:font-bold text-center md:text-start">
              I am{" "}
              <span
                ref={textRef}
                className="text-blue-400 font-semibold inline-block"
              ></span>
              <span className="animate-pulse">|</span>
            </h2>

            <p className="w-[80vw] md:w-auto text-center md:text-start text-lg mt-2">
              Hi, I am Ashraful Pathan — a MERN Stack developer. I can make
              dynamic websites and web servers! Do you need a web application?
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-row items-center gap-3 mt-7">
            <a
              href="https://github.com/AshrafulPatHan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={GithubLogo} alt="GitHub link" width={30} height={30} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100090953234693"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={facebookLogo}
                alt="Facebook link"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://x.com/AshrafulPa25233"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={twitterLogo}
                alt="Twitter link"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ashraful-hasan-safin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={linkedinLogo}
                alt="LinkedIn link"
                width={30}
                height={30}
              />
            </a>
          </div>

          <RESUME />
        </div>

        {/* Right Side (Image) */}
        <div ref={imageRef} className="mt-8 md:mt-0">
          <Image
            src={Ashraful}
            alt="Ashraful Pathan"
            className=" rounded-xl w-[382px] bg-blue-500 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 transition-all duration-500"
          />
        </div>
      </div>
      <div className="absolute w-[40%] h-[40%] bg-blue-400 rounded-b-full top-0 left-[30%] mix-blend-multiply filter blur-2xl z-10 "></div>
    </div>
  );
}
