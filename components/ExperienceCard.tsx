import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <div className="flex flex-col rounded-xl items-center space-y-7 flex-shrink-0 w-[400px] md:w-[450px] xl:w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100 hover:shadow-2xl hover:shadow-slate-800 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full xl:w-[128px] xl:h-[128px] object-contain object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="Sample image"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((tech) => (
            <img
              key={tech._id}
              className="h-10 w-10 rounded-full object-contain object-center"
              src={urlFor(tech.image).url()}
              alt="tech img"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-500">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-2 ml-3 text-md max-w-md">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ExperienceCard;
