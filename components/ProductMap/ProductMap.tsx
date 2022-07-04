
import classes from "./productMap.module.scss";
const ProductMap = () => {
 
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
     
    </div>
  );
};
export default ProductMap;
