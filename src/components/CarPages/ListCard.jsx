import { useContext } from "react";
import Card from "./Card";
import { CarContext } from "../../store/car-context";

export default function ListCard() {
  const { cars, isLoading, error } = useContext(CarContext);
  console.log(cars);

  return (
    <div
      className="d-flex justify-content-center flex-row flex-wrap  gap-5"
      id="list-container"
    >
      {isLoading && <h1 className="mt-5 ">Loading...</h1>}
      {!isLoading &&
        !error &&
        cars.map((car) => (
          <div key={car.id}>
            <Card car={car} />
          </div>
        ))}
      {error && <h1 className="mt-5 ">Error: {error}</h1>}
    </div>
  );
}
