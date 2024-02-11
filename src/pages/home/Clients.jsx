import { useRef } from "react";
import { fadeIn, fadeInUp } from "../../animations/animation";
import clientImg1 from "../../assets/images/client-img-1-lg.png";
import clientImg2 from "../../assets/images/client-img-2-lg.png";
import clientImg3 from "../../assets/images/client-img-3-lg.png";
import clientImg4 from "../../assets/images/client-img-4-lg.png";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../../components/SectionHeader";

const clientImages = [clientImg1, clientImg2, clientImg3, clientImg4];

function Clients() {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef);

  return (
    <div ref={sectionRef} className="bg-white mt-32">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={sectionInView ? "show" : "hidden"}
        className="max-w-[1440px] mx-auto py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="lg:grid lg:gap-8 lg:items-center">
          <SectionHeader
            title="Trusted by Clients Worldwide"
            description="Here are some of the companies we've helped scale. We transformed their business through innovative solutions and expert services."
          />

          <motion.div
            variants={fadeIn}
            className="mt-12 grid grid-cols-2 gap-1 md:grid-cols-3 lg:mt-0 lg:grid-cols-4"
          >
            {clientImages.map((img, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="col-span-1 flex justify-center items-center py-8 px-8 rounded-lg grayscale hover:grayscale-0 bg-gray-50  hover:bg-gray-100 transition-colors"
              >
                <img className="max-h-12" src={img} alt="Tuple" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Clients;
