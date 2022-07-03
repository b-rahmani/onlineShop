import {
  conver_to_en_digits,
  conver_to_persian_digits,
} from "../../utils/utils";
import classes from "./productMap.module.scss";
const ProductMap = () => {
  const txt = "سلام من 30 ساله هستم و امسال 1401 است ومن میترکانم ";
  const txt2 = "سلام من ۳۰ ساله هستم و امسال ۱۴۰۱ است ومن میترکانم ";
  return (
    <div className={classes.productMapLayout}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
        <div key={item}></div>
      ))}
      {/* <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div> */}
      <p>{conver_to_persian_digits(txt)} </p>
      <p>{conver_to_en_digits(txt2)} </p>
    </div>
  );
};
export default ProductMap;
