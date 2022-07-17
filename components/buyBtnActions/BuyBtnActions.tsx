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
  attribute?: { name: string; value: string };
}

const BuyBtnActions = (props: Props) => {
  // const ProductinBasket = useSelector((state: RootState) =>
  //   state.basket.basket.find(
  //     (item: basketProductType) => item.id === props.product?.id
  //   )
  // );

  const basketProduct = useSelector((state: RootState) =>
    state.basket.basket.find(
      (item) =>
        item.id === props.product?.id &&
        item.selectedAttribute?.value === props.attribute?.value
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
    if (props.product.stock > 0) {
      dispatch(
        addToBasket({ product: props.product, attribute: props.attribute })
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
        className={joinClassModules(classes.addToBasket, classes.advanceMode)}
      >
        <button onClick={increaseCountProduct}>+</button>
        {basketProduct.quantity}
        {basketProduct.quantity !== 1 ? (
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
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
export default BuyBtnActions;
