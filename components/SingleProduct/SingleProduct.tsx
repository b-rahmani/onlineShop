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
  name: string;
  // image: string;
  price: number;
  discount: number;
  description: string;
  rate:number;
  customHead?: string;
  stock: number;
  image?: string[];
  variations:AttributeItemType[];
  attribute?: AttributeType;
  categoty?: categotyProductType;
  info?:any[];
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
  size?: string;
  id:number;
  color:string;
}

export interface AttributeItemType {
  name?: string;
  value?: string;
  faName?: string;
  size:string;
  id:number;
  color:string;
  price:number;
  stock:number;
  type?:string;
  discount:any;
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
    props.product &&props.product.variations.length>0 && props.product?.variations[0]
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
                props.product?.name
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
          <h4 className={joinClassModules(classes.description, "ellips-4")}>
            {props.product?.description}
          </h4>
          <ul className={classes.info}>
          {props?.product?.info!.map(item=><li key={item?.id}>{item.value}</li>)}
          </ul>
          <div className={classes.desktopOnly}>
            {selectedAttribute.stock && selectedAttribute.stock > 0 ? (
              <div className={classes.price}>
                {selectedAttribute.discount ? (
                  <>
                    <div className={classes.discountSec}>
                      <div className={classes.oldPrice}>
                        {" "}
                        {selectedAttribute.price.toLocaleString()}
                      </div>
                      <div className={classes.discount}>
                        {selectedAttribute.discount + "%"}
                      </div>
                    </div>
                    <div className={classes.calculatedPrice}>
                      <span>
                        {priceDiscounted(
                          selectedAttribute.price,
                          selectedAttribute.discount
                        ).toLocaleString()}
                      </span>
                      <span className={classes.priceText}>تومان</span>
                    </div>
                  </>
                ) : (
                  <div className={classes.calculatedPrice}>
                    <span>{selectedAttribute.price.toLocaleString()}</span>
                    <span className={classes.priceText}>تومان</span>
                  </div>
                )}
              </div>
            ) : (
              <p className={classes.notExist}>موجود نیست</p>
            )}
          </div>
          <div className={classes.Rating}>
            <div className={classes.review}>
              <span>{props.product?.rate}</span>
              <span>امتیاز</span>
            </div>
            <div className={classes.rate}>
              <Rate
                count={4}
                value={+props.product?.rate!}
                allowHalf
                disabled
                style={{ direction: "ltr", userSelect: "none" }}
              />
            </div>
          </div>
          {props.product?.variations &&
            props.product?.variations?.length > 0 && (
              <ProductAttribute
                attribute={props.product?.variations}
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
                        <span className={classes.priceText}>تومان</span>
                      </div>
                    </>
                  ) : (
                    <div className={classes.calculatedPrice}>
                      <span>{props.product.price.toLocaleString()}</span>
                      <span className={classes.priceText}>تومان</span>
                    </div>
                  )}
                </div>
              ) : (
                <p className={classes.notExist}>موجود نیست</p>
              )}
            </div>
            <BuyBtnActions
              product={props?.product!}
              attribute={selectedAttribute}
              attributeType={props?.product?.attribute?.name}
            />
          </div>
        </div>
        <ImageSide product={props.product!} />
      </section>
      {/* <div className={classes.line}></div> */}

      {/* related */}
      {/* <RelatedSlider related={props.related} /> */}
    </div>
  );
};

export default SingleProduct;
