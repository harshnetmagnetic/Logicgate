import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-img.jpg";
import userImg1 from "../../assets/images/user-img-1.jpg";
import userImg2 from "../../assets/images/user-img-2.jpg";
import userImg3 from "../../assets/images/user-img-3.jpg";
import userImg4 from "../../assets/images/user-img-4.jpg";
import userImg5 from "../../assets/images/user-img-5.jpg";
import { RiArrowRightSLine } from "@remixicon/react";

export default function Hero() {
  return (
    <div className="bg-white max-w-[1440px] mx-auto">
      <div className="relative isolate flex justify-between md:flex-row flex-col px-6 gap-12 mt-24 md:mt-36 lg:px-8">
        <div className="text-left flex flex-col gap-6 items-start">
          <div className="bg-primary h-1 w-12"></div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight lg:text-6xl">
            Unlock the Power of Technology{" "}
          </h1>
          <p className="text-lg leading-8 max-w-lg">
            Transforming Your Business with Innovative Solutions and Expert
            Services.
          </p>
          <div className="flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-full bg-primary border border-transparent px-6 py-3  text-md font-semibold text-white shadow-sm hover:border-primary hover:bg-transparent hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition ease-in-out duration-150 active:scale-95"
            >
              Get In Touch
            </Link>
            <Link
              to="/company"
              className="text-sm font-semibold leading-6 group flex gap-2 hover:text-primary transition ease-in-out duration-150"
            >
              Know more{" "}
              <span
                aria-hidden="true"
                className=" group-hover:translate-x-2 block transition-all trasulate-x-0 ease-in-out duration-150"
              >
                <RiArrowRightSLine />
              </span>
            </Link>
          </div>
          <div className="flex gap-4 items-center mt-auto">
            <div className="flex items-center -space-x-4 ">
              <img
                alt="user 1"
                src={userImg1}
                className="relative inline-block h-12 w-12 !rounded-full  border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <img
                alt="user 2"
                src={userImg2}
                className="relative inline-block h-12 w-12 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <img
                alt="user 3"
                src={userImg3}
                className="relative inline-block h-12 w-12 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <img
                alt="user 4"
                src={userImg4}
                className="relative inline-block h-12 w-12 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <img
                alt="user 5"
                src={userImg5}
                className="relative inline-block h-12 w-12 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
            </div>
            <div className="flex items-center justify-center">
              <p className="text-base font-semibold flex gap-2">
                <span className="text-primary">50+</span>
                <span>Happy Clients</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className="hero-img relative w-full text-xs lg:text-sm h-auto md:w-[360px] lg:w-[400px] xl:w-[480px]">
            <img
              src={heroImage}
              alt="Hero Image"
              className="w-full h-full object-cover object-center rounded-2xl"
            />
            <div className="hero-img-message absolute bottom-8 left-8  md:top-12 md:left-8 flex flex-col gap-4">
              <span className="flex items-center bg-white rounded-full px-4 py-2 lg:px-6 shadow-xl">
                Extremely satisfied 👌
              </span>
              <img
                src={userImg1}
                alt="user image"
                className="h-12 w-12 shadow-xl rounded-full object-cover"
              />
            </div>
            <div className="hero-img-message absolute bottom-40 left-8 md:top-auto md:bottom-8 md:-left-16 flex flex-col gap-4">
              <span className="flex items-center bg-white rounded-full px-4 py-2 lg:px-6 shadow-xl">
                Reliable and Trustworthy💰{" "}
              </span>
              <img
                src={userImg2}
                alt="user image"
                className="h-12 w-12 shadow-xl rounded-full object-cover"
              />
            </div>
            <div className="hero-img-message absolute bottom-72 left-8 md:left-auto md:top-1/2 md:-right-8 flex flex-col gap-4">
              <span className="flex items-center bg-white rounded-full px-4 py-2 lg:px-6 shadow-xl">
                Prompt and Professional 😄👌{" "}
              </span>
              <img
                src={userImg3}
                alt="user image"
                className="h-12 w-12 shadow-xl rounded-full md:ml-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
