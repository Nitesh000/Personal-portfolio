import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import My_image from "../public/my_image.png";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      {/* Header */}
      <Header />

      {/* Hero */}
      <div id="hero" className="snap-start">
        <Hero />
      </div>

      {/* About */}
      <div id="about" className="snap-center">
        <About />
      </div>

      {/* Experience */}
      <div id="experience" className="snap-center">
        <WorkExperience />
      </div>

      {/* Skills*/}
      <div id="skills" className="snap-start">
        <Skills />
      </div>

      {/* projects */}
      <div id="projects" className="snap-start">
        <Projects />
      </div>

      {/* Contact me */}
      <div id="contact" className="snap-start">
        <ContactMe />
      </div>

      <div className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={My_image}
              alt="go"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
