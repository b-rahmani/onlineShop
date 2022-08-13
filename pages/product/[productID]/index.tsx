import SingleProduct, {
  productType,
  PropsSingleProductType,
} from "../../../components/SingleProduct/SingleProduct";
import { GetStaticProps } from "next";

import { vercelClient } from "../../../utils/axios";
import { allProductsMock } from "../../../filterData/fakeProductData";
import { MongoClient } from "mongodb";
import { Db } from "../../../utils/db-connect";

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

  // try {
  //   // const { data: allProduct } = await vercelClient.get("/api/allData");

  //   // const product = await allProduct?.find(
  //   //   (p: productType) => p.id == params?.productID
  //   // );

  //   const allProduct = allProductsMock;
  //   const product = await allProduct?.find(
  //     (p: productType) => p.id == params?.productID
  //   );

  //   return {
  //     props: {
  //       product: product,
  //       // related: allProduct,
  //     },
  //     revalidate: 10,
  //   };
  // } catch (error) {
  //   console.log(error);
  // }
  //

  const url = `mongodb+srv://${Db.USER}:${Db.PASSWORD}@cluster0.zisqoh9.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  const dbName = Db.DB_NAME;

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("allProducts");

    let findResult;

    findResult = await collection.find({}).toArray();
    // }
    client.close();
    console.log(findResult);
    const converted = await findResult.map((item: any) => ({
      ...item,
      _id: item._id.toString(),
    }));

    const product = await converted?.find(
      (p: productType) => p.id == params?.productID
    );
    return {
      props: {
        product: product,
        related: converted,
      },
      revalidate: 10,
    };
  } catch (er) {
    client.close();

    return {
      props: {
        err: "some problem",
      },
    };
  }

  //
};
export const getStaticPaths = async () => {
  // try {
  // const { data } = await vercelClient.get("/api/allData");
  // const appIds = await data?.map((el: productType) => ({
  //   params: { productID: el.id.toString() },
  // }));

  const url = `mongodb+srv://${Db.USER}:${Db.PASSWORD}@cluster0.zisqoh9.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  const dbName = Db.DB_NAME;

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("allProducts");

    let findResult;

    findResult = await collection.find({}).toArray();
    // }
    client.close();

    const appIds = await findResult.map((item: any) => ({
      params: { productID: item.id.toString() },
    }));

    // const appIds = [
    //   { params: { productID: "1" } },
    //   { params: { productID: "2" } },
    // ];

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
