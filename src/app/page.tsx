'use client';

import Link from "next/link";
import {motion} from "framer-motion";

export default function Home() {
  return (
    <motion.main 
      className="min-h-screen flex flex-col justify-center items-center text-center mt-[-50px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="font-extrabold text-5xl md:text-8xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none">
        Hackateer
      </h1>
      <p className="text-xs font-bold md:text-lg lg:text-2xl text-majesticOrchid">
        Your hackathon project idea generator
      </p>
      <Link href="/generate">
        <motion.button 
          className="text-sm md:text-lg lg:text-2xl px-4 py-1 lg:px-6 mt-2 transition duration-500 ease-in-out border-2 rounded-md text-raspberryFizz border-raspberryFizz hover:bg-raspberryFizz hover:text-moonlitIvory hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Use Now 🚀
        </motion.button>
      </Link>
    </motion.main>
  );
}
