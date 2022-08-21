import { useEffect, useState } from "react";

interface Iprops {
  start: number;
  diuration: number;
  end: number;
}
const CounterUp = (props: Iprops) => {
  const { start, diuration, end } = props;
  const [timer, setTimer] = useState<number>(start);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer < end) {
        setTimer((prev) => prev + 1);
      } else {
        clearInterval(interval);
        // setTimer(end);
      }
    }, (end - start) / diuration);
    return () => clearInterval(interval);
  }, [timer]);
  return <div>{timer}</div>;
};
export default CounterUp;
