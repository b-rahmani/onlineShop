import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SortProducts from "../sortProducts/SortProducts";

import classes from "./allProduct.module.scss";
import ProductMap from "../ProductMap/ProductMap";

const AllProduct = () => {
  const Router = useRouter();

  useEffect(() => {
    axios.get("/test", {
      params: {
        ...Router.query,
      },
    });
  }, [Router.query]);

  return (
    <section className={classes.allproduct}>
      <SortProducts />
      <ProductMap />
    </section>
  );
};
export default AllProduct;

// {"id":1,
// "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price":109.95,
// "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category":"men's clothing",
// "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// "rating":{"rate":3.9,"count":120}}
