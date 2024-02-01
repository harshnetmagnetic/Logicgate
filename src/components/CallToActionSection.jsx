import { Link } from "react-router-dom";
import Logo from "../assets/svgs/Logo";

function CallToActionSection() {
  return (
    <section className="bg-gray-50 mt-24">
      <div className="relative py-8 px-4 mx-auto max-w-[1440px] sm:py-16 lg:px-6 overflow-hidden">
        <div className="hidden xl:block absolute right-[20%] bottom-[20%] scale-[12]">
          <Logo />
        </div>
        <div className="max-w-screen-md flex flex-col gap-8 relative z-10">
          <h2 className="text-4xl tracking-tight font-bold">
            Don&apos;t hesitate, contact us now for personalized service and
            expert advice!{" "}
          </h2>
          <p>
            We are a team of experts who are dedicated to providing you with the
            best possible service. Our goal is to help you grow your business by
            providing you with the tools you need to succeed.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link
              to="#"
              className="rounded-full bg-primary border border-transparent px-6 py-3  text-md font-semibold text-white shadow-sm hover:border-primary hover:bg-transparent hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition ease-in-out duration-150 active:scale-95"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;
