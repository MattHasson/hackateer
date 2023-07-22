/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

export default function Generate() {
  const [formCount, setFormCount] = useState(0);

  const addForm = () => {
    setFormCount(formCount + 1);
  };

  const deleteForm = () => {
    if (formCount > 0) {
      setFormCount(formCount - 1);
    }
  };

  const forms = Array.from({ length: formCount }, (_, i) => (
    <div key={i} className="pt-5 grid grid-cols-2">
      <div>
        <input
          className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2"
          placeholder={`Hacker ${i + 2}`}
        />
      </div>
      <div>
        <input
          className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2"
          placeholder="Python, HTML, CSS, JS..."
        />
      </div>
    </div>
  ));

  return (
    <main className="min-h-screen flex flex-col mt-[50px] space-y-4 mr-20">
      <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none">
        Problem Statement
      </h2>
      <input
        className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2"
        placeholder="What's your topic/challenge?"
      ></input>
      <h2 className="pt-5 font-extrabold text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none">
        Hackathon Duration
      </h2>
      <input
        className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2"
        placeholder="Enter the starting and ending date and time."
      ></input>

      <div className="pt-5 grid grid-cols-2">
        <div>
          <h4 className="font-extrabold text-md md:text-xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none pb-2 pt-4">
            Team member(s)
          </h4>
          <input
            className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2"
            placeholder="Hacker 1"
          ></input>
        </div>
        <div>
          <h4 className="font-extrabold text-md md:text-xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none pb-2 pt-4">
            Skills
          </h4>
          <input
            className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2"
            placeholder="Python, HTML, CSS, JS..."
          ></input>
        </div>
      </div>
      {forms}
      <div className="flex justify-center space-x-4">
        <button
          className="text-sm md:text-lg lg:text-2xl px-4 py-1 lg:px-6 mt-2 transition duration-500 ease-in-out border-2 rounded-lg text-electricCitrus border-electricCitrus hover:bg-electricCitrus hover:text-moonlitIvory hover:scale-110"
          onClick={addForm}
        >
          <FaPlus />
        </button>

        <button
          className={`text-sm md:text-lg lg:text-2xl px-4 py-1 lg:px-6 mt-2 transition duration-500 ease-in-out border-2 rounded-lg text-forestGreen border-forestGreen hover:bg-forestGreen hover:text-moonlitIvory hover:scale-110 ${
            formCount > 0 ? "" : "hidden"
          }`}
          onClick={deleteForm}
        >
          <FaMinus />
        </button>

        <button className="text-sm md:text-lg lg:text-2xl px-4 py-1 lg:px-6 mt-2 transition duration-500 ease-in-out border-2 rounded-lg text-raspberryFizz border-raspberryFizz hover:bg-raspberryFizz hover:text-moonlitIvory hover:scale-110">
          Get Ideas 🥳
        </button>
      </div>
    </main>
  );
}
