import Rate from "rc-rate";
import { joinClassModules, priceDiscounted } from "../../utils/utils";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import HeartIcon from "../icons/HeartIcon";
import classes from "./singleProduct.module.scss";
import "rc-rate/assets/index.css";
import ImageSide from "../ImageSide/ImageSide";
import { useState } from "react";
import BuyBtnActions from "../buyBtnActions/BuyBtnActions";

export interface productType {
  id: number | string;
  title: string;
  image: string;
  price: number;
  discount: number;
  description: string;
  rating: { rate: number; count: number };
  customHead?: string;
  stock: number;
  images?: string[];
  colors?: { name: string; value: string }[];
}
export interface ParamsType {
  [key: string]: any;
}

export interface PropsSingleProductType {
  product?: productType;
  status?: number;
}

const SingleProduct = (props: PropsSingleProductType) => {
  const [isLikeProduct, setIsLikeProduct] = useState(false);

  const favoritClickHandler = () => {
    setIsLikeProduct((prev) => !prev);
  };

  if (!props.product && props.status !== 404) {
    return <p>loading...</p>;
  }
  if (props.status === 404) {
    return <p>not found product</p>;
  }

  return (
    <div className={joinClassModules(classes.singleProductPage)}>
      <BreadCrumb />
      <section className={classes.divider}>
        <div className={classes.detailSide}>
          <div className={classes.header}>
            <h2 className={classes.productName}>
              {props.product?.title.substring(0, 20)}
            </h2>
            <button
              className={classes.productLike}
              onClick={favoritClickHandler}
            >
              <HeartIcon heartType={isLikeProduct ? "fill" : "outline"} />
            </button>
          </div>
          <h4 className={joinClassModules(classes.description, "ellips-3")}>
            {props.product?.description}
          </h4>
          {/* if stock !==0 (exist product ) show price section else shoe ناموجود  */}
          {props.product?.stock && props.product?.stock > 0 ? (
            <div className={classes.price}>
              {props.product.discount ? (
                <>
                  <div className={classes.discountSec}>
                    <div className={classes.oldPrice}>
                      {" "}
                      {props.product.price.toLocaleString()}
                    </div>
                    <div className={classes.discount}>
                      {props.product.discount + "%"}
                    </div>
                  </div>
                  <div className={classes.calculatedPrice}>
                    <span>
                      {priceDiscounted(
                        props.product.price,
                        props.product.discount
                      ).toLocaleString()}
                    </span>
                    <span className={classes.priceText}>تومان</span>
                  </div>
                </>
              ) : (
                <div className={classes.calculatedPrice}>
                  {props.product.price.toLocaleString()}
                </div>
              )}
            </div>
          ) : (
            <p className={classes.notExist}>موجود نیست</p>
          )}
          <div className={classes.Rating}>
            <div className={classes.review}>
              <span>{props.product?.rating.count}</span>
              <span>دیدگاه</span>
            </div>
            <div className={classes.rate}>
              <Rate
                count={4}
                value={+props.product?.rating.rate.toFixed(1)!}
                allowHalf
                disabled
                style={{ direction: "ltr", userSelect: "none" }}
              />
            </div>
          </div>
          <div className={classes.attribute}>
            <span>رنگ</span>
            <div className={classes.attributeValue}>
              {props?.product?.colors?.map((color) => (
                <div className={classes.attributeSelect} key={color.name}>
                  <input
                    type="radio"
                    name="radio"
                    id={color.value}
                    className={classes.radio}
                  />
                  <label
                    htmlFor={color.value}
                    style={{ backgroundColor: color.value }}
                  >
                    <span style={{ border: `2px solid ${color.value}` }}></span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className={classes.buyBtn}>
            <BuyBtnActions product={props?.product!} />
          </div>
        </div>
        <ImageSide product={props.product} />
      </section>
      single product and id is :{props.product?.id}
    </div>
  );
};

export default SingleProduct;
