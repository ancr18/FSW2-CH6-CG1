import Banner from "../components/LandingPages/Banner";
import Hero from "../components/LandingPages/Hero";
import Navigation from "../components/LandingPages/Navbar";
import Service from "../components/LandingPages/Service";
import Testimonial from "../components/LandingPages/Testimonial";
import WhyUs from "../components/LandingPages/WhyUs";
import Faq from "../components/LandingPages/Faq";
import Footer from "../components/LandingPages/Footer";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Service />
      <WhyUs />
      <Testimonial />
      <Banner />
      <Faq />
    </>
  );
}
