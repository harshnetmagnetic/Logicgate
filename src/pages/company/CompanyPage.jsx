// import Team from "./Team";
import Story from "./Story";
import Quote from "./Quote";
import CompanyInfo from "./CompanyInfo";

function CompanyPage() {
  return (
    <section className="bg-white mt-32 flex flex-col gap-8 mx-auto max-w-[1440px] px-4  lg:px-8">
      <CompanyInfo />
      <Quote />
      <Story />
      {/* <Team /> */}
    </section>
  );
}

export default CompanyPage;
