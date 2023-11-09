import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Navigation from "../components/Navbar";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import WhyUs from "../components/WhyUs";
import Faq from "../components/Faq";

export default function LandingPage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Service />
      <WhyUs />
      <Testimonial />
      <Banner />
      <Faq />
    </>
  );
}
