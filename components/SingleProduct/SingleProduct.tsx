import Rate from "rc-rate";
import { joinClassModules, priceDiscounted } from "../../utils/utils";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import HeartIcon from "../icons/HeartIcon";
import classes from "./singleProduct.module.scss";
import "rc-rate/assets/index.css";
import ImageSide from "../ImageSide/ImageSide";
import { useEffect, useRef, useState } from "react";
import BuyBtnActions from "../buyBtnActions/BuyBtnActions";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import RelatedSlider from "../relatedSlider/RelatedSlider";
import ProductAttribute from "../productAttribute/ProductAttribute";

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
  attribute?: AttributeType;
  categoty?: categotyProductType;
}

export interface categotyProductType {
  name: string;
  value: string;
}

export interface AttributeType {
  name: string;
  faName: string;
  type: "radio" | "select" | "checkbox";
  items: AttributeItemType[];
}

export interface AttributeItemType {
  name: string;
  value: string;
  faName: string;
}

export interface ParamsType {
  [key: string]: any;
}

export interface PropsSingleProductType {
  product?: productType;
  status?: number;
  related?: productType[];
}

const SingleProduct = (props: PropsSingleProductType) => {
  const [isLikeProduct, setIsLikeProduct] = useState(false);

  const [selectedAttribute, setSelectedAttribute] = useState<any>(
    props.product?.attribute?.items && props.product?.attribute?.items[0]
  );
  const basketProduct = useSelector((state: RootState) =>
    state.basket.basket.find(
      (item) =>
        item.id === props.product?.id &&
        selectedAttribute?.value === item.selectedAttribute?.value
    )
  );

  const favoritClickHandler = () => {
    setIsLikeProduct((prev) => !prev);
  };

  if (!props.product && props.status !== 404) {
    return <p>loading...</p>;
  }
  if (props.status === 404) {
    return <p>not found product</p>;
  }

  //   useEffect(()=>{
  // if(basketProduct){
  //   setProductAttributeIndex(props.product?.colors?.findIndex((el,ind)=>ind===))
  // }

  // },[])

  return (
    <div className={joinClassModules(classes.singleProductPage)}>
      <BreadCrumb />
      <section className={classes.divider}>
        <div className={classes.detailSide}>
          <div className={classes.header}>
            <h2 className={classes.productName}>
              {
                props.product?.title
                // .substring(0, 20)
              }
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
          {/* if stock !==0 (exist product ) show price section else shoe ??????????????  */}
          <div className={classes.desktopOnly}>
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
                      <span className={classes.priceText}>??????????</span>
                    </div>
                  </>
                ) : (
                  <div className={classes.calculatedPrice}>
                    <span>{props.product.price.toLocaleString()}</span>
                    <span className={classes.priceText}>??????????</span>
                  </div>
                )}
              </div>
            ) : (
              <p className={classes.notExist}>?????????? ????????</p>
            )}
          </div>
          <div className={classes.Rating}>
            <div className={classes.review}>
              <span>{props.product?.rating.count}</span>
              <span>????????????</span>
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
          {props.product?.attribute &&
            props.product?.attribute?.items.length > 0 && (
              <ProductAttribute
                attribute={props.product?.attribute}
                selectedAttribute={selectedAttribute!}
                setSelectedAttribute={setSelectedAttribute}
              />
            )}

          <div className={classes.buyBtn}>
            <div className={classes.phoneOnly}>
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
                        <span className={classes.priceText}>??????????</span>
                      </div>
                    </>
                  ) : (
                    <div className={classes.calculatedPrice}>
                      <span>{props.product.price.toLocaleString()}</span>
                      <span className={classes.priceText}>??????????</span>
                    </div>
                  )}
                </div>
              ) : (
                <p className={classes.notExist}>?????????? ????????</p>
              )}
            </div>
            <BuyBtnActions
              product={props?.product!}
              attribute={selectedAttribute}
              attributeType={props?.product?.attribute?.name}
            />
          </div>
        </div>
        <ImageSide product={props.product} />
      </section>
      <div className={classes.line}></div>

      {/* related */}
      <RelatedSlider related={props.related} />
    </div>
  );
};

export default SingleProduct;
