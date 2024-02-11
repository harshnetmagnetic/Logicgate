import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-img.jpg";
import userImg1 from "../../assets/images/user-img-1.jpg";
import userImg2 from "../../assets/images/user-img-2.jpg";
import userImg3 from "../../assets/images/user-img-3.jpg";
import userImg4 from "../../assets/images/user-img-4.jpg";
import userImg5 from "../../assets/images/user-img-5.jpg";
import { RiArrowRightSLine } from "@remixicon/react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  scaleIn,
  scaleInSmall,
} from "../../animations/animation";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [6, -6]);
  const rotateY = useTransform(x, [-100, 100], [-6, 6]);

  return (
    <div className="bg-white max-w-[1440px] mx-auto" ref={sectionRef}>
      <motion.div
        variants={fadeInUp}
        animate={sectionInView ? "show" : "hidden"}
        initial="hidden"
        className="relative isolate flex justify-between md:flex-row flex-col px-6 gap-12 mt-24 md:mt-36 lg:px-8 hero-section"
        onMouseMove={(e) => {
          x.set(e.clientX - window.innerWidth / 2);
          y.set(e.clientY - window.innerHeight / 2);
        }}
      >
        <div className="text-left flex flex-col gap-6 items-start">
          <motion.div
            variants={fadeInUp}
            className="bg-primary h-1 w-12"
          ></motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold tracking-tight lg:text-6xl pb-2"
          >
            Unlock the Power of Technology{" "}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg leading-8 max-w-lg">
            Transforming Your Business with Innovative Solutions and Expert
            Services.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-x-6 overflow-hidden"
          >
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
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="flex gap-4 items-center mt-auto"
          >
            <motion.div
              variants={fadeInUp}
              animate="show"
              initial="hidden"
              className="flex items-center -space-x-4 overflow-hidden "
            >
              <motion.img
                variants={fadeIn}
                alt="user 1"
                src={userImg1}
                className="relative inline-block h-12 w-12 !rounded-full  border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <motion.img
                variants={fadeIn}
                alt="user 2"
                src={userImg2}
                className="relative inline-block h-12 w-12 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <motion.img
                alt="user 3"
                src={userImg3}
                variants={fadeIn}
                className="relative inline-block h-12 w-12 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <motion.img
                alt="user 4"
                src={userImg4}
                variants={fadeIn}
                className="relative inline-block h-12 w-12 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <motion.img
                variants={fadeIn}
                alt="user 5"
                src={userImg5}
                className="relative inline-block h-12 w-12 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="flex items-center justify-center"
            >
              <p className="text-base font-semibold flex gap-2">
                <span className="text-primary">50+</span>
                <span>Happy Clients</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex items-center justify-end">
          <motion.div
            className="hero-img relative w-full text-xs lg:text-sm h-auto md:w-[360px] lg:w-[400px] xl:w-[480px]"
            style={{
              transformStyle: "preserve-3d",
              transformPerspective: 1000,
              rotateX,
              rotateY,
              transition: "all 0.6s linear",
            }}
          >
            <motion.img
              src={heroImage}
              alt="Hero Image"
              className="w-full h-full object-cover object-center rounded-2xl"
              style={{
                transformStyle: "preserve-3d",
              }}
            />
            <motion.div
              className="hero-img-message absolute bottom-8 left-8  md:top-12 md:left-8 flex flex-col gap-4"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.span
                className="flex items-center bg-white rounded-full px-4 py-2 lg:px-6 shadow-xl"
                style={{
                  transform: "translate3d(0px, 0px, 40px)",
                }}
              >
                Extremely satisfied 👌
              </motion.span>
              <motion.img
                src={userImg1}
                alt="user image"
                className="h-12 w-12 shadow-xl rounded-full object-cover"
                style={{
                  transform: "translate3d(0px, 0px, 60px)",
                }}
              />
            </motion.div>
            <motion.div
              className="hero-img-message absolute bottom-40 left-8 md:top-auto md:bottom-8 md:-left-16 flex flex-col gap-4"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.span
                className="flex items-center bg-white rounded-full px-4 py-2 lg:px-6 shadow-xl"
                style={{
                  transform: "translate3d(0px, 0px, 40px)",
                }}
              >
                Reliable and Trustworthy💰{" "}
              </motion.span>
              <motion.img
                src={userImg2}
                alt="user image"
                className="h-12 w-12 shadow-xl rounded-full object-cover"
                style={{
                  transform: "translate3d(0px, 0px, 60px)",
                }}
              />
            </motion.div>
            <motion.div
              className="hero-img-message absolute bottom-72 left-8 md:left-auto md:top-1/2 md:-right-8 flex flex-col gap-4"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.span
                className="flex items-center bg-white rounded-full px-4 py-2 lg:px-6 shadow-xl"
                style={{
                  transform: "translate3d(0px, 0px, 40px)",
                }}
              >
                Prompt and Professional 😄👌{" "}
              </motion.span>
              <motion.img
                src={userImg3}
                alt="user image"
                className="h-12 w-12 shadow-xl rounded-full md:ml-auto object-cover"
                style={{
                  transform: "translate3d(0px, 0px, 60px)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
