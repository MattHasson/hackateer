/* eslint-disable react/no-unescaped-entities */
import {FaPlus} from 'react-icons/fa'

export default function Generate() {
  return (
    <main className="min-h-screen flex flex-col mt-[50px] space-y-4 mr-20">
      <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none">
        Problem Statement
      </h2>
      <input className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2"></input>
      <h2 className="pt-5 font-extrabold text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none">
        Hackathon Duration
      </h2>
      <input className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2"></input>

      <div className="pt-5 grid grid-cols-2">
        <div>
          <h4 className="font-extrabold text-md md:text-xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none pb-2 pt-4">
            Team member(s)
          </h4>
          <input className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2"></input>
        </div>
        <div>
          <h4 className="font-extrabold text-md md:text-xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none pb-2 pt-4">
            Skills
          </h4>
          <input className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2"></input>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
<button className="text-sm md:text-lg lg:text-2xl px-4 py-1 lg:px-6 mt-2 transition duration-500 ease-in-out border-2 rounded-lg text-electricCitrus border-electricCitrus hover:bg-electricCitrus hover:text-moonlitIvory hover:scale-110">
        <FaPlus/>
      </button>
      <button className="text-sm md:text-lg lg:text-2xl px-4 py-1 lg:px-6 mt-2 transition duration-500 ease-in-out border-2 rounded-lg text-raspberryFizz border-raspberryFizz hover:bg-raspberryFizz hover:text-moonlitIvory hover:scale-110">
        Get Ideas 🥳
      </button>
      </div>
    </main>
  );
}
