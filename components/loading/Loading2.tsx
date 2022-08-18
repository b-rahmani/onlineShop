import { joinClassModules } from "../../utils/utils";
import classes from "./loading.module.scss";

interface Iprops {
  type?: "static" | "absolute";
}
const Loading2 = (props: Iprops) => {
  return (
    <div
      className={joinClassModules(
        classes.dot,
        props.type === "static" ? classes.static : ""
      )}
    ></div>
  );
};
Loading2.defaultProps = {
  type: "absolute",
};
export default Loading2;
