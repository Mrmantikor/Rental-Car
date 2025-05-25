import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Address from "../../components/CarElementRight/address/address.jsx";
import { setFavoriteCar } from "../../redux/slice.js";
import { selectFavoriteCars } from "../../redux/selectors.js";
import s from "./CarListItem.module.scss";

export const CarListItem = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteCars = useSelector(selectFavoriteCars);
  const dispatch = useDispatch();

  const {
    id,
    year,
    type,
    rentalPrice,
    rentalCompany,
    mileage,
    img,
    address,
    brand,
    model,
  } = data;

  useEffect(() => {
    setIsFavorite(favoriteCars.includes(id));
  }, [favoriteCars, id]);

  const handleFavoriteClick = () => {
    dispatch(setFavoriteCar(id));
  };

  return (
    <article className={s.car}>
      <div className={s["car__image-container"]}>
        <img className={s["car__image"]} src={img} alt={brand} />
        <button
          onClick={handleFavoriteClick}
          type="button"
          className={`${s["car__favorite-btn"]} ${
            isFavorite ? s["car__favorite-btn_active"] : ""
          }`}
          aria-pressed={isFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className={s["car__favorite-icon"]}
            fill={isFavorite ? "#3470ff" : "#f2f4f7"}
          >
            {isFavorite ? (
              <path d="M16 2.628c8.876-9.124 31.068 6.842 0 27.372-31.068-20.528-8.876-36.496 0-27.372z" />
            ) : (
              <path d="M16 5.496l-1.434-1.474c-3.366-3.46-9.538-2.266-11.766 2.084-1.046 2.046-1.282 5 0.628 8.77 1.84 3.63 5.668 7.978 12.572 12.714 6.904-4.736 10.73-9.084 12.572-12.714 1.91-3.772 1.676-6.724 0.628-8.77-2.228-4.35-8.4-5.546-11.766-2.086l-1.434 1.476zM16 30c-30.666-20.264-9.442-36.080-0.352-27.714 0.12 0.111 0.237 0.225 0.352 0.342 0.113-0.118 0.23-0.232 0.352-0.34 9.088-8.372 30.314 7.446-0.352 27.712z" />
            )}
          </svg>
        </button>
      </div>

      <div className={s["car__info-top"]}>
        <h2 className={s["car__name"]}>
          {brand} <span className={s["car__model"]}>{model}</span>, {year}
        </h2>
        <p className={s["car__price"]}>${rentalPrice}</p>
      </div>

      <div className={s["car__info-center"]}>
        <Address address={address} mileage={mileage} />
        <span className={s["car__separator"]}>|</span>
        <p className={s["car__rental-company"]}>{rentalCompany}</p>
        <span className={s["car__separator"]}>|</span>
      </div>

      <div className={`${s["car__info-center"]} ${s["car__info-bottom"]}`}>
        <p className={s["car__type"]}>{type}</p>
        <span className={s["car__separator"]}>|</span>
        <p className={s["car__mileage"]}>{mileage} km</p>
      </div>

      <Link className={s["car__link"]} to={`/catalog/${id}`}>
        Read more
      </Link>
    </article>
  );
};

export default CarListItem;
