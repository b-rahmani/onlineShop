import SingleProduct, {
  productType,
  PropsSingleProductType,
} from "../../../components/SingleProduct/SingleProduct";

import { allProductDb } from "../../../utils/db-connect";

interface SingleProductType {
  product: productType;
  status?: number;
  related?: productType[];
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

export const getStaticProps = async ({ params }: { [key: string]: any }) => {
  try {
    const data = await allProductDb();
    const product = await data?.find(
      (p: productType) => p.id == params?.productID
    );

    return {
      props: {
        product: product,
        related: data,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: {
        err: "some problem",
      },
    };
  }
};
export const getStaticPaths = async () => {
  try {
    const data = await allProductDb();
    const appIds = await data.map((item: any) => ({
      params: { productID: item.id.toString() },
    }));
    return {
      paths: appIds,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
};
export default SingleProductPage;
