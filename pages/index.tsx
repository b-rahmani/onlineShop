import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import SwipBanner from "../components/swipBanner/SwipBanner";
import { useRouter } from "next/router";
import MainProducts from "../components/mainProduct/MainProduct";
import Modal from "../components/modal/Modal";
import { useState } from "react";

const Home: NextPage = (props: any) => {
  const router = useRouter();

  const [test, setTest] = useState(false);

  return (
    // <Layout search>
    <>
      <SwipBanner />
      <MainProducts />
      <Modal type="fixBottom" backdrop show={test}>
        children
      </Modal>

     
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
