import type { NextPage } from "next";
import SwipBanner from "../components/swipBanner/SwipBanner";
import { useRouter } from "next/router";
import MainProducts from "../components/mainProduct/MainProduct";
import SortMobile from "../components/sortProducts/SortMobile";
import FilterMobile from "../components/FilterProducts/FilterMobile";
import Backdrop from "../components/backdrop/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { closeFocusInput } from "../store/searchFocusSlice";
import { AllProductContext } from "../store/ContextAllProduct";
import axios from "axios";
import { SliderData } from "../store/ContextSlider";
import { productType } from "../components/SingleProduct/SingleProduct";

const Home: NextPage = (props: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isFocusInput = useSelector(
    (state: RootState) => state.searchFocus.isSearchFocus
  );

  return (
    <>
      {/* when search is focusing */}
      {isFocusInput && (
        <Backdrop click={() => dispatch(closeFocusInput())} type="area" />
      )}
      <SliderData.Provider value={props.SliderData}>
        <SwipBanner />
      </SliderData.Provider>
      <AllProductContext.Provider value={props.products}>
        <MainProducts />
      </AllProductContext.Provider>
      <SortMobile />
      <FilterMobile />
    </>
  );
};

export const getStaticProps = async () => {
  const { data: allProducts } = await axios.get("/api/allProduct");

  // const { data: FakeProd } = await axios.get(
  //   "https://fakestoreapi.com/products"
  // );

  // const SliderData = FakeProd.filter((_: any, index: number) => index <= 9).map(
  //   (p: any, ind: number) => ({
  //     image: `/images/sliders/s${ind + 1}.jpg`,
  //     id: p.id,
  //     title: p.title,
  //   })
  // );

  return {
    props: {
      products: allProducts,
      // SliderData: SliderData,
    },
  };
};

export default Home;
