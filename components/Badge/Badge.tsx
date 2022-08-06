import { joinClassModules } from "../../utils/utils";
import classes from "./badge.module.scss";

interface PropsTypeBage {
  count: number;
  type?: "absolute" | "static";
}

const Badge = (props: PropsTypeBage) => {
  const { count, type } = props;
  return (
    <div className={joinClassModules(classes.badge, classes[type!])}>
      {count}
    </div>
  );
};

Badge.defaultProps = {
  type: "absolute",
};
export default Badge;
