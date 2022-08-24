import { useEffect, useState } from "react";
import classes from "../aboutus.module.scss";
interface Iprops {
  start: number;
  diuration: number;
  end: number;
  plus?: boolean;
  locale?: boolean;
  isVisible: boolean;
}
const CounterUp = (props: Iprops) => {
  const { start, diuration, end, plus, locale, isVisible } = props;
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    if (diuration < end - start) {
      setTimer(end - diuration);
    } else {
      setTimer(diuration / (end - start));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof start === "number" && typeof timer === "number") {
        if (timer < end) {
          setTimer((prev) => prev! + 1);
        } else {
          clearInterval(interval);
          // setTimer(end);
        }
      }
    }, 1);

    return () => clearInterval(interval);
  }, [timer]);
  return (
    <div className={classes.countup}>
      {isVisible ? (
        <>
          <p>{locale ? timer.toLocaleString() : timer}</p>
          <span>{plus ? "+" : ""}</span>
        </>
      ) : (
        <>
          <p>{end.toLocaleString()}</p>
          <span>{plus ? "+" : ""}</span>
        </>
      )}
    </div>
  );
};
export default CounterUp;
