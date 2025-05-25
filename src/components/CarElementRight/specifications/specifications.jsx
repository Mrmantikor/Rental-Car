import { Icon } from "../../../assets/Icon/Icon";
import s from "./specifications.module.scss";

const Specifications = ({ year, type, fuelConsumption, engineSize }) => {
  return (
    <div className={s["specifications-box"]}>
      <p className={s["title"]}>Car Specifications:</p>

      <div className={s["spec-item"]}>
        <Icon className={s["icon-calendar"]} name="calendar" />
        <p className={s["label"]}>Year: {year}</p>
      </div>

      <div className={s["spec-item"]}>
        <Icon className={s["icon-car"]} name="car" />
        <p className={s["label"]}>Type: {type}</p>
      </div>

      <div className={s["spec-item"]}>
        <Icon className={s["icon-fuel"]} name="fuel" />
        <p className={s["label"]}>Fuel consumption: {fuelConsumption}</p>
      </div>

      <div className={s["spec-item"]}>
        <Icon className={s["icon-gear"]} name="gear" />
        <p className={s["label"]}>Engine size: {engineSize}</p>
      </div>
    </div>
  );
};

export default Specifications;
