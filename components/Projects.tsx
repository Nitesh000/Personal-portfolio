import { urlFor } from "../sanity";
import { Project } from "../typings";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative max-w-7xl flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40 scrollbar-thin">
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 md:pb-10 h-4/5 md:h-3/5"
            key={i}
          >
            <img
              src={urlFor(project?.image).url()}
              alt="project image"
              className="w-32 aspect-auto md:w-40 xl:w-60"
            />
            <div className="space-y-10 px-0 py-0 md:px-10 md:py-10 max-w-xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {" "}
                {project?.technologies.map((tech) => (
                  <img
                    className="h-10 w-10"
                    key={tech._id}
                    src={urlFor(tech.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="text-md text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12"></div>
    </div>
  );
};
export default Projects;
