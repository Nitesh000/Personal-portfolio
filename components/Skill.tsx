import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};
const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="rounded-full border border-gray-500 object-cover w-16 h-16 xl:w-20 xl:h-20 gilter group-hover:grayscale transition duration-300 ease-in-out"
        src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png"
        alt="skill image"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
