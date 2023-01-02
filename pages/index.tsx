import { NextPage } from "next";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll scroll-smooth z-0">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills*/}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* TODO: projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact me */}
      <section id="ContactMe" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};
export default Home;
