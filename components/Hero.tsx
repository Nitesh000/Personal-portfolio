import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import my_image from "../public/my_image.png";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hii, Nitesh here",
      "loves-entertainment-and-comedy",
      "<ButLovesCodingMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={my_image}
        alt="picture of the creator"
        width={140}
        height={140}
        className="relative rounded-full"
      />
      <h2 className="text-sm uppercase tracking-[15px] text-gray-500 pb-2">
        Software Engineer
      </h2>
      <h1 className="text-5xl lg:text-6xl font-semibold px-10">
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
      <div>
        <button className="heroButton">About</button>
        <button className="heroButton">Experience</button>
        <button className="heroButton">Skills</button>
        <button className="heroButton">Projects</button>
      </div>
    </div>
  );
};

export default Hero;
