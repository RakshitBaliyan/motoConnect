import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/CallToAction";
import Testimonials from "../components/Testimonials";
import PartnerCompanies from "../components/PartnerCompanies";

const Home = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <CallToAction />
      <Testimonials />
      <PartnerCompanies />
    </div>
  );
};

export default Home;
