import { Formik, Form, Field } from "formik";
import { brands } from "../../data/brands";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCarsList } from "../../redux/operations.js";
import s from "./FilterCars.module.scss";

const FilterCars = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const brandRef = useRef(null);
  const priceRef = useRef(null);
  const dispatch = useDispatch();

  const initialValues = {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  };

  const handleSubmit = (values) => {
    const changed = Object.keys(values).some((key) => {
      if (key === "minMileage" || key === "maxMileage")
        return values[key] !== "";
      return values[key] !== initialValues[key];
    });
    if (!changed) return;

    dispatch(getCarsList({ ...values, page: 1, limit: 12 }));
  };

  const priceOptions = [10, 20, 30, 40, 50, 60, 70, 80];

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        brandRef.current &&
        !brandRef.current.contains(e.target) &&
        priceRef.current &&
        !priceRef.current.contains(e.target)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={s.filter}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <Form className={s.filter__form}>
            <div className={s.filter__group} ref={brandRef}>
              <p className={s.filter__label}>Car brand</p>
              <div
                className={`${s.filter__select} ${
                  openDropdown === "brand" ? s.filter__select_open : ""
                }`}
                onClick={() => toggleDropdown("brand")}
              >
                {values.brand || "Choose a brand"}
              </div>
              {openDropdown === "brand" && (
                <ul className={s.filter__dropdown}>
                  {brands.map((brand) => (
                    <li
                      key={brand}
                      className={s.filter__option}
                      onClick={() => {
                        setFieldValue("brand", brand);
                        setOpenDropdown(null);
                      }}
                    >
                      {brand}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className={s.filter__group} ref={priceRef}>
              <p className={s.filter__label}>Price / 1 hour</p>
              <div
                className={`${s.filter__select} ${
                  openDropdown === "price" ? s.filter__select_open : ""
                }`}
                onClick={() => toggleDropdown("price")}
              >
                {values.rentalPrice
                  ? `To $${values.rentalPrice}`
                  : "Choose a price"}
              </div>
              {openDropdown === "price" && (
                <ul className={s.filter__dropdown}>
                  {priceOptions.map((price) => (
                    <li
                      key={price}
                      className={s.filter__option}
                      onClick={() => {
                        setFieldValue("rentalPrice", price);
                        setOpenDropdown(null);
                      }}
                    >
                      {price}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className={s.filter__group}>
              <p className={s.filter__label}>Car mileage / km</p>
              <div className={s.filter__inputs}>
                <Field
                  type="number"
                  name="minMileage"
                  className={`${s.filter__input} ${s.filter__input_from}`}
                  placeholder="From"
                />
                <Field
                  type="number"
                  name="maxMileage"
                  className={`${s.filter__input} ${s.filter__input_to}`}
                  placeholder="To"
                />
              </div>
            </div>

            <button type="submit" className={s.filter__button}>
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FilterCars;
