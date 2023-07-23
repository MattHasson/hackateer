'use client';

import Link from "next/link";
import {motion} from "framer-motion";

export default function Contact() {
  return (
    <motion.main 
      className="flex flex-col mt-11 mb-11 space-y-6 text-moonlitIvory"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF]">
        Questions? Comments? Suggestions? <br />
      </h1>
      <h4 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        Feel free to leave your thoughts on the{" "}
        <motion.span 
          className="text-raspberryFizz underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href="https://devpost.com/software/hackateer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Devpost
          </Link>
        </motion.span>{" "}
        and/or{" "}
        <motion.span 
          className="text-electricCitrus underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="https://github.com/MFarabi619/Hackateer"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </motion.span>
        !
      </h4>
    </motion.main>
  );
}
