import { MongoClient, ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

import { allProductsMock } from "../allProduct";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // if (typeof req.query.productID === "string") {
  const productID = req.query.productID;
  let product;
  //get one product
  const url = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@online-shop.ps6bz.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  const dbName = process.env.DB_NAME;
  async function run() {
    try {
      await client.connect();
      console.log("Connected successfully to server");
      const db = client.db(dbName);
      const collection = db.collection("products");
      const product = await collection.findOne({
        _id: new ObjectId(productID.toString()),
      });

      if (!product) {
        return res.status(404).json({ message: "محصول مورد نظر یافت نشد ." });
      }

      return res.status(200).json(product);
    } catch (er) {
      res.status(500).json({ message: "اشکالی پیش آمده" });
    } finally {
      () => client.close();
    }
  }

  run();

  //
  // product = allProductsMock.find((el) => el.id.toString() === productID);

  // if (!product) {
  //   return res.status(404).json({ message: "محصول مورد نظر یافت نشد ." });
  // }

  // return res.status(200).json(product);
};
export default handler;
