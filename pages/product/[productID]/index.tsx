import SingleProduct, {
  productType,
} from "../../../components/SingleProduct/SingleProduct";
import { GetStaticProps } from "next";
import { allProductsMock } from "../../api/allProduct";
import { vercelClient } from "../../../utils/axios";

interface SingleProductType {
  product: productType;
  status?: number;
  related: productType[];
}

const SingleProductPage = (props: SingleProductType) => {
  return (
    <SingleProduct
      product={props.product}
      status={props.status}
      related={props.related}
    />
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await vercelClient.get(`/api/product/${params?.productID}`);
  const { data: allProduct } = await vercelClient.get("/api/allProduct");

  // const productFind = allProductsMock.find(
  //   (p) => p.id.toString() === params?.productID
  // );

  if (data && allProduct) {
    return {
      props: {
        product: data,
        related: allProduct,
      },
      revalidate: 10,
    };
  } else {
    return {
      //   // notFound: true,
      props: {
        status: 404,
      },
    };

    // if(e.response.status===404){
    // return {
    //   // notFound: true,
    //   props: {
    //     status: er.response.status,
    //   },

    // }

    // }
  }
};
export async function getStaticPaths() {
  const allProducts = await vercelClient.get(`/api/allProduct`);

  // const allProducts = allProductsMock;

  const appIds = allProducts?.data?.map((el: productType) => ({
    params: { productID: el.id.toString() },
  }));

  return {
    paths: appIds,
    fallback: true,
  };
}

export default SingleProductPage;
