import { Link } from "react-router-dom";
import Logo from "../assets/svgs/Logo";

function CallToActionSection() {
  return (
    <section className="bg-gray-50 mt-32">
      <div className="relative py-10 px-4 mx-auto max-w-[1440px] lg:px-6 overflow-hidden">
        <div className="hidden xl:block absolute right-[20%] bottom-[16%] scale-[12]">
          <Logo />
        </div>
        <div className="max-w-screen-md flex flex-col gap-8 relative z-10">
          <h2 className="text-4xl tracking-tight font-bold">
            Contact us now for personalized service and expert advice!{" "}
          </h2>
          <p className="max-w-xl">
            Don&apos;t hesitate to reach out to us for any inquiries or
            questions. We&apos;ll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4">
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
