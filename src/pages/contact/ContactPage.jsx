import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactPage = () => {
  return (
    <>
      <section className="bg-white mt-32 flex flex-col gap-8 mx-auto max-w-[1440px] px-4  lg:px-8">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
