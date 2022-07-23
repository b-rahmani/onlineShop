import Link from "next/link";
import classes from "./cartHoverBox.module.scss";
import Image from "next/image";
import { basketProductType } from "../../store/basketProductsSlice";
import ProductExistCount from "../productExistCount/ProductExistCount";
import BuyBtnActions from "../buyBtnActions/BuyBtnActions";
import { joinClassModules, SumPriceCart } from "../../utils/utils";

interface CartHoverProps {
  cart: basketProductType[];
}

const CartHoverBox = (props: CartHoverProps) => {
  const { cart } = props;
  return (
    <section className={classes.cartBox}>
      <div className={classes.header}>
        <span>{cart.length} کالا</span>
        <Link href={"/cart"}>
          <a className={classes.goCartText}>
            <span>مشاهده سبد خرید</span>
          </a>
        </Link>
      </div>
      <div className={classes.cartItems}>
        {cart &&
          cart?.length > 0 &&
          cart?.map((product) => (
            <div className={classes.cartItem} key={product.id}>
              <Link href={`/product/${product.id}]`}>
                <a className={classes.cartItemImageBox}>
                  <Image
                    src={product?.image}
                    alt={product.title}
                    layout="fill"
                  />
                </a>
              </Link>
              <div className={classes.details}>
                <p className={joinClassModules(classes.title, "ellips-4")}>
                  {product.title}
                </p>
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
                    {product.selectedAttribute?.name}
                  </span>
                </div>
                <ProductExistCount count={product?.stock} />
              </div>
              {/* <div className={classes.actions}>add inc dec</div> */}
              <BuyBtnActions
                product={product}
                attribute={product?.selectedAttribute}
                outline
              />

              <div className={classes.price}>
                <p>{product.price.toLocaleString()}</p>
                <span>تومان</span>
              </div>
            </div>
          ))}
      </div>
      <div className={classes.checkout}>
        <div className={classes.sumPrice}>
          <span className={classes.title}>مبلغ قابل پرداخت</span>
          <p className={classes.price}>
            <span>{SumPriceCart(cart).toLocaleString()}</span>
            <span>تومان</span>
          </p>
        </div>
        <button>ثبت سفارش</button>
      </div>
    </section>
  );
};
export default CartHoverBox;
