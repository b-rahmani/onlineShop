
import Cart from "../../components/caetPage/CartPage";
import { productType } from "../../components/SingleProduct/SingleProduct";
import { allProductDb } from "../../utils/db-connect";

interface Iprops {
  slider: productType[];
}

const CartPage = (props: Iprops) => {
  
  return <Cart slider={props.slider} />;
  
};

export const getStaticProps = async () => {
try {
  const data= await allProductDb();
  return {
    props: {
      slider: data,
    },
  };
} catch (error) {
  return {
    props: {
      err: "some problem",
    },
  };
}

 

};
export default CartPage;
