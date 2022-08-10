import { MongoClient } from "mongodb";
import { NextApiResponse, NextApiRequest } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.zisqoh9.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  const dbName = process.env.DB_NAME;
  const coll = process.env.PRODUCTS_COLLECTION!;
  // const collection_P=process.env.PRODUCTS_COLLECTION_P;
  async function run() {
    try {
      await client.connect();
      // console.log("Connected successfully to server");
      const db = client.db(dbName);
      const collection = db.collection(coll);

      let findResult;
      const sortMap = [
        { faName: "پرفروش ترین", value: "7", name: "discount", sortmode: -1 },
        { faName: "ارزانترین", value: "20", name: "price", sortmode: 1 },
        { faName: "گرانترین", value: "21", name: "price", sortmode: -1 },
        { faName: "مرتبط ترین", value: "22", name: "category", sortmode: -1 },
        { faName: "پربازدید ترین", value: "4", name: "rating", sortmode: -1 },
        { faName: "جدید ترین", value: "1", name: "stock", sortmode: -1 },
      ];
      const Query = req.query;
      const sort = Query?.sort;
      console.log(Query);
      // console.log(Query.sort)
      const selectedSort =
        sortMap?.find((el) => el.value == sort) || sortMap[0];
      // console.log("selectedsort name", selectedSort.name);
      // if (req.query.search && typeof req.query.search === "string") {
      //   const all = await collection.find({}).toArray();
      //   const search = decodeURIComponent(req.query.search);
      //   findResult = all.filter((item) => item.title.includes(search));
      // } else {

      findResult = await collection
        .find({})
        .sort({ [selectedSort.name]: selectedSort.sortmode as any })
        .toArray();
      // }

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
