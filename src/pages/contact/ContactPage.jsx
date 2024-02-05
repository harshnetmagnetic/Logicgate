import {
  RiArrowDownLine,
  RiMailAddFill,
  RiMailFill,
  RiMapFill,
  RiPhoneFill,
  RiUser3Fill,
} from "@remixicon/react";
import PropTypes from "prop-types";

const ContactPage = () => {
  return (
    <>
      <section className="bg-white mt-24 flex flex-col gap-8 mx-auto max-w-[1440px] py-8 px-4 sm:py-16 lg:px-8">
        <div className="container">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 h-full max-w-[570px] lg:mb-0 ">
                <div className="flex flex-col gap-6 mb-4">
                  <div className="bg-primary h-1 w-12"></div>
                  <h2 className="text-3xl font-bold sm:text-4xl">
                    Reach out to us anytime
                  </h2>
                  <p className="max-w-3xl text-lg">
                    We&apos;re always ready to listen to your needs and make
                    sure you&apos;re satisfied. Whether you have a question
                    about our services, need assistance or have suggestions, our
                    team is ready to help. Reach out to us anytime, we&apos;re
                    just a phone call or a visit away.
                  </p>
                </div>
                <div className="flex flex-col mt-12">
                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-full bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <RiMapFill size={32} />
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-lg font-bold text-dark dark:text-white">
                        Our Location
                      </h4>
                      <p className="text-base text-body-color dark:text-dark-6">
                        99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-full bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <RiPhoneFill size={32} />
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-lg font-bold text-dark dark:text-white">
                        Phone Number
                      </h4>
                      <p className="text-base text-body-color dark:text-dark-6">
                        (+62)81 414 257 9980
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex w-full max-w-[370px]">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-full bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <RiMailFill size={32} />
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-lg font-bold text-dark dark:text-white">
                        Email Address
                      </h4>
                      <p className="text-base text-body-color dark:text-dark-6">
                        info@yourdomain.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full relative px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-2xl bg-white z-10 p-8 border dark:bg-dark-2 sm:p-12 shadow-md">
                <form className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="font-medium dark:text-white"
                    >
                      Full Name
                    </label>
                    <ContactInputBox
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      svg={<RiUser3Fill size={20} />}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-medium dark:text-white"
                    >
                      Email
                    </label>
                    <ContactInputBox
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                      svg={<RiMailFill size={20} />}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="font-medium dark:text-white"
                    >
                      Phone Number
                    </label>
                    <ContactInputBox
                      type="text"
                      name="phone"
                      placeholder="Enter your phone number"
                      svg={<RiPhoneFill size={20} />}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="details"
                      className="font-medium dark:text-white"
                    >
                      Your Message
                    </label>
                    <ContactTextArea
                      row="6"
                      placeholder="Enter your message"
                      name="details"
                      defaultValue=""
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary border border-transparent px-6 py-3 text-md font-semibold text-white shadow-sm hover:border-primary hover:bg-transparent hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition ease-in-out duration-150 active:scale-95"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded-xl border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 placeholder-gray-400 focus-visible:outline-2 focus-visible:outline-blue-100 outline-offset-0"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name, svg }) => {
  return (
    <>
      <div className="relative">
        <input
          type={type}
          className="w-full resize-none rounded-full border border-stroke px-[14px] py-3 ps-11 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 placeholder-gray-400 focus-visible:outline-2 focus-visible:outline-blue-100 outline-offset-0"
          placeholder={placeholder}
          name={name}
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none opacity-100">
          {svg}
        </div>
      </div>
    </>
  );
};

ContactInputBox.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  svg: PropTypes.node,
};

ContactTextArea.propTypes = {
  row: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
};
