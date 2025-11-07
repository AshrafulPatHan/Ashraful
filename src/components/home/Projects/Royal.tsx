"use client";
import Image from "next/image";
import AsumGamer from "@/assets/image/project/asumGamer.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Royal() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 50,
          rotationY: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={cardRef}>
      <div
        className="w-[100vw] sm:w-[394px] h-auto sm:h-[536px] p-4 bg-[#1F2937] rounded-lg 
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-shadow duration-300"
      >
        <Image
          src={AsumGamer}
          alt="Asum Gamer BD"
          className="w-[362px] h-[196px] rounded-lg object-cover"
        />

        <div className="flex flex-wrap gap-2 mt-3 mb-4">
          {[
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
            "JWT",
            "Redux",
            "Tailwind CSS",
          ].map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#abb7d823] text-white text-xs font-medium rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <h4 className="text-white text-2xl font-semibold mb-2">Asum Gamer BD</h4>
        <p className="text-[#D1D5DB] text-sm mb-4">
          Asum Gamer BD is a dynamic and interactive game review platform built
          using React.js, Node.js, Express.js, MongoDB, Firebase, JWT, Redux,
          and Tailwind CSS. This website is designed for gamers by a gamer —
          giving you a space to share your thoughts, discover new games, and
          connect with fellow gamers.
        </p>

        <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3">
          <a
            href="https://github.com/AshrafulPatHan/Chill-Gamer"
            target="_blank"
            className="bg-gray-600 text-white font-normal py-1 px-2 text-sm rounded hover:bg-gray-700 transition"
          >
            Client Repo
          </a>
          <a
            href="https://github.com/AshrafulPatHan/chill-gamer-server"
            target="_blank"
            className="bg-gray-600 text-white font-normal py-1 px-2 text-sm rounded hover:bg-gray-700 transition"
          >
            Server Repo
          </a>
          <a
            href="https://asum-gamer-bd.vercel.app/"
            target="_blank"
            className="bg-[#3E63DD] text-white font-normal py-1 px-2 text-sm rounded hover:bg-[#3e63ddc2] transition"
          >
            Live Link
          </a>
        </div>
      </div>
    </div>
  );
}