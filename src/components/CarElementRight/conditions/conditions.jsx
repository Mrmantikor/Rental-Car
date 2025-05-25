import s from "./conditions.module.scss";
import { Icon } from "../../../assets/Icon/Icon";

const Conditions = ({ rentalConditions }) => {
  return (
    <div className={s["conditions"]}>
      <p className={s["conditions__title"]}>Rental conditions:</p>
      <ul className={s["conditions__list"]}>
        {rentalConditions.map((item, index) => (
          <li className={s["conditions__item"]} key={index}>
            <Icon className={s["conditions__icon"]} name="check" />
            <p className={s["conditions__text"]}>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Conditions;
