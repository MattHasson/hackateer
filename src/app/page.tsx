export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center mt-[-50px]">
      <h1 className="font-extrabold text-[45px] bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none">
        Hackateer
      </h1>
      <p className="font-bold text-[10px] text-majesticOrchid">
        Your hackathon project idea generator
      </p>
      <button className="text-raspberryFizz border-2 rounded-md border-raspberryFizz py-1 px-3 mt-2 transition ease-in-out duration-500 hover:bg-raspberryFizz hover:text-moonlitIvory">
        Use Now 🚀
      </button>
    </main>
  );
}
