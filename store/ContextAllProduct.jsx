import axios from "axios";
import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import { productType } from "../components/SingleProduct/SingleProduct";
// export type Dictionary = {
//   rating: { rate: number; count: number };
//   [key: string]: string | object | number;
// };
// export type AllProducts = Dictionary[];

// interface IContext {
//   allProductState: productType[];
//   loading: boolean;
//   metadata:any;
//   // sliderData: SingleSliderDataTypes[];
// }

export const AllProductContext = createContext();

// interface Iprops {
//   children: React.ReactNode;
// }

const AllProductProvider = (props) => {
  const [allProductState, setAlllProduct] = useState();
  const [query, setQuery] = useState({});
  const [loading, setIsloading] = useState(true);
  const [metadata, setmetadata] = useState({ totalCount: 1, pageSize: 6 });
  const [filters, setFilters] = useState([]);
  const [sorts, setSorts] = useState([]);
  const Router = useRouter();

  const getAllProduct = async () => {
    setIsloading(true);
    try {
      const { data } = await axios.get(
        "http://ramin021.pythonanywhere.com/products/",
        {
          params: { ...Router.query },
        }
      );
      setIsloading(false);
      setAlllProduct(data.results);
      setmetadata({ totalCount: data.count, pageSize: data.page_size });
      setFilters(data.filters);
      setSorts(data.sorts);
    } catch (error) {
      setIsloading(false);
    }

    // const { sort, ...FilterQ } = Router.query;
    //=> filterQ={isExist:"1",maxPrice:12500,...}

    // if (Object.keys(FilterQ).length > 0) {
    //   return filtered;
    // } else {
    //   return data;
    // }
  };
  const compare = Object.keys(Router.query).length > 0;

  useEffect(() => {
    if (Router.query) {
      getAllProduct();
      // .then((res) => {
      //   setAlllProduct(res.result);
      // })
      // .catch((er) => console.log(er))
      // .finally(() => setIsloading(false));
    }
  }, [compare]);

  return (
    <AllProductContext.Provider
      value={{ allProductState, loading, metadata, filters, sorts }}
    >
      {props.children}
    </AllProductContext.Provider>
  );
};

export default AllProductProvider;
