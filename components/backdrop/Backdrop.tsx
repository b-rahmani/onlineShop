import classes from "./backdrop.module.scss";
interface Props {
  click(): void;
}
const Backdrop = (props: Props) => {
  return <div onClick={props.click} className={classes.backdrop}></div>;
};
export default Backdrop;
