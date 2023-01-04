const Projects = () => {
  const projects = [1, 2, 3, 4];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative max-w-7xl flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40 scrollbar-thin">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 md:pb-10 h-4/5 md:h-3/5">
            <img
              src="https://img.pikbest.com/png-images/start-up-project-vector-landing-page-vector-graphic-element_1402931.png!w700wp"
              alt="project image"
              className="w-32 aspect-auto md:w-40 xl:w-56"
            />
            <div className="space-y-10 px-0 py-0 md:px-10 md:py-10 max-w-xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                Some Project
              </h4>
              <p className="text-md text-center md:text-left">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit
                amet, qui minim labore adipisicing minim sint cillum sint
                consectetur cupidatat.
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
