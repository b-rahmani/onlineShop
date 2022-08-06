import type { NextPage } from "next";
import Cart from "../../components/caetPage/CartPage";
import { productType } from "../../components/SingleProduct/SingleProduct";
import { vercelClient } from "../../utils/axios";

interface Iprops{
  slider:productType[]
}

const CartPage = (props:Iprops) => {
  return <Cart slider={props.slider}/>;
};

export const getStaticProps = async () => {
  const { data: allProducts } = await vercelClient.get("api/allProduct");

  return {
    props: {
      slider: allProducts,
    },
  };
};
export default CartPage;
