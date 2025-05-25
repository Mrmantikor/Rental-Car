import { useEffect, useRef } from "react";
import s from "./Loader.module.scss";

const Loader = () => {
  const pointerRef = useRef();

  useEffect(() => {
    const duration = 2000;
    const start = performance.now();

    const animate = (time) => {
      const elapsed = time - start;
      const progress = (elapsed % duration) / duration;

      const angle = -90 + 180 * progress;

      let color;
      if (Math.abs(progress - 0.5) < 0.03) {
        color = "#ffea00";
      } else if (progress < 0.5) {
        color = "#00f5a0";
      } else {
        color = "#ff3c38";
      }

      if (pointerRef.current) {
        pointerRef.current.style.transform = `rotate(${angle}deg)`;
        pointerRef.current.style.background = color;
        pointerRef.current.style.boxShadow = `0 0 12px ${color}`;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  const marks = [
    { percent: 0, angleDeg: 180, color: "#00f5a0" },
    { percent: 50, angleDeg: 90, color: "#ffea00" },
    { percent: 100, angleDeg: 0, color: "#ff3c38" },
  ];

  const radius = 70;
  const centerX = 100;
  const centerY = 95;

  const numbers = marks.map(({ percent, angleDeg, color }) => {
    const angleRad = (angleDeg * Math.PI) / 180;

    const x = centerX + radius * Math.cos(angleRad);
    const y = centerY + radius * Math.sin(angleRad);

    return (
      <span
        key={percent}
        className={`${s.number} ${
          color === "#ffea00" ? s["number--yellow"] : ""
        }`}
        style={{
          left: `${x}px`,
          top: `${y - (percent === 50 ? 15 : 0)}px`,
          color,
          textShadow: `0 0 4px ${color}`,
        }}
      >
        {percent}
      </span>
    );
  });

  const markX = centerX + radius * Math.cos((90 * Math.PI) / 180);
  const markY = centerY + radius * Math.sin((90 * Math.PI) / 180);

  return (
    <div className={s["loader-wrapper"]}>
      <div className={s.loader}>
        <div ref={pointerRef} className={s.pointer} />
        {numbers}
        <div
          className={s.mark}
          style={{
            left: `${markX}px`,
            top: `${markY}px`,
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
