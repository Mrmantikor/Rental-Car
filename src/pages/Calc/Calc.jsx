import { useState } from "react";

import s from "./Clicks.module.scss";

const Calc = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const handlePlusClick = () => {
    setCounter(counter + step);
  };
  const handleMinusClick = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - step);
  };

  const handleResetClick = () => {
    setCounter(0);
    setStep(1);
  };
  return (
    <>
      <h1 className={s["Calc_total"]}>Total: {counter}</h1>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />

      <div className={s["Calc"]}>
        <button
          onClick={handlePlusClick}
          className={s["Calc__plus"]}
          type="button"
        >
          Plus
        </button>
        <button
          onClick={handleMinusClick}
          className={s["Calc__minus"]}
          type="button"
        >
          Minus
        </button>
        <button
          onClick={handleResetClick}
          className={s["Calc__reset"]}
          type="button"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Calc;
