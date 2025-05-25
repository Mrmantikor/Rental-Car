import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import s from "./CarElementLeft.module.scss";
import { useState } from "react";

const validationSchema = yup.object({
  name: yup.string().trim().required("Name is required").max(30),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .max(50),
  date: yup
    .date()
    .required("Date is required")
    .min(new Date(), "Date must be in the future"),
  comment: yup.string(),
});

const CarElementLeft = ({ img, brand }) => {
  const [dateFocused, setDateFocused] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    toast.success("Booking successful");
    resetForm();
    setDateFocused(false);
  };

  return (
    <div className={s["car-left"]}>
      <div className={s["car-left__img"]}>
        <img src={img} alt={brand} />
      </div>
      <div className={s["car-left__form"]}>
        <h2 className={s["car-left__title"]}>Book your car now</h2>
        <p className={s["car-left__text"]}>
          Stay connected! We are always ready to help you.
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className={s["car-left__form-inner"]}>
              <Field
                name="name"
                type="text"
                placeholder="Name*"
                maxLength={30}
                className={`${s["car-left__input"]} ${
                  errors.name && touched.name ? s["input-error"] : ""
                }`}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={s["error-message"]}
              />

              <Field
                name="email"
                type="email"
                placeholder="Email*"
                maxLength={50}
                className={`${s["car-left__input"]} ${
                  errors.email && touched.email ? s["input-error"] : ""
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={s["error-message"]}
              />

              <div className={s["car-left__date-wrapper"]}>
                <Field
                  name="date"
                  type="date"
                  className={`${s["car-left__input"]} ${s["car-left__date"]} ${
                    errors.date && touched.date ? s["input-error"] : ""
                  }`}
                  onFocus={() => setDateFocused(true)}
                  onBlur={(e) => {
                    if (!e.target.value) setDateFocused(false);
                  }}
                />
                {!dateFocused && (
                  <span
                    onClick={() => setDateFocused(true)}
                    className={s["car-left__date-placeholder"]}
                  >
                    Booking date
                  </span>
                )}
              </div>
              <ErrorMessage
                name="date"
                component="div"
                className={s["error-message"]}
              />

              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={s["car-left__textarea"]}
              />

              <button className={s["car-left__button"]} type="submit">
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <Toaster />
    </div>
  );
};

export default CarElementLeft;
