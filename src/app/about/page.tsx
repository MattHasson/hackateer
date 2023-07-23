import Link from "next/link";
import Card from "./card";
import afshanImage from "./afshan.svg";
import mattImage from "./Matt.svg";
import farabiImage from "./farabi.svg";
import indiaFlag from "./india-flag.svg"
import usFlag from "./us-flag.svg"
import canadaFlag from "./canada-flag.svg"

export default function About() {
  return (
    <main className="flex flex-col mt-11 mb-11 space-y-6">
      <h1 className="font-extrabold text-5xl md:text-8xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-br from-[#0148FF] to-[#00F0FF] leading-none">
        About us 
      </h1>
      <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-majesticOrchid pb-8 md:pb-0">
        Hackateer was created by 3 passionate developers as a project submission
        for the{" "}
        <mark className="bg-transparent text-electricCitrus">
          <Link href="https://hacks-for-hackers.devpost.com/" target="_blank" rel="noopener noreferrer">
            Hacks for Hackers
          </Link>
        </mark>{" "}
        Hackathon.
      </h3>

      <div className="flex flex-col justify-center items-center space-y-14 md:flex-row md:space-y-0 lg:justify-around md:space-x-10 md:pt-[100px]">
        <Card
          imageSrc={afshanImage}
          name="Afshan Ahmed Khan"
          role="Back-End Developer"
          githubUrl="https://github.com/redoC-A2k"
          linkedinUrl="https://www.linkedin.com/in/afshan-ak/"
          devpostUrl="https://devpost.com/noob-github"
          flag={indiaFlag} 
        />
        <Card
          imageSrc={mattImage}
          name="Matthew Hasson"
          role="Cloud/DevOps Specialist"
          githubUrl="https://github.com/MattHasson"
          linkedinUrl="https://www.linkedin.com/in/matthew-hasson-92448b223/"
          devpostUrl="https://devpost.com/scrummer03?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
          flag={usFlag}
        />
        <Card
          imageSrc={farabiImage}
          name="Mumtahin Farabi"
          role="Project Manager, Lead Designer, Front-End Developer"
          githubUrl="https://github.com/mfarabi619"
          linkedinUrl="https://www.linkedin.com/in/mfarabi/"
          devpostUrl="https://devpost.com/MFarabi619?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
          flag={canadaFlag}
        />
      </div>
    </main>
  );
}
