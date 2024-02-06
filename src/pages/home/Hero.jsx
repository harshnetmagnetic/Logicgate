import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-img.png";
import userImg1 from "../../assets/images/user-img-1.png";
import userImg2 from "../../assets/images/user-img-2.png";
import userImg3 from "../../assets/images/user-img-3.png";
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
              to="#"
              className="rounded-full bg-primary border border-transparent px-6 py-3  text-md font-semibold text-white shadow-sm hover:border-primary hover:bg-transparent hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition ease-in-out duration-150 active:scale-95"
            >
              Get In Touch
            </Link>
            <Link
              to="#"
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
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                className="relative inline-block h-12 w-12 !rounded-full  border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <img
                alt="user 2"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                className="relative inline-block h-12 w-12 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <img
                alt="user 3"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                className="relative inline-block h-12 w-12 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <img
                alt="user 4"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                className="relative inline-block h-12 w-12 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <img
                alt="user 5"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
                className="relative inline-block h-12 w-12 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
            </div>
            <div className="flex items-center justify-center">
              <p className="text-base font-semibold flex gap-2">
                <span className="text-primary">100+</span>
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
              className="w-full h-full object-cover object-center "
            />
            <div className="hero-img-message absolute bottom-8 left-8  md:top-12 md:left-8 flex flex-col gap-4">
              <span className="flex items-center bg-white rounded-full px-4 py-2 lg:px-6 shadow-xl">
                Extremely satisfied 👌
              </span>
              <img
                src={userImg1}
                alt="user image"
                className="h-12 w-12 shadow-xl rounded-full"
              />
            </div>
            <div className="hero-img-message absolute bottom-40 left-8 md:top-auto md:bottom-8 md:-left-16 flex flex-col gap-4">
              <span className="flex items-center bg-white rounded-full px-4 py-2 lg:px-6 shadow-xl">
                Reliable and Trustworthy💰{" "}
              </span>
              <img
                src={userImg2}
                alt="user image"
                className="h-12 w-12 shadow-xl rounded-full"
              />
            </div>
            <div className="hero-img-message absolute bottom-72 left-8 md:left-auto md:top-1/2 md:-right-8 flex flex-col gap-4">
              <span className="flex items-center bg-white rounded-full px-4 py-2 lg:px-6 shadow-xl">
                Prompt and Professional 😄👌{" "}
              </span>
              <img
                src={userImg3}
                alt="user image"
                className="h-12 w-12 shadow-xl rounded-full md:ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
