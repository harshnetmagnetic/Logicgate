import { RiMailFill } from "@remixicon/react";
import { Link } from "react-router-dom";

function ContactInfo() {
  return (
    <>
      <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
        <div className="mb-12 h-full lg:mb-0 ">
          <div className="flex flex-col gap-6 mb-4">
            <div className="bg-primary h-1 w-12"></div>
            <h2 className="text-3xl font-bold sm:text-4xl">Contact Us</h2>
            <p className="max-w-3xl text-lg">
              Reach out to us anytime, we&apos;re just a phone call or a visit
              away.
            </p>
          </div>
          <div className="flex flex-col mt-12">
            <div className="mb-8 flex w-full max-w-[370px]">
              <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-full bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                <RiMailFill size={32} />
              </div>
              <Link to="mailto:info@ailogicgate.com" className="w-full">
                <h4 className="mb-1 text-lg font-bold text-dark ">
                  Email Address
                </h4>
                <p className="text-base text-body-color dark:text-dark-6">
                  info@ailogicgate.com
                </p>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-16 w-full">
            <div className="mb-8 flex">
              <div className="w-full">
                <h4 className="mb-2 font-bold text-dark ">Customer Support</h4>
                <p className="text-sm text-body-color dark:text-dark-6">
                  Our support team is available around the clock to address any
                  concerns or queries you may have.
                </p>
              </div>
            </div>
            <div className="mb-8 flex">
              <div className="w-full">
                <h4 className="mb-2 font-bold text-dark ">
                  Feedback and Suggestions
                </h4>
                <p className="text-sm text-body-color dark:text-dark-6">
                  We value your feedback and are continuously working to
                  improve. Your input is crucial for us to provide the best
                  service possible.
                </p>
              </div>
            </div>
            <div className="mb-8 flex">
              <div className="w-full">
                <h4 className="mb-2 font-bold text-dark ">
                  Business Inquiries
                </h4>
                <p className="text-sm text-body-color dark:text-dark-6">
                  For all business inquiries, please contact us using the
                  details provided.
                </p>
              </div>
            </div>
            <div className="mb-8 flex">
              <div className="w-full">
                <h4 className="mb-2 font-bold text-dark ">
                  General Information
                </h4>
                <p className="text-sm text-body-color dark:text-dark-6">
                  For general information, please contact us using the details
                  provided.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
