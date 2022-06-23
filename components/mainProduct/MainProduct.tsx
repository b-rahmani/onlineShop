// import React from "react"
import AllProduct from "../allProduct/allProduct";
import FilterProducts from "../FilterProducts/FilterProducts";
import {filters} from "../../filterData/filterData";
import classes from "./mainProducts.module.scss";

const MainProducts: React.FC = () => {

  
  return (
    <main className={`${classes.mainProductsDivider} container`} id="main">
   
      <FilterProducts filters={filters}/>
      {/* filters section
      products section  */}
      {/* <div style={{ background: "blue", height: "1400px" }}></div> */}
      <AllProduct />
    </main>
  );
};
export default MainProducts;
