/* eslint-disable react/no-unescaped-entities */
export default function Generate() {
  return (
    <main className="min-h-screen flex flex-col mt-[50px]">
      <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none">
      Problem Statement
      </h2>
            <input className="text-xs font-bold md:text-lg lg:text-2xl text-majesticOrchid"></input>
      <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none">
      Hackathon Duration
      </h2>
            <input className="text-xs font-bold md:text-lg lg:text-2xl text-majesticOrchid"></input>


      <div className="grid grid-cols-2">
        <div>

      <h4 className="font-extrabold text-lg md:text-8xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none">
        Team member(s)
          </h4>
      <input className="text-xs font-bold md:text-lg lg:text-2xl text-majesticOrchid"></input>
        </div>
          <div>
      <h4 className="font-extrabold text-lg md:text-8xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none">Skills</h4>
            <input className="text-xs font-bold md:text-lg lg:text-2xl text-majesticOrchid"></input>
          </div>
      </div>
      <button className="text-sm md:text-lg lg:text-2xl px-4 py-1 lg:px-6 mt-2 transition duration-500 ease-in-out border-2 rounded-md text-raspberryFizz border-raspberryFizz hover:bg-raspberryFizz hover:text-moonlitIvory">
        Get Ideas 🥳
      </button>
    </main>
  );
}
