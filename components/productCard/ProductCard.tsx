import { motion } from "framer-motion";
import { memo } from "react";
import Image from "next/image";
import ExpandIcon from "../icons/ExpandIcon";
import ShareIcon from "../icons/ShareIcon";
import { shareMotion, expandMotion } from "../../utils/motions";
import classes from "./productCard.module.scss";
import StarIcon from "../icons/StarIcon";
import { joinClassModules, priceDiscounted } from "../../utils/utils";
import ExistIcon from "../icons/ExistIcon";
import Link from "next/link";
import { openIsExtend, openShare } from "../../store/hoverActionsSlice";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/router";
import ProductExistCount from "../productExistCount/ProductExistCount";

interface ProductCard {
  key: string | number;
  data: any;
  layoutId?: string;
  break?: boolean;
  rateOff?: boolean;
  hoverOff?: boolean;
}

const ProductCard = (props: ProductCard) => {
  const { data } = props;

  const dispatch = useDispatch();

  const Router = useRouter();

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  return (
    <motion.div
      initial="rest"
      whileHover={props.hoverOff ? "" : "hover"}
      // whileTap="hoverFix"
      animate="rest"
      key={props.key}
      className={classes.productCard}
    >
      <motion.div
        variants={shareMotion}
        className={classes.share}
        onClick={() => dispatch(openShare(`${origin}/${data.id}`))}
        // id dont work  use pathname
      >
        <ShareIcon />
      </motion.div>
      <motion.div
        variants={expandMotion}
        className={classes.expand}
        onClick={() =>
          dispatch(openIsExtend({ image: data.image, id: data.id }))
        }
      >
        <ExpandIcon />
      </motion.div>

      <Link href={`/product/${props.data.id.toString()}`}>
        <a className={classes.link}>
          <p className={classes.customHead}>{data.customHead}</p>
          <div
            className={joinClassModules(
              classes.productImage,
              props.break ? classes.break : ""
            )}
          >
            <Image alt={data.category} src={data.image} layout="fill" />
          </div>
          <div className={classes.detailSec}>
            <div className={`${classes.cardTitle} ellips-2`}>
              {data.name}
              <br />
              <br />
            </div>
         {data.rating &&   <div
              className={classes.existRating}
              style={{
                visibility:
                  +data.stock < 1 && props.rateOff ? "hidden" : "visible",
              }}
            >
              <ProductExistCount count={data.stock} />
              <div
                className={joinClassModules(
                  classes.rating,
                  props.rateOff ? classes.hidden : ""
                )}
              >
                <span>{data.rating.rate}</span>
                <StarIcon fill="gold" />
              </div>
            </div>}
            <div className={classes.priceBox}>
              {data.stock ? (
                <>
                  <div className={classes.price}>
                    {data.discount > 0 && (
                      <span className={classes.discount}>
                        {data.discount + "%"}
                      </span>
                    )}

                    {data.discount > 0 ? (
                      <div className={classes.pricSec}>
                        <span className={classes.calculatePrice}>
                          {priceDiscounted(
                            data.price,
                            data.discount
                          ).toLocaleString()}
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
                    <span>
                      {data.discount > 0 && data.price.toLocaleString()}
                    </span>
                  </div>
                </>
              ) : (
                <p>اتمام موجودی</p>
              )}
            </div>
          </div>
        </a>
      </Link>
    </motion.div>
  );
};

ProductCard.defaultProps = {
  break: true,
};

export default memo(ProductCard);
