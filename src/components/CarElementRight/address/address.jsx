import { Icon } from "../../../assets/Icon/Icon";
import s from "./address.module.scss";

const Address = ({ address, mileage }) => {
  const parseAddress = (input, type = "default") => {
    if (!input?.trim()) return "Address not specified";

    const parts = input.trim().split(/\s+/);
    if (parts.length < 5) return "Invalid address format";

    const city = parts[3].replace(/,/g, "");
    const code = parts[4];

    return `${city}${type === "second" ? ", " : " | "}${code}`;
  };

  return (
    <div className={s["address"]}>
      <div className={s["address__item"]}>
        <Icon className={s["address__icon"]} name="location" />
        <p className={s["address__text"]}>{parseAddress(address, "second")}</p>
      </div>
      <p className={s["address__mileage"]}>Mileage: {mileage}km</p>
    </div>
  );
};

export default Address;
