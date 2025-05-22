import s from "./Home.module.scss";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Find your perfect rental car</h1>
      <p className="home__text">
        Reliable and budget-friendly rentals for any journey
      </p>
      <Link className="home__link" to="/catalog">
        View Catalog
      </Link>
    </div>
  );
};

export default Home;
