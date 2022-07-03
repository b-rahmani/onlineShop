import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import SwipBanner from "../components/swipBanner/SwipBanner";
import { useRouter } from "next/router";
import MainProducts from "../components/mainProduct/MainProduct";

const Home: NextPage = (props: any) => {
  const router = useRouter();

  return (
    // <Layout search>
    <>
      <SwipBanner />
      <MainProducts/>
    </>
    // </Layout>
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
