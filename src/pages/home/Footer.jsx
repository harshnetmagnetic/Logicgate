import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "@remixicon/react";
import Logo from "../../assets/svgs/Logo";

function Footer() {
  return (
    <footer className="bg-white mt-32">
      <div className="w-full max-w-[1440px] mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://logicgate.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Logo />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Logicgate
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Company
              </a>
            </li>
          </ul>
        </div>
        <div className="sm:flex sm:items-start sm:justify-between mt-8">
          <div className="flex gap-4 items-center">
            <a
              href="#"
              className="bg-gray-100 flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary hover:text-white transition-all duration-150"
            >
              <RiFacebookFill className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="bg-gray-100 flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary hover:text-white transition-all duration-150"
            >
              <RiLinkedinFill className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="bg-gray-100 flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary hover:text-white transition-all duration-150"
            >
              <RiTwitterFill className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="bg-gray-100 flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary hover:text-white transition-all duration-150"
            >
              <RiInstagramFill className="w-6 h-6" />
            </a>
          </div>
          <ul className="flex flex-col mt-8 md:0 md:items-end gap-4 max-w-sm md:text-right text-left mb-6 text-sm font-medium  sm:mb-0">
            <li>
              Plot No. 54, Zone-II, Maharana Pratap Nagar, Bhopal, Madhya
              Pradesh 462001
            </li>
            <li className="flex gap-2">
              <a href="mailto:hr@netmagnetic.com " className="hover:underline">
                hr@netmagnetic.com
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="tel:919893111128" className="hover:underline">
                +91-9893111128
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm sm:text-center">
          © 2024{" "}
          <a href="https://logicgate.com/" className="hover:underline">
            Logicgate
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
