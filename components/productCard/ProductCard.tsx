import { motion } from "framer-motion";
import Image from "next/image";
import ExpandIcon from "../icons/ExpandIcon";
import ShareIcon from "../icons/ShareIcon";
import { shareMotion, expandMotion } from "../../utils/motions";
import classes from "./productCard.module.scss";
import StarIcon from "../icons/StarIcon";
import { priceDiscounted } from "../../utils/utils";
import ExistIcon from "../icons/ExistIcon";
interface ProductCard {
  key: string | number;
  data: any;
}

const ProductCard = (props: ProductCard) => {
  const { data } = props;
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      key={props.key}
      className={classes.productCard}
    >
      <motion.div variants={shareMotion} className={classes.share}>
        <ShareIcon />
      </motion.div>
      <motion.div variants={expandMotion} className={classes.expand}>
        <ExpandIcon />
      </motion.div>
      <p className={classes.customHead}>{data.customHead}</p>
      <div className={classes.productImage}>
        <Image alt={data.category} src={data.image} layout="fill" />
      </div>
      <div className={`${classes.cardTitle} ellips-2`}>{data.title}</div>
      <div className={classes.existRating}>
        <div className={classes.exist}>
          {/* id length>10 ? "موجود در انبار + آیکن" :"تنها * عدد باقی مانده:"موجود نیست"*/}
          {+data.stock > 10 ? (
            <>
              <ExistIcon />
              <span>موجود در انبار</span>
            </>
          ) : +data.stock < 10 && +data.stock !== 0 ? (
            <span className={classes.danger}>
              تنها {data.stock} عدد در انبار باقی مانده
            </span>
          ) : (
            ""
          )}
        </div>
        <div className={classes.rating}>
          <span>{data.rating.rate}</span>
          <StarIcon fill="gold" />
        </div>
      </div>
      <div className={classes.priceBox}>
        <div className={classes.price}>
          {data.discount > 0 && (
            <span className={classes.discount}>{data.discount + "%"}</span>
          )}

          {data.discount > 0 ? (
            <div className={classes.pricSec}>
              <span className={classes.calculatePrice}>
                {priceDiscounted(data.price, data.discount).toLocaleString()}
              </span>
              <span className={classes.priceText}>تومان</span>
            </div>
          ) : (
            <div className={classes.pricSec}>
              <span className={classes.calculatePrice}>
                {data.price.toLocaleString()}
              </span>
              <span className={classes.priceText}>تومان</span>
            </div>
          )}
        </div>
        <div className={classes.oldPrice}>
          <span>{data.discount > 0 && data.price.toLocaleString()}</span>
        </div>
      </div>
    </motion.div>
  );
};
export default ProductCard;
