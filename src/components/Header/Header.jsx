import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Logo from "../../assets/svgs/Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Products", to: "/products" },
  { name: "Services", to: "/services" },
  { name: "Contact", to: "/contact" },
  { name: "Company", to: "/company" },
];

function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="header absolute inset-x-0 top-0 z-50">
        <div className="bg-white bg-opacity-70 backdrop-blur-sm fixed inset-x-0 top-0">
          <nav
            className=" flex items-center justify-between px-8 py-4 max-w-[1440px] mx-auto"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <Link
                to="/"
                className="-m-1.5 p-1.5 flex gap-4 items-center font-medium"
              >
                <Logo />
                <span>Logicgate</span>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`group relative
                  ${location.pathname === item.to ? "text-primary" : ""}
                  text-sm font-medium leading-6 hover:text-primary
                  `}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-width duration-300 ease-in-out group-hover:w-[100%] ${
                      location.pathname === item.to ? "w-full" : "w-0"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="#" className="-m-1.5 p-1.5">
                <Logo />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 ${
                        location.pathname === item.to
                          ? "bg-primary text-white"
                          : ""
                      }
                        `}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="#"
                    className="-mx-3 flex gap-2 justify-between items-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-gray-50 text-primary"
                  >
                    <span>Get In Touch</span>
                    <span>
                      <ArrowRightIcon
                        className="ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}

export default Header;
