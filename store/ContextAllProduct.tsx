import axios from "axios";
import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import { productType } from "../components/SingleProduct/SingleProduct";
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
    // const { data } = await vercelClient.get("/api/allProduct", {
    //   params: { ...Router.query },
    // });
    setIsloading(true)
    try {
      const {data}=await axios.get("http://ramin021.pythonanywhere.com/products/",{
        params: { ...Router.query }
      }) 
      setIsloading(false)
      setAlllProduct(data.results)
      console.log("params",Router.query)
    } catch (error) {
      setIsloading(false)
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
      getAllProduct()
        // .then((res) => {
        //   setAlllProduct(res.result);
        // })
        // .catch((er) => console.log(er))
        // .finally(() => setIsloading(false));
    }
  }, [compare]);

  return (
    <AllProductContext.Provider value={{ allProductState, loading }}>
      {props.children}
    </AllProductContext.Provider>
  );
};

export default AllProductProvider;
