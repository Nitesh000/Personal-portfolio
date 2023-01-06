import { motion } from "framer-motion";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};
const About = ({ pageInfo }: Props) => {
  return (
    <div className="flex h-screen flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 max-w-5xl text-center"
      >
        <div className="space-y-10 md:px-10">
          <h4 className="text-4xl text-gray-400 uppercase font-semibold tracking-widest">
            Here is a{" "}
            <span className="lowercase text-3xl underline decoration-[#F7AB0A]/50">
              little
            </span>{" "}
            background
          </h4>
        </div>
        <p className="pt-16 text-base">
          {pageInfo?.backgroundInformation}
        </p>
      </motion.div>
    </div>
  );
};

export default About;
