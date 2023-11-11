import Banner from "../components/LandingPage/Banner";
import Hero from "../components/LandingPage/Hero";
import Navigation from "../components/LandingPage/Navbar";
import Service from "../components/LandingPage/Service";
import Testimonial from "../components/LandingPage/Testimonial";
import WhyUs from "../components/LandingPage/WhyUs";
import Faq from "../components/LandingPage/Faq";
import Footer from "../components/LandingPage/Footer";

export default function LandingPage() {
  return (
    <>
      <Hero landingPage={true} />
      <Service />
      <WhyUs />
      <Testimonial />
      <Banner />
      <Faq />
    </>
  );
}
