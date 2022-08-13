import axios from "axios";
import { MongoClient } from "mongodb";
import type { NextPage } from "next";

import Cart from "../../components/caetPage/CartPage";
import { productType } from "../../components/SingleProduct/SingleProduct";
import { allProductsMock } from "../../filterData/fakeProductData";
import { vercelClient } from "../../utils/axios";
import { Db } from "../../utils/db-connect";

interface Iprops {
  slider: productType[];
}

const CartPage = (props: Iprops) => {
  // console.log(props.slider);
  return <Cart slider={props.slider} />;
  // return <p>test</p>;
};

export const getStaticProps = async () => {
  // const { data } = await vercelClient.get("/api/allData");

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
    return {
      props: {
        slider: converted,
      },
    };
  } catch (er) {
    client.close();

    return {
      props: {
        err: "some problem",
      },
    };
  }

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  // return {
  //   props: {
  //     slider: data,
  //   },
  // };
};
export default CartPage;
