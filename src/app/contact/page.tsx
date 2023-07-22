import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex flex-col mt-11 mb-11 space-y-6 text-moonlitIvory">
      <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF]">
        Questions? Comments? Suggestions? <br />
      </h1>
      <h4 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        Feel free to leave your thoughts on the{" "}
        <span className="text-raspberryFizz underline">
          <Link
            href="https://devpost.com/software/hackateer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Devpost
          </Link>
        </span>{" "}
        and/or{" "}
        <span className="text-electricCitrus underline">
          <Link
            href="https://github.com/MFarabi619/Hackateer"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </span>
        !
      </h4>
    </main>
  );
}
