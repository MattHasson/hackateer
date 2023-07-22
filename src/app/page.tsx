import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center mt-[-50px]">
      <h1 className="font-extrabold text-5xl md:text-8xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none">
        Hackateer
      </h1>
      <p className="text-xs font-bold md:text-lg lg:text-2xl text-majesticOrchid">
        Your hackathon project idea generator
      </p>
        <Link
          href="/generate"
        >


      <button className="text-sm md:text-lg lg:text-2xl px-4 py-1 lg:px-6 mt-2 transition duration-500 ease-in-out border-2 rounded-md text-raspberryFizz border-raspberryFizz hover:bg-raspberryFizz hover:text-moonlitIvory hover:scale-110">
        Use Now 🚀
      </button>
        </Link>
    </main>
  );
}
