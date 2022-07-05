import classes from "./backdrop.module.scss";
interface Props {
  click(): void;
  type:"full" |"area";
}
const Backdrop = (props: Props) => {
  
  return <div onClick={props.click} className={`${classes.backdrop} ${classes[props.type]}`}></div>;
};

Backdrop.defaultProps= {
type:"full"
}

export default Backdrop;
