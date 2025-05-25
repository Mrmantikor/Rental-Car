import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import s from "./Layout.module.scss";
import Loader from "../Loader/Loader.jsx";

const Layout = () => {
  const setActive = ({ isActive }) =>
    isActive ? s["nav__link--active"] : s["nav__link"];

  return (
    <div className={s["container"]}>
      <header className={s["header"]}>
        <NavLink to="/" className={s["header__logo"]}>
          Rental<span className={s["header__logo-span"]}>Car</span>
        </NavLink>
        <nav className={s["nav"]}>
          <NavLink to="/" className={setActive}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={setActive}>
            Catalog
          </NavLink>
        </nav>
      </header>
      <main className={s["main"]}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
