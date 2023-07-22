"use client";

import Image from "next/image";
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
    <nav className="bg-[#050621] min-h-[75px] flex">
      <Image src={logo} alt="Hackteer Logo Icon" />

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
    </nav>
  );
}
