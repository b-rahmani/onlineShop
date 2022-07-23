import classes from "./badge.module.scss";

interface PropsTypeBage{
count:number
}


const Badge = (props:PropsTypeBage) => {
    const {count}=props;
  return (
    <div className={classes.badge}>{count}</div>
  )
}
export default Badge