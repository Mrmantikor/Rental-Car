import { Icon } from "../../../assets/Icon/Icon";
import s from "./specifications.module.css";

const Specifications = ({ year, type, fuelConsumption, engineSize }) => {
  return (
    <div className={s.specifications_box}>
      <p>Car Specifications:</p>
      <div className={s.year}>
        <Icon className={s["new"]} name="calendar" />
        <p>Year: {year}</p>
      </div>
      <div className={s.type}>
        <Icon className={s["car"]} name="car" />
        <p>Type: {type}</p>
      </div>
      <div className={s.consumption}>
        <Icon className={s["fuel"]} name="fuel" />
        <p>Fuel consumption: {fuelConsumption}</p>
      </div>
      <div className={s.engine_size}>
        <Icon className={s["gear"]} name="gear" />
        <p>Engine size: {engineSize}</p>
      </div>
    </div>
  );
};

export default Specifications;
