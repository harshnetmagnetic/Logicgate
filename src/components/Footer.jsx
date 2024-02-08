import { RiLinkedinFill, RiMailFill } from "@remixicon/react";
import Logo from "../assets/svgs/Logo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white mt-0">
      <div className="w-full max-w-[1440px] mx-auto py-6 px-3 md:py-10">
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
          <span className="block text-xs sm:text-center mt-4">
            © 2024{" "}
            <Link to="https://logicgate.com/" className="hover:underline">
              Ailogicgate
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex gap-4 items-center">
            <Link
              to="#"
              className="bg-gray-100 flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary hover:text-white transition-all duration-150"
              target="_blank"
              rel="noreferrer"
            >
              <RiLinkedinFill className="w-6 h-6" />
            </Link>
            <Link
              to="mailto:info@ailogicgate.com "
              className="bg-gray-100 flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary hover:text-white transition-all duration-150"
              target="_blank"
              rel="noreferrer"
            >
              <RiMailFill className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
