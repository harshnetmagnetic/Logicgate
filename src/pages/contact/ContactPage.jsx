import { RiMailFill, RiMap2Fill, RiPhoneFill } from "@remixicon/react";
import PropTypes from "prop-types";

const ContactPage = () => {
  return (
    <>
      <section className="bg-white mt-32 flex flex-col gap-8 mx-auto max-w-[1440px] px-4  lg:px-8">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 h-full lg:mb-0 ">
              <div className="flex flex-col gap-6 mb-4">
                <div className="bg-primary h-1 w-12"></div>
                <h2 className="text-3xl font-bold sm:text-4xl">Contact Us</h2>
                <p className="max-w-3xl text-lg">
                  Reach out to us anytime, we&apos;re just a phone call or a
                  visit away.
                </p>
              </div>
              <div className="flex flex-col mt-12">
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-full bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <RiPhoneFill size={32} />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-lg font-bold text-dark ">
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
                    <h4 className="mb-1 text-lg font-bold text-dark ">
                      Email Address
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      info@yourdomain.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-16 w-full">
                <div className="mb-8 flex">
                  <div className="w-full">
                    <h4 className="mb-2 font-bold text-dark ">
                      Customer Support
                    </h4>
                    <p className="text-sm text-body-color dark:text-dark-6">
                      Our support team is available around the clock to address
                      any concerns or queries you may have.
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
                      For general information, please contact us using the
                      details provided.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative rounded-2xl bg-white z-10 p-8 border dark:bg-dark-2 sm:p-12 shadow-md">
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 mb-8">
                  <h3 className="text-3xl font-bold text-dark">Get in Touch</h3>
                  <p className="text-base text-body-color dark:text-dark-6">
                    We&apos;ll get back to you as soon as possible
                  </p>
                </div>
                <div className="flex gap-2">
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="First Name"
                  />
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Last Name"
                  />
                </div>

                <ContactInputBoxWithIcon
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  icon={<RiMailFill size={20} />}
                />
                <ContactInputBox
                  type={"text"}
                  name="phone"
                  placeholder="Phone Number"
                />
                <ContactTextArea
                  row="6"
                  placeholder="Your message"
                  name="details"
                  defaultValue=""
                />

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
        <>
          {/* component */}
          <section className="overflow-hidden body-font relative mt-32">
            <div className=" bg-white">
              <iframe
                width="100%"
                height="480"
                title="map"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              />
            </div>
            <div className="flex max-w-[370px] bg-white absolute bottom-2 rounded-xl p-4 right-2">
              <div className="flex h-[60px] min-w-[60px] items-center justify-center overflow-hidden rounded-full bg-primary/5 text-primary">
                <RiMap2Fill size={32} />
              </div>
              <div className="ml-4">
                <h4 className="mb-2 text-lg font-bold text-dark ">Location</h4>
                <p className="text-sm text-body-color dark:text-dark-6">
                  1234 Street Name, City Name, United States
                </p>
              </div>
            </div>
          </section>
        </>
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

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="relative">
        <input
          type={type}
          className="w-full resize-none rounded-full border border-stroke px-[16px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 placeholder-gray-400 focus-visible:outline-2 focus-visible:outline-blue-100 outline-offset-0"
          placeholder={placeholder}
          name={name}
        />
      </div>
    </>
  );
};
const ContactInputBoxWithIcon = ({ type, placeholder, name, icon }) => {
  return (
    <>
      <div className="relative group">
        <input
          type={type}
          className="w-full resize-none rounded-full border border-stroke px-[14px] py-3 ps-11 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6 placeholder-gray-400 focus-visible:outline-2 focus-visible:outline-blue-100 outline-offset-0"
          placeholder={placeholder}
          name={name}
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none opacity-100 text-gray-400 group-focus-within:text-primary">
          {icon}
        </div>
      </div>
    </>
  );
};

ContactInputBox.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};

ContactTextArea.propTypes = {
  row: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
};

ContactInputBoxWithIcon.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.node,
};
