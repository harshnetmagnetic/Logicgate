import Clients from "./Clients";
import Hero from "./Hero";
import ChooseUs from "./ChooseUs";
import Services from "./Services";
import Testimonials from "./Testimonials";
import SectionCta from "./SectionCta";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <Hero />
      <Clients />
      <ChooseUs />
      <Services />
      <Testimonials />
      <SectionCta />
      <Footer />
    </div>
  );
}

export default Home;
