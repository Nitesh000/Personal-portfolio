import { motion } from "framer-motion";

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-xl items-center space-y-7 flex-shrink-0 w-[400px] md:w-[450px] xl:w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100 hover:shadow-2xl hover:shadow-slate-800 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full xl:w-[128px] xl:h-[128px] object-cover object-center"
        src="https://www.cameraegg.org/wp-content/uploads/2015/06/canon-powershot-g3-x-sample-images-1.jpg"
        alt="Sample image"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">CEO of Yuu's Business</h4>
        <p className="font-bold text-xl mt-1">Yuu's org.</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-8 w-8 rounded-full"
            src="https://learnbatta.com/assets/images/javascript/javascript-logo.png"
            alt="language picture"
          />
        </div>
        <p className="uppercase py-5 text-gray-500">
          Started work...- Ended ..
        </p>
        <ul className="list-disc space-y-2 ml-3 text-md">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
};
export default ExperienceCard;
