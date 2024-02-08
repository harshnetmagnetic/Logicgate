import {
  RiCodeBoxFill,
  RiTimeFill,
  RiInstanceFill,
  RiGroupFill,
  RiCurrencyFill,
  RiShieldUserFill,
} from "@remixicon/react";

import { useState } from "react";

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

  return (
    <div className="bg-white mt-32">
      <div className="max-w-[1440px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:gap-8 lg:items-center">
          <div className="flex flex-col gap-6">
            <div className="bg-primary h-1 w-12"></div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Why We Are Best From Others?
            </h2>
            <p className="max-w-3xl text-lg">
              We take pride in the quality of our work and are choose us for all
              of your services needs and experience the difference that our
              expertise and commitment to quality can make.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-2 md:grid-cols-2 lg:mt-0 lg:grid-cols-3">
            {chooseUsCards.map((card, index) => (
              <div
                key={card.name}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
