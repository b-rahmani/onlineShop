import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Badge from "../Badge/Badge";
import classes from "./cart.module.scss";
import { basketProductType } from "../../store/basketProductsSlice";
import {
  joinClassModules,
  priceDiscounted,
  SumPriceCart,
  SumPriceWithoutDiscountCart,
  your_benefit_buy,
} from "../../utils/utils";
import BuyBtnActions from "../buyBtnActions/BuyBtnActions";
import RelatedSlider from "../relatedSlider/RelatedSlider";
import { productType } from "../SingleProduct/SingleProduct";

interface Iprops {
  slider: productType[];
}

const Cart = (props: Iprops) => {
  const cartItems = useSelector((state: RootState) => state.basket.basket);

  return (
    <div className={classes.cartPage}>
      <div className={classes.titlePage}>
        <div>
          <span>سبد خرید</span>
          <Badge count={cartItems?.length} type="static" />
        </div>
        <p>خرید بعدی</p>
      </div>
      <main>
        <section className={classes.cartitemsContainer}>
          <div className={classes.header}>
            <span>سبد خرید شما</span>
            <p>
              <span></span>
              <span></span>
              <span></span>
            </p>
          </div>
          <span>{cartItems?.length} کالا</span>
          <div className={classes.cartItemsBox}>
            {cartItems?.map((product: basketProductType) => (
              <div
                className={classes.cartItem}
                key={product.id + product.selectedAttribute.value}
              >
                <div className={classes.imageContainer}>
                  <div className={classes.imageBox}>
                    <Image
                      src={product.image}
                      alt={product.title}
                      layout="fill"
                    />
                  </div>
                  <p>{product.customHead}</p>
                </div>
                <div
                  className={joinClassModules(
                    classes.productDetails,
                    "ellips--3"
                  )}
                >
                  <p className={classes.title}>{product.title}</p>
                  <div className={classes.attribute}>
                    <p
                      className={classes.colorAttribute}
                      style={{
                        backgroundColor: product?.selectedAttribute?.value,
                      }}
                    >
                      &nbsp;
                    </p>
                    <span className={classes.attributeName}>
                      {product.selectedAttribute?.faName}
                    </span>
                  </div>
                </div>
                <BuyBtnActions
                  product={product}
                  attribute={product.selectedAttribute}
                  outline
                />

                <div className={classes.price}>
                  {your_benefit_buy(product) > 0 && (
                    <p className={classes.benefit}>
                      <span>{your_benefit_buy(product).toLocaleString()}</span>
                      <span>تومان</span>
                      <span>تخفیف</span>
                    </p>
                  )}
                  <p className={classes.discountedPrice}>
                    <span>
                      {priceDiscounted(
                        product.price,
                        product.discount
                      ).toLocaleString()}
                    </span>
                    <span>تومان</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={classes.checkoutContainer}>
          <div className={classes.prices}>
            <p>قیمت کالاها ({cartItems?.length})</p>
            <p>
              <span>
                {SumPriceWithoutDiscountCart(cartItems).toLocaleString()}
              </span>
              <span>تومان</span>
            </p>
          </div>
          <div className={classes.prices}>
            <p> جمع سبد خرید</p>
            <p>
              <span>{SumPriceCart(cartItems).toLocaleString()}</span>
              <span>تومان</span>
            </p>
          </div>
          <p className={classes.info}>
            هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه
            می‌شود
          </p>
          <div className={joinClassModules(classes.prices, classes.benefit)}>
            <p> سود شما از خرید</p>
            <p>
              <span>
                (
                {(
                  (SumPriceCart(cartItems) /
                    SumPriceWithoutDiscountCart(cartItems)) *
                  100
                ).toFixed()}
                %)
                {" " +
                  (
                    SumPriceWithoutDiscountCart(cartItems) -
                    SumPriceCart(cartItems)
                  ).toLocaleString()}
              </span>
              <span>تومان</span>
            </p>
          </div>
          <button className={classes.checkout}>ادامه</button>
        </section>
      </main>
      <RelatedSlider related={props.slider} text="بازدید های اخیر شما" />
    </div>
  );
};
export default Cart;
