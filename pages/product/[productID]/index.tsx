import SingleProduct, {
  productType,
  PropsSingleProductType,
} from "../../../components/SingleProduct/SingleProduct";
import { GetStaticProps } from "next";

import { vercelClient } from "../../../utils/axios";
import { allProductsMock } from "../../../filterData/fakeProductData";

interface SingleProductType {
  product: productType;
  status?: number;
  related?: productType[];
}

const SingleProductPage = (props: SingleProductType) => {
  return (
    // <SingleProduct
    //   product={props.product}
    //   status={props.status}
    //   related={props.related}
    // />
    <p>test</p>
  );
};

export const getStaticProps = async ({ params }: { [key: string]: any }) => {
  // const { data } = await vercelClient.get<productType>(
  //   `/api/product/${params?.productID}`
  // );

  try {
    // const { data: allProduct } = await vercelClient.get("/api/allData");

    // const product = await allProduct?.find(
    //   (p: productType) => p.id == params?.productID
    // );

    const allProduct = allProductsMock;
    const product = await allProduct?.find(
      (p: productType) => p.id == params?.productID
    );

    return {
      props: {
        product: product,
        // related: allProduct,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log(error);
  }

  // } else {
  //   return {
  // //     // notFound: true,
  //     props: {
  //       status: 404,
  //     },
  //   };
  // }
};
export const getStaticPaths = async () => {
  try {
    // const { data } = await vercelClient.get("/api/allData");
    // const appIds = await data?.map((el: productType) => ({
    //   params: { productID: el.id.toString() },
    // }));

    const appIds = [
      { params: { productID: "1" } },
      { params: { productID: "2" } },
    ];

    // if (data && appIds) {
    return {
      paths: appIds,
      fallback: true,
    };
    // }
  } catch (error) {
    console.log(error);
  }
};
export default SingleProductPage;
