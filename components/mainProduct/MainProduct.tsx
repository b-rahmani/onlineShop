// import React from "react"
import AllProduct from "../allProduct/allProduct";
import FilterProducts from "../FilterProducts/FilterProducts";
// import { filters } from "../../filterData/filterData";
import classes from "./mainProducts.module.scss";

const MainProducts = () => {
  return (
    <main className={`${classes.mainProductsDivider} container`} id="main">
      {/* <FilterProducts  /> */}

      <AllProduct />
    </main>
  );
};
export default MainProducts;
