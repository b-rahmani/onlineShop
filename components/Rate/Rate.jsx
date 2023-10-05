import DefaultRate from "rc-rate";
import "rc-rate/assets/index.css";

const Rate = ({ rate, disabled = false, onChange }) => {
  return (
    <DefaultRate
      count={5}
      value={+rate}
      //   allowHalf
      onChange={onChange}
      disabled={disabled}
      style={{ direction: "ltr", userSelect: "none" }}
    />
  );
};

export default Rate;
