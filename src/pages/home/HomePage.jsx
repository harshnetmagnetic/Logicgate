import Clients from "./Clients";
import Hero from "./Hero";
import ChooseUs from "./ChooseUs";
import Services from "./Services";
import Testimonials from "./Testimonials";

function HomePage() {
  return (
    <div className="home">
      <Hero />
      <Clients />
      <ChooseUs />
      <Services />
      <Testimonials />
    </div>
  );
}

export default HomePage;
