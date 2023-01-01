import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgrondCircles";
import my_image from "../public/my_image.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hii, Nitesh Here",
      "Loves-entertainment-and-comedy",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative top-20">
      <BackgroundCircles />
      <Image
        src={my_image}
        alt="My Image"
        priority={true}
        width={130}
        height={130}
        className="relative rounded-full mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div>
          <Link href="#about">
            <button className="heroButton">About </button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
