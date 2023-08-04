import type { NextPage } from "next";
import SwipBanner from "../components/swipBanner/SwipBanner";
import MainProducts from "../components/mainProduct/MainProduct";
import SortMobile from "../components/sortProducts/SortMobile";
import FilterMobile from "../components/FilterProducts/FilterMobile";
import Backdrop from "../components/backdrop/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { closeFocusInput } from "../store/searchFocusSlice";
import AllProductProvider, {
  AllProductContext,
} from "../store/ContextAllProduct";

import SliderDataProvider, {
  SingleSliderDataTypes,
  SliderData,
  SliderType,
} from "../store/ContextSlider";
// import { allProductsMock } from "./api/allProduct";
import { vercelClient } from "../utils/axios";
import { useEffect, useState } from "react";

const Home: NextPage = (props: any) => {
  const dispatch = useDispatch();
  const isFocusInput = useSelector(
    (state: RootState) => state.searchFocus.isSearchFocus
  );
  // const [allProductState, setAlllProduct] = useState([]);
  // const [loading, setIsloading] = useState(true);

  // const getAllProduct = async () => {
  //   const { data } = await vercelClient.get("/api/allProduct",{
  //     params:{}
  //   });
  //   return data;
  // };

  // useEffect(() => {
  //   getAllProduct()
  //     .then((res) => {
  //       setAlllProduct(res);
  //     })
  //     .finally(() => setIsloading(false));
  // }, []);
  const sliderData = Array.from(Array(10).keys()).map(
    (p: any, ind: number): SingleSliderDataTypes => ({
      id: ind + 1,
      image: `/images/sliders/s${ind + 1}.jpg`,
      title: (ind + 1).toString(),
    })
  );

  return (
    <>
      {/* when search is focusing */}
      {isFocusInput && (
        <Backdrop click={() => dispatch(closeFocusInput())} type="area" />
      )}
      <SliderDataProvider>
        <SwipBanner />
      </SliderDataProvider>

    
      <AllProductProvider>
        <MainProducts />
      </AllProductProvider>

      <SortMobile />
      {/* <FilterMobile /> */}
    </>
  );
};

// export const getStaticProps = async () => {
//   const { data: allProducts } = await vercelClient.get("api/allProduct");
//   // const { data: sliderData } = await vercelClient.get("/api/slider");
//   // const allProducts = allProductsMock;

//   // const { data: FakeProd } = await axios.get(
//   //   "https://fakestoreapi.com/products"
//   // );

//   const sliderData = Array.from(Array(10).keys()).map(
//     (p: any, ind: number) => ({
//       image: `/images/sliders/s${ind + 1}.jpg`,
//       id: ind + 1,
//       title: ind + 1,
//     })
//   );
//   if (allProducts && sliderData) {
//     return {
//       props: {
//         products: allProducts,
//         SliderData: sliderData,
//       },
//     };
//   }
// };

export default Home;
