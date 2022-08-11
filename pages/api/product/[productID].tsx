import { MongoClient, ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  //get one product
  const productID = req.query.productID;
  const url = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.zisqoh9.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  const dbName = process.env.DB_NAME;
  // const coll=process.env.PRODUCTS_COLLECTION!;
  // const collection_P=process.env.PRODUCTS_COLLECTION_P;
  async function run() {
    try {
      await client.connect();

      const db = client.db(dbName);
      const collection = db.collection("allProducts");

      const product = await collection.findOne({
        id: +productID,
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
  if (typeof req.query.productID === "string") {
    run();

    //
    // product = allProductsMock.find((el) => el.id.toString() === productID);

    // if (!product) {
    //   return res.status(404).json({ message: "محصول مورد نظر یافت نشد ." });
    // }

    // return res.status(200).json(product);
  }
};
export default handler;
