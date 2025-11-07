"use client";
import Image from "next/image";
import tolaram from "@/assets/image/tolaram.png";
import Programming from "@/assets/image/programing-hero.jpeg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const hscRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate HSC Card
    if (hscRef.current) {
      gsap.fromTo(
        hscRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: hscRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate Programming Hero Card
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Hover effect replacement for motion whileHover
    const handleMouseEnter = (el: HTMLElement) => {
      gsap.to(el, { y: -8, duration: 0.3, ease: "power3.out" });
    };

    const handleMouseLeave = (el: HTMLElement) => {
      gsap.to(el, { y: 0, duration: 0.3, ease: "power3.out" });
    };

    const hoverElements = [
      { ref: hscRef, handlers: { enter: null as any, leave: null as any } },
      { ref: heroRef, handlers: { enter: null as any, leave: null as any } }
    ];

    hoverElements.forEach((item) => {
      if (item.ref.current) {
        item.handlers.enter = () => handleMouseEnter(item.ref.current!);
        item.handlers.leave = () => handleMouseLeave(item.ref.current!);
        
        item.ref.current.addEventListener("mouseenter", item.handlers.enter);
        item.ref.current.addEventListener("mouseleave", item.handlers.leave);
      }
    });

    // Cleanup
    return () => {
      hoverElements.forEach((item) => {
        if (item.ref.current) {
          item.ref.current.removeEventListener("mouseenter", item.handlers.enter);
          item.ref.current.removeEventListener("mouseleave", item.handlers.leave);
        }
      });
    };
  }, []);

  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 to-gray-900 text-white max-w-screen overflow-hidden">
      <div className="flex flex-col items-center">
        <h2 className="text-[30px] font-bold mb-1">Education and Training</h2>
        <p className="text-lg font-medium text-[#9CA3AF] mb-12 text-center">
          My education has been a journey of self-discovery and growth. Here are my educational details.
        </p>

        <div className="flex flex-col items-center gap-14">
          {/* HSC Card */}
          <div ref={hscRef}>
            <div className="flex flex-col gap-4 w-[100vw] lg:w-[900px] p-6 bg-[#030712] text-white rounded-lg 
            hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-shadow duration-300">
              <div className="flex flex-row items-center gap-4">
                <div>
                  <Image src={tolaram} alt="Hsc" className="w-[74px] h-[74px]" />
                </div>
                <div>
                  <h3 className="font-bold text-[20px]">government tolaram college</h3>
                  <p className="font-bold text-[18px]">Bander, Narayanganj</p>
                  <p className="font-bold text-[16px] text-[#818CF8]">Hsc,Science</p>
                  <p className="text-[14px] text-[#6B7280]">2024-Present</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-green-400">Grade: Pending GPA</h4>
                <p>
                  I am currently studying in the Science Department at Government Tolaram College in Bandar, Narayanganj, Bangladesh. I achieved a GPA of 4.94 in my SSC exams. My dream is to study Physics after completing my HSC, as I have a deep interest in the subject. I have been passionate about programming since I was 14 years old, and it has always been my favorite hobby. I enjoy learning and exploring new things in both science and technology.
                </p>
              </div>
            </div>
          </div>

          {/* Programming Hero Card */}
          <div ref={heroRef}>
            <div className="flex flex-col gap-4 w-[100vw] lg:w-[900px] p-6 bg-[#030712] text-white rounded-lg 
            hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-shadow duration-300">
              <div className="flex flex-row items-center gap-4">
                <div>
                  <Image src={Programming} alt="Hsc" className="w-[74px] h-[74px]" />
                </div>
                <div>
                  <h3 className="font-bold text-[20px]">programming hero</h3>
                  <p className="font-bold text-[18px]">programming-hero.com/</p>
                  <p className="font-bold text-[16px] text-[#818CF8]">TRAINING</p>
                  <p className="text-[14px] text-[#6B7280]">2024-2025</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-green-400">course is completed with certificate</h4>
                <p>
                  I found an amazing course on Programming Hero (Batch 10, 2024-2025). I learned React.js, Next.js, JavaScript, HTML, CSS, and Tailwind CSS. The course is really great, and the mentor, Jhankar Mahbub, is an excellent trainer. He explains everything clearly, making complex topics easy to understand. The support team is also fantastic, offering 24/7 assistance whenever needed. This course is a perfect choice for anyone who wants to dive into web development with hands-on experience!
                </p>
                <p>
                  I give the course 5 star. I learned many things from this course.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}