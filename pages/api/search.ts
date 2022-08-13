import { MongoClient } from "mongodb";
import { NextApiResponse, NextApiRequest } from "next";
import { Db } from "../../utils/db-connect";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = `mongodb+srv://${Db.USER}:${Db.PASSWORD}@cluster0.zisqoh9.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  const dbName = Db.DB_NAME;
  // const coll = process.env.PRODUCTS_COLLECTION!;
  // const collection_P=process.env.PRODUCTS_COLLECTION_P;
  async function run() {
    try {
      await client.connect();
      // console.log("Connected successfully to server");
      const db = client.db(dbName);
      const collection = db.collection("allProducts");

      let findResult;
      if (
        req.query.search &&
        typeof req.query.search === "string" &&
        req.query.search.trim() !== "" &&
        typeof req.query.search === "string"
      ) {
        const all = await collection.find({}).toArray();
        const search = decodeURIComponent(req.query.search);
        findResult = all.filter((item) => item.title.includes(search));
      }

      res.status(200).json(findResult);
    } catch (er) {
      res.status(500).json({ message: "اشکالی پیش آمده" });
    } finally {
      () => client.close();
    }
  }

  run();

  // res.status(200).json(allProductsMock);
}
