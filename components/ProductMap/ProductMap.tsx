import classes from "./productMap.module.scss";
import { singleProduct } from "../../filterData/fakeProductData";
import ProductCard from "../productCard/ProductCard";
const ProductMap = () => {
  return (
    <div className={classes.productMapLayout}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
        <>
          <ProductCard key={item} data={singleProduct} />
        </>
      ))}
      {/* <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div> */}
    </div>
  );
};
export default ProductMap;
