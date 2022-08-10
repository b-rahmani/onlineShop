import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
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
  const [loading, setIsloading] = useState(true);
  const Router = useRouter();

  const getAllProduct = async () => {
    const { data } = await vercelClient.get("/api/allProduct", {
      params: { ...Router.query },
    });
    // const selectedSort = Router.query.sort;

    // const sortedData=data.sort(item=>item.)
    return data;
  };

  useEffect(() => {
    if (Router.query) {
      getAllProduct()
        .then((res) => {
          setAlllProduct(res);
        })
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
