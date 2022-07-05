import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import SwipBanner from "../components/swipBanner/SwipBanner";
import { useRouter } from "next/router";
import MainProducts from "../components/mainProduct/MainProduct";
import SortMobile from "../components/sortProducts/SortMobile";
import FilterMobile from "../components/FilterProducts/FilterMobile";
import Backdrop from "../components/backdrop/Backdrop";

const Home: NextPage = (props: any) => {
  const router = useRouter();

  return (
    <>
      {/* when search is focusing */}
      <Backdrop click={() => ""} type="area" />
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
