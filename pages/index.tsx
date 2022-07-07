import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import SwipBanner from "../components/swipBanner/SwipBanner";
import { useRouter } from "next/router";
import MainProducts from "../components/mainProduct/MainProduct";
import SortMobile from "../components/sortProducts/SortMobile";
import FilterMobile from "../components/FilterProducts/FilterMobile";
import Backdrop from "../components/backdrop/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { closeFocusInput } from "../store/searchFocusSlice";

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
      <SwipBanner />
      <MainProducts />
      <SortMobile />
      <FilterMobile />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      data: "hello",
    },
  };
};

export default Home;
