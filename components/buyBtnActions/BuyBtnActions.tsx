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
import { productType } from "../SingleProduct/SingleProduct";
import RemoveIcon from "../icons/RemoveIcon";
import { joinClassModules } from "../../utils/utils";
import { toast, ToastContainer } from "react-toastify";

interface Props {
  product: productType;
}

const BuyBtnActions = (props: Props) => {
  const ProductinBasket = useSelector((state: RootState) =>
    state.basket.basket.find(
      (item: basketProductType) => item.id === props.product?.id
    )
  );
  const dispatch = useDispatch();

  const increaseCountProduct = () => {
    dispatch(increase(props.product));
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
    dispatch(decrease(props.product));
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
    dispatch(removeFromBasket(props.product));
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
    dispatch(addToBasket(props.product));
    toast.success("محصول به سبد اضافه شد ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  let Btn;
  if (ProductinBasket) {
    Btn = (
      <div
        className={joinClassModules(classes.addToBasket, classes.advanceMode)}
      >
        <button onClick={increaseCountProduct}>+</button>
        {ProductinBasket.quantity}
        {ProductinBasket.quantity !== 1 ? (
          <button onClick={decreaseCountProduct}>-</button>
        ) : (
          <button onClick={removeProduct}>
            <RemoveIcon color="white" />
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
    <>
      {Btn}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
export default BuyBtnActions;
