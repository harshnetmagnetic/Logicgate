import { Link } from "react-router-dom";
import servicesImg1 from "../../assets/images/services-img-1.png";
import servicesImg2 from "../../assets/images/services-img-2.png";
import servicesImg3 from "../../assets/images/services-img-3.png";
import { useLocation } from "react-router-dom";

const servicesCards = [
  {
    title: "Social Media Management",
    description:
      "Our team of experienced designers and developers offer comprehensive social media management services to help you build a strong online presence.",
    image: servicesImg1,
  },
  {
    title: "Website Design and Development",
    description:
      "Our team of experienced designers and developers can create a custom website tailored to your business needs.",
    image: servicesImg2,
  },
  {
    title: "Website Maintenance and Support",
    description:
      "Our team of experts is dedicated to providing you with the best Website Maintenance and Support service possible. We offer a range of services to keep your website running smoothly.",
    image: servicesImg3,
  },
  {
    title: "Search Engine Optimization",
    description:
      "Our team of experts is dedicated to providing you with the best Search Engine Optimization service possible. We offer a range of services to keep your website running smoothly.",
    image: servicesImg1,
  },
];

function Services() {
  const location = useLocation();
  return (
    <section className="bg-white mt-24 flex flex-col gap-8 mx-auto max-w-[1440px] py-8 px-4 sm:py-16 lg:px-8">
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
          <div
            key={card.title}
            className={`gap-8 items-center xl:gap-16 flex justify-between flex-col md:flex-row ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <img
              className="w-full md:w-1/2"
              src={card.image}
              alt="services image"
            />
            <div className="p-2">
              <h2 className="mb-4 text-2xl lg:text-3xl tracking-tight font-semibold">
                {card.title}{" "}
              </h2>
              <p className="mb-6 text-sm lg:text-lg">{card.description}</p>
            </div>
          </div>
        ))}
      {location.pathname === "/" && (
        <div className="flex items-center justify-center gap-x-6 mt-16 md:mt-24">
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
              →
            </span>
          </Link>
        </div>
      )}
    </section>
  );
}

export default Services;
