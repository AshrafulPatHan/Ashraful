"use client";
import Image from "next/image";
import Link from "next/link";
import snowIcon from "@/assets/image/icons/snowflake.png";
import logo from "@/assets/image/icon.svg";
import { useState } from "react";
import DropdownMenu from "../ui/DropdownMenu";

export default function Navbar() {
  const [snowOn, setSnowOn] = useState(false);

  // ✅ Snow toggle function
  const toggleSnow = () => {
    setSnowOn(!snowOn);
    console.log("Snow:", !snowOn ? "ON" : "OFF");
  };

  return (
    <nav className="bg-[#00000027] text-white sticky top-0 z-50 px-8 py-2 backdrop-blur-lg">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={40} height={40} />
          <h3 className="text-xl font-bold">Ashraful Pathan</h3>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 font-semibold">
          <Link href="#home" className="hover:text-indigo-400 transition">HOME</Link>
          <Link href="#skills" className="hover:text-indigo-400 transition">SKILLS</Link>
          <Link href="#projects" className="hover:text-indigo-400 transition">PROJECTS</Link>
          <Link href="#education" className="hover:text-indigo-400 transition">EDUCATION</Link>
          <Link href="#contact" className="hover:text-indigo-400 transition">CONTACT</Link>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          {/* Snow Button */}
          <button
            onClick={toggleSnow}
            className="hidden sm:flex items-center gap-2 border border-indigo-200 rounded-lg px-3 py-1 text-sm hover:bg-indigo-600 transition"
          >
            <Image src={snowIcon} alt="snow" width={20} height={20} />
            Snowfall
          </button>

          {/* Mobile Dropdown */}
          <div className="lg:hidden">
            <DropdownMenu toggleSnow={toggleSnow} />
          </div>
        </div>
      </div>
    </nav>
  );
}
