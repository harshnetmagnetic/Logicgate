import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { fadeInUp } from "../animations/animation";

function SectionHeader({ title, description }) {
  return (
    <>
      <div className="flex flex-col gap-6 mb-4 overflow-hidden">
        <motion.div
          variants={fadeInUp}
          className="bg-primary h-1 w-12"
        ></motion.div>
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-bold sm:text-4xl"
        >
          {title}
        </motion.h2>
        <motion.p variants={fadeInUp} className="max-w-3xl text-lg">
          {description}
        </motion.p>
      </div>
    </>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SectionHeader;
