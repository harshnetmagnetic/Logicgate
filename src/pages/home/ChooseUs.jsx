import {
  RiCodeBoxFill,
  RiTimeFill,
  RiInstanceFill,
  RiGroupFill,
  RiCurrencyFill,
  RiShieldUserFill,
} from "@remixicon/react";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn, fadeInUp } from "../../animations/animation";
import SectionHeader from "../../components/SectionHeader";

const chooseUsCards = [
  {
    name: "Latest Web Technologies",
    description:
      "We stay up-to-date with the latest web technologies to provide you with the best possible solutions.",
    icon: RiCodeBoxFill,
  },
  {
    name: "Project Management",
    description:
      "We ensure that you receive regular updates and that your project is completed on time and within budget.",
    icon: RiTimeFill,
  },
  {
    name: "Customized Solutions",
    description:
      "We work closely with you to develop customized solutions that meet your unique business needs.",
    icon: RiInstanceFill,
  },
  {
    name: "Leading Industry Vendors",
    description:
      "We work with the best vendors in the industry to provide you with the highest quality products and services.",
    icon: RiGroupFill,
  },
  {
    name: "Cost-Effective Pricing",
    description:
      "We offer transparent and affordable pricing that is designed to maximize your return on investment.",
    icon: RiCurrencyFill,
  },
  {
    name: "Security and Data Privacy",
    description:
      "We take your privacy seriously and have implemented security measures to ensure that your data is safe.",
    icon: RiShieldUserFill,
  },
];

function ChooseUs() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [anyCardHovered, setAnyCardHovered] = useState(false);
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef);

  return (
    <div ref={sectionRef} className="bg-white mt-32">
      <motion.div
        variants={fadeInUp}
        animate={sectionInView ? "show" : "hidden"}
        initial="hidden"
        className="max-w-[1440px] mx-auto py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="lg:grid lg:gap-8 lg:items-center">
          <SectionHeader
            title="Why Choose Us?"
            description="We are committed to providing you with the best possible solutions for your business. Our experience and expertise will ensure that you receive the best possible service."
          />

          <motion.div
            variants={fadeIn}
            className="mt-12 grid grid-cols-1 gap-2 md:grid-cols-2 lg:mt-0 lg:grid-cols-3"
          >
            {chooseUsCards.map((card, index) => (
              <motion.div variants={fadeInUp} key={card.name}>
                <div
                  onMouseEnter={() => {
                    setHoveredCard(index);
                    setAnyCardHovered(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredCard(null);
                    setAnyCardHovered(false);
                  }}
                  className={`col-span-1 flex flex-col items-start justify-center py-8 px-8 border rounded-lg transition-all duration-300 ${
                    hoveredCard === index
                      ? "scale-100 opacity-100 shadow-md border-primary"
                      : anyCardHovered
                      ? "scale-95 opacity-40"
                      : "scale-100 opacity-100"
                  }`}
                >
                  <card.icon
                    className={`h-12 w-12 transition-all duration-300 ${
                      hoveredCard === index || !anyCardHovered
                        ? "text-primary"
                        : ""
                    }`}
                  />
                  <h3 className="text-xl font-semibold mt-4">{card.name}</h3>
                  <p className="text-md mt-2">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ChooseUs;
