import type { NextPage } from "next";
import Cart from "../../components/caetPage/CartPage";
import { productType } from "../../components/SingleProduct/SingleProduct";
import { allProductsMock } from "../../filterData/fakeProductData";
import { vercelClient } from "../../utils/axios";

interface Iprops {
  slider: productType[];
}

const CartPage = (props: Iprops) => {
  return <Cart slider={props.slider} />;
  // return <p>test</p>;
};

export const getStaticProps = async () => {
  const { data } = await vercelClient.get("/api/allData");
  // const allProducts=allProductsMock;

  return {
    props: {
      slider: data,
    },
  };
};
export default CartPage;
