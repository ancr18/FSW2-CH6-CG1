import FilterBox from "../components/CarPages/FilterBox";
import ListCard from "../components/CarPages/ListCard";
import Hero from "../components/LandingPages/Hero";
import CarContextProvider from "../store/car-context";

export default function CarPage() {
  return (
    <CarContextProvider>
      <Hero />
      <FilterBox />
      <ListCard />
    </CarContextProvider>
  );
}
