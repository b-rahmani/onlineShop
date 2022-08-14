import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import { object } from "yup";
import { productType } from "../components/SingleProduct/SingleProduct";
import { vercelClient } from "../utils/axios";
import { SingleSliderDataTypes } from "./ContextSlider";
export type Dictionary = {
  rating: { rate: number; count: number };
  [key: string]: string | object | number;
};
export type AllProducts = Dictionary[];

interface IContext {
  allProductState: productType[];
  loading: boolean;
  // sliderData: SingleSliderDataTypes[];
}

export const AllProductContext = createContext<IContext>({} as IContext);

interface Iprops {
  children: React.ReactNode;
}

const AllProductProvider = (props: Iprops) => {
  const [allProductState, setAlllProduct] = useState<productType[]>([]);
  const [query, setQuery] = useState({});
  const [loading, setIsloading] = useState(true);
  const Router = useRouter();

  const getAllProduct = async () => {
    const { data } = await vercelClient.get("/api/allProduct", {
      params: { ...Router.query },
    });

    const { sort, ...FilterQ } = Router.query;
    //=> filterQ={isExist:"1",maxPrice:12500,...}

    return data;

    // if (Object.keys(FilterQ).length > 0) {
    //   return filtered;
    // } else {
    //   return data;
    // }
  };

  useEffect(() => {
    if (Router.query) {
      getAllProduct()
        .then((res) => {
          setAlllProduct(res);
        })
        .catch((er) => console.log(er))
        .finally(() => setIsloading(false));
    }
  }, [Router.query]);

  return (
    <AllProductContext.Provider value={{ allProductState, loading }}>
      {props.children}
    </AllProductContext.Provider>
  );
};

export default AllProductProvider;
