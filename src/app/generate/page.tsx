/* eslint-disable react/no-unescaped-entities */
export default function Generate() {
  return (
    <main className="min-h-screen flex flex-col mt-[50px] space-y-4 mr-20">
      <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none">
        Problem Statement
      </h2>
      <input className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg"></input>
      <h2 className="pt-5 font-extrabold text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none">
        Hackathon Duration
      </h2>
      <input className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg"></input>

      <div className="pt-5 grid grid-cols-2">
        <div>
          <h4 className="font-extrabold text-md md:text-xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none pb-2 pt-4">
            Team member(s)
          </h4>
          <input className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg"></input>
        </div>
        <div>
          <h4 className="font-extrabold text-md md:text-xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none pb-2 pt-4">
            Skills
          </h4>
          <input className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg"></input>
        </div>
      </div>
      <button className="text-sm md:text-lg lg:text-2xl px-4 py-1 lg:px-6 mt-2 transition duration-500 ease-in-out border-2 rounded-lg text-raspberryFizz border-raspberryFizz hover:bg-raspberryFizz hover:text-moonlitIvory">
        Get Ideas 🥳
      </button>
    </main>
  );
}
