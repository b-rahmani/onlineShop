import classes from "./CountupBox.module.scss";
import Image from "next/image";
import CounterUp from "../counterUp/CounterUp";

interface Iprops {
  isVisible: boolean;
  imageAddress: string;
  title: string;
  diuration: number;
  start: number;
  end: number;
  plus?: boolean;
  locale: boolean;
}

const CountUpBox = (props: Iprops) => {
  const { title, isVisible, imageAddress, ...countProps } = props;
  return (
    <div className={classes.countUpBox}>
      <div className={classes.CountupImage}>
        <Image src={imageAddress} alt="countup view" layout="fill" />
      </div>
      {isVisible && <CounterUp {...countProps} />}
      <p className={classes.text}>{title}</p>
    </div>
  );
};
export default CountUpBox;
