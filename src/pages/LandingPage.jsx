import Hero from "../components/Hero";
import Navigation from "../components/Navbar";
import Service from "../components/Service";
import WhyUs from "../components/WhyUs";

export default function LandingPage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Service />
      <WhyUs />
    </>
  );
}
