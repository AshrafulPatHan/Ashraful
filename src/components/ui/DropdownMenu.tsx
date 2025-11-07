"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function DropdownMenu({ toggleSnow }: { toggleSnow: () => void }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 👇 বাইরে ক্লিক করলে dropdown বন্ধ হবে
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
      >
        Menu
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-lg shadow-lg">
          <div className="py-1">
            <Link
              href="#home"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
            >
              HOME
            </Link>
            <Link
              href="#skills"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
            >
              SKILLS
            </Link>
            <Link
              href="#projects"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
            >
              PROJECTS
            </Link>
            <Link
              href="#education"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
            >
              EDUCATION
            </Link>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
            >
              CONTACT
            </Link>
          </div>

          <div className="border-t border-gray-200"></div>

          <div className="py-1">
            <button
              onClick={() => {
                toggleSnow();
                setOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
            >
              ❄️ Snowfall
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
