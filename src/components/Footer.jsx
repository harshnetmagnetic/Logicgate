import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "@remixicon/react";
import Logo from "../assets/svgs/Logo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white mt-32">
      <div className="w-full max-w-[1440px] mx-auto py-6 px-3 md:py-10 border-t">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="https://logicgate.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Logo />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Logicgate
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0">
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                Products
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                Services
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Company
              </Link>
            </li>
          </ul>
        </div>
        <div className="sm:flex sm:items-start sm:justify-between mt-8">
          <div className="flex gap-4 items-center">
            <Link
              to="#"
              className="bg-gray-100 flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary hover:text-white transition-all duration-150"
            >
              <RiFacebookFill className="w-6 h-6" />
            </Link>
            <Link
              to="#"
              className="bg-gray-100 flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary hover:text-white transition-all duration-150"
            >
              <RiLinkedinFill className="w-6 h-6" />
            </Link>
            <Link
              to="#"
              className="bg-gray-100 flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary hover:text-white transition-all duration-150"
            >
              <RiTwitterFill className="w-6 h-6" />
            </Link>
            <Link
              to="#"
              className="bg-gray-100 flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary hover:text-white transition-all duration-150"
            >
              <RiInstagramFill className="w-6 h-6" />
            </Link>
          </div>
          <ul className="flex flex-col md:mt-0  mt-8 md:0 md:items-end gap-4 max-w-sm md:text-right text-left mb-6 text-sm  sm:mb-0">
            <li>
              Plot No. 54, Zone-II, Maharana Pratap Nagar, Bhopal, Madhya
              Pradesh 462001
            </li>
            <li className="flex gap-2">
              <Link to="mailto:hr@netmagnetic.com " className="hover:underline">
                hr@netmagnetic.com
              </Link>
              <span className="hidden sm:inline">|</span>
              <Link to="tel:919893111128" className="hover:underline">
                +91-9893111128
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
        <span className="block text-xs sm:text-center mt-4">
          © 2024{" "}
          <Link to="https://logicgate.com/" className="hover:underline">
            Logicgate
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
