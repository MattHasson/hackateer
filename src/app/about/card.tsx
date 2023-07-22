import Image, { StaticImageData } from "next/image";
import { FaGithub, FaLinkedinIn, FaDev } from "react-icons/fa";
import Link from "next/link";

type CardProps = {
  imageSrc: StaticImageData;
  name: string;
  role: string;
  githubUrl: string;
  linkedinUrl: string;
  devpostUrl: string;
};

const Card: React.FC<CardProps> = ({
  imageSrc,
  name,
  role,
  githubUrl,
  linkedinUrl,
  devpostUrl,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={imageSrc}
        alt={name}
        className="lg:w-[200px] lg:h-[200px] lg:object-cover border-2 rounded-full border-berryBlush"
      />
      <h5 className="font-bold text-2xl lg:text-4xl text-aquamarineDream text-center">
        {name}
      </h5>
      <h6 className="font-bold text-lg lg:text-xl text-electricCitrus text-center">
        {role}
      </h6>
      <section className="flex justify-between space-x-6 mt-4 lg:space-x-8">
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-moonlitIvory text-4xl lg:text-6xl  transition ease-in-out duration-500 hover:scale-110 hover:rotate-[-5deg] hover:text-raspberryFizz" />
        </Link>
        <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="text-moonlitIvory text-4xl lg:text-6xl transition ease-in-out duration-500 hover:scale-110 hover:text-[#32b7ff]" />
        </Link>
        <Link href={devpostUrl} target="_blank" rel="noopener noreferrer">
          <FaDev className="text-moonlitIvory text-4xl lg:text-6xl transition ease-in-out duration-500 hover:scale-110 hover:rotate-[5deg] hover:text-[#01579B]" />
        </Link>
      </section>
    </div>
  );
};

export default Card;
