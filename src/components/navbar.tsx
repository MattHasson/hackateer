"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";

export default function Navbar() {
  // Functionality for hamburger icon and mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <nav className="bg-[#050621]/80 min-h-[75px] flex justify-between items-center px-4 md:px-20 text-moonlitIvory sticky top-0">
      <Image src={logo} alt="Hackteer Logo Icon" />
    
    {/* Top Navbar */}
          <div className="hidden md:block space-x-10 pr-4">
              <Link
            onClick={toggleMobileMenu}
            href="/"
            className="text-moonlitIvory text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-[#00C2FF] to-[#4D30FF] transition-all ease-in-out duration-500 hover:scale-110"
          >
            Home
          </Link>
          <Link
            onClick={toggleMobileMenu}
            href="/generate"
            className="text-moonlitIvory text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-[#00C2FF] to-[#4D30FF] transition-all ease-in-out duration-500 hover:scale-110"
          >
            Generate
          </Link>
          <Link
            onClick={toggleMobileMenu}
            href="/about"
            className="text-moonlitIvory text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-[#00C2FF] to-[#4D30FF] transition-all ease-in-out duration-500 hover:scale-110"
          >
            About
          </Link>
          <Link
            onClick={toggleMobileMenu}
            href="/contact"
            className="text-moonlitIvory text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-[#00C2FF] to-[#4D30FF] transition-all ease-in-out duration-500 hover:scale-110"
          >
            Contact
          </Link>
    </div>

      {/*Hamburger Button */}
      <div className="flex md:hidden">
        <button
          className="transform transition ease-in-out duration-500 hover:scale-125 group"
          onClick={toggleMobileMenu}
        >
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div
              className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                isMobileMenuOpen ? "translate-x-10" : ""
              } group-hover:bg-aquamarineDream`}
            ></div>
            <div
              className={`bg-white h-[2px] w-7 rounded transform transition-all duration-700 delay-75 ${
                isMobileMenuOpen ? "translate-x-10" : ""
              } group-hover:bg-aquamarineDream`}
            ></div>
            <div
              className={`bg-white h-[2px] w-7 transform transition-all duration-700 origin-left delay-150 ${
                isMobileMenuOpen ? "translate-x-10" : ""
              } group-hover:bg-aquamarineDream`}
            ></div>

            <div
              className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 flex ${
                isMobileMenuOpen ? "translate-x-0  w-12" : "translate-x-10 w-0"
              }`}
            >
              <div
                className={`absolute bg-white h-[2px] w-5 transform transition-all duration-700 delay-300 ${
                  isMobileMenuOpen ? "rotate-45" : "rotate-0"
                } group-hover:bg-aquamarineDream`}
              ></div>
              <div
                className={`absolute bg-white h-[2px] w-5 transform transition-all duration-700 delay-300 ${
                  isMobileMenuOpen ? "-rotate-45" : "rotate-0"
                } group-hover:bg-aquamarineDream`}
              ></div>
            </div>
          </div>
        </button>
      </div>

      {/* Mobile Nav menu*/}
      <div
        className={
          // `transform top-0 right-0 mt-16 w-full fixed h-full bg-black/80 overflow-auto ease-in-out transition-all duration-300 z-30 ${isMobileMenuOpen ? "translate-y-0" : "translate-y-full"}`
          `border-t border-stone-700 transform top-0 right-0 mt-[75px] w-full fixed h-full bg-inherit overflow-auto transition duration-1000 ease-in-out z-10 ${
            isMobileMenuOpen
              ? "translate-x-0 backdrop-blur-[4px]"
              : "translate-x-full backdrop-blur-none"
          }`
        }
      >
        <div className="flex flex-col mx-6 ml-6 mt-8 space-y-6 uppercase">
          <Link
            onClick={toggleMobileMenu}
            href="/"
            className="text-moonlitIvory text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-[#00C2FF] to-[#4D30FF] transition-all ease-in-out duration-500 hover:scale-110"
          >
            Home
          </Link>
          <Link
            onClick={toggleMobileMenu}
            href="/generate"
            className="text-moonlitIvory text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-[#00C2FF] to-[#4D30FF] transition-all ease-in-out duration-500 hover:scale-110"
          >
            Generate
          </Link>
          <Link
            onClick={toggleMobileMenu}
            href="/about"
            className="text-moonlitIvory text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-[#00C2FF] to-[#4D30FF] transition-all ease-in-out duration-500 hover:scale-110"
          >
            About
          </Link>
          <Link
            onClick={toggleMobileMenu}
            href="/contact"
            className="text-moonlitIvory text-2xl font-semibold w-fit bg-clip-text hover:text-transparent bg-gradient-to-br from-[#00C2FF] to-[#4D30FF] transition-all ease-in-out duration-500 hover:scale-110"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
