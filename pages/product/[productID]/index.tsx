import SingleProduct, {
  productType,
  PropsSingleProductType,
} from "../../../components/SingleProduct/SingleProduct";
import { GetStaticProps } from "next";

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
  // const { data } = await vercelClient.get<productType>(
  //   `/api/product/${params?.productID}`
  // );
  const { data: allProduct } = await vercelClient.get("/api/allProduct");
  const data = await allProduct?.find(
    (p: productType) => p.id === Number(params?.productID)
  );

  if (allProduct && data) {
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
  }
};
export async function getStaticPaths() {
  const { data: allProducts } = await vercelClient.get(`/api/allProduct`);

  // const allProducts = allProductsMock;

  const appIds = allProducts?.map((el: productType) => ({
    params: { productID: el.id.toString() },
  }));

  if (allProducts && appIds) {
    return {
      paths: appIds,
      fallback: false,
    };
  }
}

export default SingleProductPage;
