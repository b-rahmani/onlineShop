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

   
   
     let filtered = await data.filter((product: any) => {
        let isValid = true;
        for (const key in FilterQ) {
          if (key === "min_price") {
            isValid = isValid && product.price >= +FilterQ[key]!;
          } else if (key === "max_price") {
            isValid = isValid && product.price <= +FilterQ[key]!;
          } else if (key === "category") {
            isValid = isValid && product[key].name === FilterQ[key]!;
          } else if (key === "isExist") {
            isValid =
              isValid &&
              product[key].stock > 0 &&
              Boolean(+(FilterQ[key] as string));
          } else if (key === "isDiscount") {
            isValid = isValid && product.discount > 0 && FilterQ[key] == "1";
          } else if (key.includes("color")) {
            isValid =
              isValid &&
              product.attribute.items.some(
                (option: any) =>
                  option.value === decodeURIComponent(FilterQ[key]!.toString())
              );
          } else if (key.includes("customHead")) {
            isValid = isValid && product.customHead === FilterQ[key];
          } else {
            isValid = isValid && product[key] == FilterQ[key];
          }
        }
        return isValid;
      });
    
  
   

    if (Object.keys(FilterQ).length > 0) {
      return filtered;
    } else {
      return data;
    }
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
