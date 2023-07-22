import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaDev } from "react-icons/fa6";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex flex-col items-center text-center mt-11">
      <h1 className="font-extrabold text-5xl md:text-8xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none">
        About us
      </h1>
      <h3>
        Hackateer was created by 3 passionate developes as a project submission
        for the{" "}
        <mark className="bg-transparent text-electricCitrus">
          Hack for Hackers
        </mark>{" "}
        Hackathon
      </h3>

      <article>
        <Image src="" alt="" />
        <h5>Afshan Ahmed Khan</h5>
        <h6>Back-end Developer</h6>
        <section className="flex">
          <Link
            href="https://github.com/redoC-A2k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-moonlitIvory text-6xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/afshan-ak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-moonlitIvory text-6xl" />
          </Link>
          <Link
            href="https://devpost.com/noob-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDev className="text-moonlitIvory text-6xl" />
          </Link>
        </section>
      </article>
    </main>
  );
}
