import CarsList from "../../components/CarsList/CarsList.jsx";
import FilterCars from "../../components/FilterCars/FilterCars.jsx";
const Catalog = () => {
  return (
    <div>
      <FilterCars />
      <CarsList />
    </div>
  );
};

export default Catalog;
