import { Link } from "react-router-dom";
import s from "./Home.module.scss";

const Home = () => {
  return (
    <div className={s["home"]}>
      <h1 className={s["home__title"]}>Find your perfect rental car</h1>
      <p className={s["home__text"]}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Link className={s["home__link"]} to="/catalog">
        View Catalog
      </Link>
    </div>
  );
};

export default Home;
