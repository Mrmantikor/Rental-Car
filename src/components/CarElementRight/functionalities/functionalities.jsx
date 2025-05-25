import { Icon } from "../../../assets/Icon/Icon";
import s from "./functionalities.module.scss";

const Functionalities = ({ accessories, functionalities }) => {
  return (
    <div className={s["functionalities"]}>
      <p className={s["functionalities__title"]}>
        Accessories and functionalities:
      </p>
      <ul className={s["functionalities__list"]}>
        {accessories.map((item, index) => (
          <li className={s["functionalities__list-item"]} key={`acc-${index}`}>
            <Icon className={s["functionalities__icon"]} name="check" />
            <p className={s["functionalities__text"]}>{item}</p>
          </li>
        ))}
        {functionalities.map((item, index) => (
          <li className={s["functionalities__list-item"]} key={`func-${index}`}>
            <Icon className={s["functionalities__icon"]} name="check" />
            <p className={s["functionalities__text"]}>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Functionalities;
