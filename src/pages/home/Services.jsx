import servicesImg1 from "../../assets/images/services-img-1.png";
import servicesImg2 from "../../assets/images/services-img-2.png";
import servicesImg3 from "../../assets/images/services-img-3.png";

function Services() {
  return (
    <section className="bg-white mt-32 flex flex-col gap-8 mx-auto max-w-[1440px] py-8 px-4 sm:py-16 lg:px-8">
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
      <div className="gap-8 items-center  xl:gap-16 md:grid md:grid-cols-2 ">
        <img className="w-full" src={servicesImg1} alt="services image" />
        <div className="mt-8 md:mt-0 lg:max-w-[80%]">
          <h2 className="mb-4 text-3xl tracking-tight font-bold">
            Social Media Management{" "}
          </h2>
          <p className="mb-6 md:text-md">
            Our team of experienced designers and developers offer comprehensive
            social media management services to help you build a strong online
            presence.
          </p>
        </div>
      </div>
      <div className="md:gap-8 items-center flex flex-col-reverse xl:gap-16 md:grid md:grid-cols-2 ">
        <div className="mt-8 md:mt-0 lg:max-w-[80%]">
          <h2 className="mb-4 text-3xl tracking-tight font-bold">
            Website Design and Development
          </h2>
          <p className="mb-6 md:text-md">
            Our team of experienced designers and developers can create a custom
            website tailored to your business needs.
          </p>
        </div>
        <img className="w-full" src={servicesImg2} alt="services image" />
      </div>
      <div className="gap-8 items-center  xl:gap-16 md:grid md:grid-cols-2 ">
        <img className="w-full" src={servicesImg3} alt="services image" />
        <div className="mt-8 md:mt-0 lg:max-w-[80%]">
          <h2 className="mb-4 text-3xl tracking-tight font-bold">
            Website Maintenance and Support
          </h2>
          <p className="mb-6 md:text-md">
            Our team of experts is dedicated to providing you with the best
            Website Maintenance and Support service possible. We offer a range
            of services to keep your website running smoothly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
