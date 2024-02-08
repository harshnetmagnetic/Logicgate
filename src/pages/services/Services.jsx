import { Link } from "react-router-dom";
import servicesImg1 from "../../assets/images/services-img-1.jpg";
import servicesImg2 from "../../assets/images/services-img-2.jpg";
import servicesImg3 from "../../assets/images/services-img-3.jpg";
import servicesImg4 from "../../assets/images/services-img-4.jpg";
import servicesImg5 from "../../assets/images/services-img-5.jpg";
import servicesImg6 from "../../assets/images/services-img-6.jpg";
import { useLocation } from "react-router-dom";
import ServicesCard from "./ServicesCard";
import { RiArrowRightSLine } from "@remixicon/react";

const servicesCards = [
  {
    title: "Mobile Application Development",
    description:
      "As a dedicated Mobile Apps Development Company, we have a dedicated team of experts to develop scalable & custom mobile apps for your business.",
    image: servicesImg1,
  },
  {
    title: "Web Application Development",
    description:
      "We offer a bespoke Web Application Development solution based on the customer’s needs and business objectives.",
    image: servicesImg2,
  },
  {
    title: "Cloud Services",
    description:
      "We deliver high-quality Cloud Service to manage efficiently and optimize business outcomes.",
    image: servicesImg3,
  },
  {
    title: "Web Application Development",
    description:
      "We offer a bespoke Web Application Development solution based on the customer’s needs and business objectives.",
    image: servicesImg4,
  },
  {
    title: "Website Development",
    description:
      "We are a full-service website development firm that assists the client in setting up a strong and attractive website. We provide high-quality websites.",
    image: servicesImg5,
  },
  {
    title: "AI and Machine Learning Services",
    description:
      "Our AI and Machine Learning services streamline processes and provide end-to-end solutions that improve the customer experience.",
    image: servicesImg6,
  },
];

function Services() {
  const location = useLocation();
  return (
    <section className="bg-white mt-32 flex flex-col gap-8 mx-auto max-w-[1440px] px-4  lg:px-8">
      <div className="flex flex-col gap-6 mb-4">
        <div className="bg-primary h-1 w-12"></div>
        <h2 className="text-3xl font-bold sm:text-4xl">
          We Just Offer The Best Services
        </h2>
        <p className="max-w-3xl text-lg">
          Our team of experts is committed to providing you with the best
          services that cater to your unique needs. Whether you need , we have
          the expertise to deliver the results you need.
        </p>
      </div>

      {servicesCards
        .slice(0, location.pathname === "/" ? 3 : servicesCards.length)
        .map((card, index) => (
          <ServicesCard key={index} index={index} card={card} />
        ))}

      {location.pathname === "/" && (
        <div className="flex items-center justify-center gap-x-6 mt-16 md:mt-32">
          <Link
            to="/contact"
            className="rounded-full bg-primary border border-transparent px-6 py-3  text-md font-semibold text-white shadow-sm hover:border-primary hover:bg-transparent hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition ease-in-out duration-150 active:scale-95"
          >
            Get In Touch
          </Link>
          <Link
            to="/services"
            className="text-sm font-semibold leading-6 group flex gap-2 hover:text-primary transition ease-in-out duration-150"
          >
            See more{" "}
            <span
              aria-hidden="true"
              className=" group-hover:translate-x-2 block transition-all trasulate-x-0 ease-in-out duration-150"
            >
              <RiArrowRightSLine />
            </span>
          </Link>
        </div>
      )}
    </section>
  );
}

export default Services;
