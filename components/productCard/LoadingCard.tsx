import classes from "./productCard.module.scss";
import StarIcon from "../icons/StarIcon";
import { joinClassModules, priceDiscounted } from "../../utils/utils";

interface Iprops {
  break: boolean;
}

const LoadingCard = (props: Iprops) => {
  return (
    <div className={classes.productCard}>
      <a className={classes.link}>
        <p className={classes.customHead}></p>
        <div
          className={joinClassModules(
            classes.productImage,
            props.break ? classes.break : "",
            "gradient"
          )}
        ></div>
        <div className={classes.detailSec}>
          <div className={`${classes.cardTitle} ellips-2 gradient`}>
            <br />
            <br />
          </div>
          <div className={joinClassModules(classes.existRating, "gradient" ,classes.skeleton)}>
            <div className={joinClassModules(classes.rating)}></div>
            <br />
            <br />
          </div>
          <div className={classes.priceBox}></div>
        </div>
      </a>
    </div>
  );
};

export default LoadingCard;
