import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Logo from "../../assets/svgs/Logo";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Announcements", href: "/announcements" },
  { name: "Company", href: "/company" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="header absolute inset-x-0 top-0 z-50">
        <div className="bg-white fixed inset-x-0 top-0">
          <nav
            className=" flex items-center justify-between px-8 py-4 max-w-[1440px] mx-auto"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a
                href="/"
                className="-m-1.5 p-1.5 flex gap-4 items-center font-medium"
              >
                <Logo />
                <span>Logicgate</span>
              </a>
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
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium leading-6 hover:text-primary"
                >
                  {item.name}
                </a>
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
              <a href="#" className="-m-1.5 p-1.5">
                <Logo />
              </a>
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
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 flex gap-2 justify-between items-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-primary text-white"
                  >
                    <span>Get In Touch</span>
                    <span>
                      <ArrowRightIcon
                        className="ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
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
