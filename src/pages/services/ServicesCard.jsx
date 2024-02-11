import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";
import { grayedOut } from "../../animations/animation";
import { useRef } from "react";

ServicesCard.propTypes = {
  card: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

function ServicesCard({ card, index }) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, {
    amount: 0.9,
  });

  return (
    <motion.div
      variants={grayedOut}
      animate={cardInView ? "show" : "hidden"}
      initial="hidden"
      ref={cardRef}
    >
      <div
        className={`gap-8 items-center xl:gap-16 flex justify-between flex-col md:flex-row services-card ${
          cardInView ? "services-card-inview" : ""
        } ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
      >
        <img
          className={`w-full md:w-1/2 rounded-2xl ${
            index % 2 === 0 ? "right" : "left"
          }`}
          src={card.image}
        />
        <div className="p-2">
          <h2 className="mb-4 text-2xl lg:text-3xl tracking-tight font-semibold">
            {card.title}{" "}
          </h2>
          <p className="mb-6 text-sm lg:text-lg">{card.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ServicesCard;
