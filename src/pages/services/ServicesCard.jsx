import PropTypes from "prop-types";

ServicesCard.propTypes = {
  card: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

function ServicesCard({ card, index }) {
  return (
    <div
      key={card.title}
      className={`gap-8 items-center xl:gap-16 flex justify-between flex-col md:flex-row services-card ${
        index % 2 === 0 ? "" : "md:flex-row-reverse"
      }`}
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
  );
}

export default ServicesCard;
