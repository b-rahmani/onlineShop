import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  basketProductType,
  decrease,
  increase,
  removeFromBasket,
} from "../../store/basketProductsSlice";
import { RootState } from "../../store/store";
import { motion } from "framer-motion";
import classes from "./buyBtnActions.module.scss";
import {
  AttributeItemType,
  AttributeType,
  productType,
} from "../SingleProduct/SingleProduct";
import RemoveIcon from "../icons/RemoveIcon";
import { joinClassModules } from "../../utils/utils";
import { toast, ToastContainer } from "react-toastify";

interface Props {
  product: productType;
  attribute?: AttributeItemType;
  attributeType?: string;
  outline?: boolean;
}

const BuyBtnActions = (props: Props) => {

  
  const basketProduct = useSelector((state: RootState) =>
    state.basket.basket.find(
      (item) =>
        item.id === props.product?.id &&
        item.selectedAttribute?.size === props.attribute?.size &&
        item.selectedAttribute?.color === props.attribute?.color 
    )
  );
  const dispatch = useDispatch();

  const increaseCountProduct = () => {
    dispatch(increase({ product: props.product, attribute: props.attribute }));
    toast.success("تعداد محصول افزوده شد ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const decreaseCountProduct = () => {
    dispatch(decrease({ product: props.product, attribute: props.attribute }));
    toast.success("تعداد محصول کاهش یافت ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const removeProduct = () => {
    dispatch(
      removeFromBasket({ product: props.product, attribute: props.attribute })
    );
    toast.success("محصول از سبد حذف شد ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const addToBasketHandler = () => {
    console.log("selected attributes",props.attribute)
    if (props.attribute!.stock > 0) {
      dispatch(
        addToBasket({
          product: props.product,
          attribute: props.attribute,
          attributeType: props.attributeType,
        })
      );
      toast.success("محصول به سبد اضافه شد ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  let Btn;
  if (
    basketProduct
    // &&
    // basketProduct.selectedAttribute.value === props.attribute?.value
  ) {
    Btn = (
      <div
        className={joinClassModules(
          classes.addToBasket,
          classes.advanceMode,
          props.outline ? classes.outline : ""
        )}
      >
        <button
          disabled={props.product.stock <= basketProduct.quantity}
          onClick={increaseCountProduct}
        >
          +
        </button>
        <div className={classes.number}>
          <span>{basketProduct.quantity}</span>
          <span className={props.product.stock <= basketProduct.quantity?classes.active:""}>حداکثر</span>
        </div>
        {basketProduct.quantity !== 1 ? (
          <button onClick={decreaseCountProduct}>-</button>
        ) : (
          <button onClick={removeProduct}>
            <RemoveIcon color={props.outline ? "#ef4056" : "white"} />
          </button>
        )}{" "}
      </div>
    );
  } else {
    Btn = (
      <motion.button
        disabled={!!props.product?.stock && props.product?.stock < 1}
        className={classes.addToBasket}
        whileTap={{ scale: 0.95 }}
        onClick={addToBasketHandler}
      >
        <span>افزودن به سبد</span>
      </motion.button>
    );
  }

  return (
    <div>
      {Btn}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
export default BuyBtnActions;
