import PropTypes from "prop-types";
import { RiMailFill } from "@remixicon/react";

function ContactForm() {
  return (
    <>
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
    </>
  );
}

export default ContactForm;

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
