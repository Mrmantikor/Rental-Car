import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getCarById } from "../../redux/operations";
import {
  selectCar,
  selectLoading,
  selectError,
} from "../../redux/selectors.js";

import CarElementLeft from "../../components/CarElementLeft/CarElementLeft.jsx";
import CarElementRight from "../../components/CarElementRight/CarElementRight.jsx";
import Loader from "../../components/Loader/Loader.jsx";

import s from "./CatalogElement.module.scss";

const CatalogElement = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const car = useSelector(selectCar);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (id) {
      dispatch(getCarById(id));
    }
  }, [dispatch, id]);

  if (isLoading) return <Loader />;

  if (error) return <div className={s["error"]}>Error: {error}</div>;

  if (!car) return <div className={s["notFound"]}>Car not found</div>;

  return (
    <section className={s["catalog"]}>
      <CarElementLeft img={car.img} brand={car.brand} />
      <CarElementRight car={car} />
    </section>
  );
};

export default CatalogElement;
