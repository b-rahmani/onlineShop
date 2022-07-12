import axios from "axios";
import SingleProduct, {
  productType,
} from "../../../components/SingleProduct/SingleProduct";
import { GetStaticProps } from "next";

interface SingleProductType {
  product: productType;
  status?: number;
}

const SingleProductPage = (props: SingleProductType) => {
  return <SingleProduct product={props.product} status={props.status} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/product/${params?.productID}`
    );

    return {
      props: {
        product: res.data,
      },
      revalidate: 10,
    };
  } catch (er: any) {
    // if(e.response.status===404){
    return {
      // notFound: true,
      props: {
        status: er.response.status,
      },

      // }
    };
  }
};

export async function getStaticPaths() {
  const { data: allProducts } = await axios.get(
    "http://localhost:3000/api/allProduct"
  );

  const appIds = allProducts.map((el: productType) => ({
    params: { productID: el.id.toString() },
  }));

  return {
    paths: appIds,
    fallback: true,
  };
}

export default SingleProductPage;
