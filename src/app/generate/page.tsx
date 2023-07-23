/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

export default function Generate() {
  const [formCount, setFormCount] = useState(1);
  const [languages, setLanguages] = useState([]);
  const [hideSelect, setHideSelect] = useState(true);

  const addForm = () => {
    setFormCount(formCount + 1);
  };

  const deleteForm = () => {
    if (formCount > 0) {
      setFormCount(formCount - 1);
    }
  };

  function handleSkill(skillInput:HTMLInputElement) {
    setHideSelect(!hideSelect);
    console.log(skillInput)
  }

  const forms = Array.from({ length: formCount }, (_, i) => (
    <div id={`member_${i}`} key={i} className="mt-2 grid grid-cols-2" >
      <div>
        <input
          name="hacker"
          required
          className="name text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2"
          placeholder={`Hacker ${i + 1}`}
        />
      </div>
      <div className="relative">
        {/* <input
        name="skills"
        onClick={handleSkill}
        className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2"
        value={languages} type="text">
        </input>
        <select
          required
          multiple
          hidden={hideSelect}
          className="absolute left-0 text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2"
        >
          <option className="text-xs md:text-md lg:text-xl bg-mysticPurple rounded-lg p-2" disabled>Python, HTML, CSS, JS...</option>
          <option className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2" value={"Java"}>Java</option>
          <option className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2" value={"C++"}>C++</option>
          <option className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2" value={"Python"}>Python</option>
          <option className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2" value={"Html"}>HTML</option>
          <option className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2" value={"Css"}>CSS</option>
          <option className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2" value={"Typescript"}>Typescript</option>
          <option className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2" value={"Javascript"}>Javascript</option>
          <option className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2" value={"React"}>React</option>
          <option className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2" value={"React Native"}>React Native</option>
        </select> */}
        <input
          name="skills"
          required
          className="skills text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2"
          placeholder="Python, HTML, CSS, JS..."
        ></input> 
      </div>
    </div>
  ));

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let statement = document.querySelector("#form input#statement") as HTMLInputElement ;
    console.log(statement.value);
    let duration = document.querySelector("#form #duration") as HTMLInputElement;
    console.log(duration.value)
    let teamArray:{name:string,skills:string}[] = [];
    for (let i = 0; i < formCount; i++) {
      let name = (document.querySelector(`#form #member_${i} div input.name`)as HTMLInputElement).value
      let skilled_in = (document.querySelector(`#form #member_${i} div input.skills`) as HTMLInputElement).value 
      skilled_in = skilled_in.trim();
      let obj = {
        name,
        skills:skilled_in
      }
      teamArray.push(obj)
    }
    console.log(teamArray)
    console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/problem-statement`,{
      method: "post",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        statement:statement.value,
        team_size:formCount,
        duration:duration.value,
        team_members:teamArray
      })
    }).then(res=>res.json())
    .then(data => {
      console.log(data.approaches)
    })
  }
  return (
    <form id="form" onSubmit={handleSubmit} className="min-h-screen flex flex-col mt-[50px] space-y-4 mr-20">
      <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none">
        Problem Statement
      </h2>
      <input
        name="statement"
        id="statement"
        required
        className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2"
        placeholder="What's your topic/challenge?"
      ></input>
      <h2 className="pt-5 font-extrabold text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none">
        Hackathon Duration
      </h2>
      <input
        name="duration"
        id="duration"
        min={1}
        max={7}
        required
        type="number"
        className="text-xs md:text-md lg:text-xl text-raspberryFizz bg-mysticPurple rounded-lg p-2"
        placeholder="Enter duration in number of days"
      ></input>

      <div className="pt-5 grid grid-cols-2">
        <h4 className="font-extrabold text-md md:text-xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none pb-2 pt-4">
          Team member(s)
        </h4>
        <h4 className="font-extrabold text-md md:text-xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none pb-2 pt-4">
          Skills
        </h4>
      </div>
      {forms}
      <div className="flex justify-center space-x-4">
        <button
          type="button"
          className="text-sm md:text-lg lg:text-2xl px-4 py-1 lg:px-6 mt-2 transition duration-500 ease-in-out border-2 rounded-lg text-electricCitrus border-electricCitrus hover:bg-electricCitrus hover:text-moonlitIvory hover:scale-110"
          onClick={addForm}
        >
          <FaPlus />
        </button>

        <button
          type="button"
          className={`text-sm md:text-lg lg:text-2xl px-4 py-1 lg:px-6 mt-2 transition duration-500 ease-in-out border-2 rounded-lg text-forestGreen border-forestGreen hover:bg-forestGreen hover:text-moonlitIvory hover:scale-110 ${formCount > 1 ? "" : "hidden"
            }`}
          onClick={deleteForm}
        >
          <FaMinus />
        </button>

        <button className="text-sm md:text-lg lg:text-2xl px-4 py-1 lg:px-6 mt-2 transition duration-500 ease-in-out border-2 rounded-lg text-raspberryFizz border-raspberryFizz hover:bg-raspberryFizz hover:text-moonlitIvory hover:scale-110">
          Get Ideas 🥳
        </button>
      </div>
    </form>
  );
}
