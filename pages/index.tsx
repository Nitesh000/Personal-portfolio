import { GetStaticProps } from "next";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { urlFor } from "../sanity";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchsocials } from "../utils/fetchScials";
import { fetchSkills } from "../utils/fetchSkills";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <div id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </div>

      {/* About */}
      <div id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </div>

      {/* Experience */}
      <div id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </div>

      {/* Skills*/}
      <div id="skills" className="snap-start">
        <Skills skills={skills} />
      </div>

      {/* projects */}
      <div id="projects" className="snap-start">
        <Projects projects={projects} />
      </div>

      {/* Contact me */}
      <div id="contact" className="snap-start">
        <ContactMe />
      </div>

      <div className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={urlFor(pageInfo.heroImage).url()}
              alt="go"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchsocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next js will apttempt to re-generate the page
    // 2. so we can use the revalidate key to check for the time intreval it will do the revalidate.
    //
    revalidate: 10,
  };
};
