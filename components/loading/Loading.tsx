import classes from "./loading.module.scss";
import { joinClassModules } from "../../utils/utils";

interface Iprops {
  type?: "static" | "absolute";
}

const Loading = (props: Iprops) => {
  return (
    <>
      <div className={props.type === "static" ? classes.static : ""}>
        <figure className={classes.container}>
          <div className={joinClassModules(classes.dot, classes.white)}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
        </figure>
      </div>
    </>
  );
};

Loading.defaultProps = {
  type: "absolute",
};
export default Loading;
