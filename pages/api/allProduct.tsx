import { MongoClient } from "mongodb";
import { NextApiResponse, NextApiRequest } from "next";
import { Db } from "../../utils/db-connect";
import { raminBaseUrl } from "../../utils/axios";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

{/*

  const url = `mongodb+srv://${Db.USER}:${Db.PASSWORD}@cluster0.zisqoh9.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  const dbName = Db.DB_NAME;
  // const coll = process.env.PRODUCTS_COLLECTION;
  // const collection_P=process.env.PRODUCTS_COLLECTION_P;
  async function run() {
    try {
      await client.connect();
      // console.log("Connected successfully to server");
      const db = client.db(dbName);
      const collection = db.collection("allProducts");

      let findResult;
      const sortMap = [
        { faName: "پرفروش ترین", value: "7", name: "discount", sortmode: -1 },
        { faName: "ارزانترین", value: "20", name: "price", sortmode: 1 },
        { faName: "گرانترین", value: "21", name: "price", sortmode: -1 },
        { faName: "مرتبط ترین", value: "22", name: "category", sortmode: 1 },
        { faName: "پربازدید ترین", value: "4", name: "rating", sortmode: -1 },
        { faName: "جدید ترین", value: "1", name: "stock", sortmode: -1 },
      ];
      const Query = req.query;
      // const sort = Query?.sort;
      const { sort, ...FilterQ } = Query;
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

      if (Object.keys(FilterQ).length > 0) {
        let filtered = await findResult.filter((product: any) => {
          let isValid = true;
          for (const key in FilterQ) {
            console.log(
              key,
              FilterQ[key],
              decodeURIComponent(FilterQ[key]!.toString())
            );
            if (key === "min_price") {
              isValid = isValid && product.price >= +FilterQ[key]!;
            } else if (key === "max_price") {
              isValid = isValid && product.price <= +FilterQ[key]!;
            } else if (key === "category") {
              isValid = isValid && product[key].name === FilterQ[key]!;
            } else if (key === "isExist") {
              isValid =
                isValid &&
                product.stock > 0 &&
                Boolean(+(FilterQ[key] as string));
            } else if (key === "isDiscount") {
              isValid = isValid && product.discount > 0 && FilterQ[key] == "1";
            } else if (key.includes("color")) {
              isValid =
                isValid &&
                product.attribute?.items?.some(
                  (option: any) =>
                    option.value ===
                    decodeURIComponent(FilterQ[key]!.toString())
                );
            } else if (key.includes("customHead")) {
              isValid = isValid && product.customHead === FilterQ[key];
            } else {
              isValid = isValid && product[key] == FilterQ[key];
            }
          }
          return isValid;
        });

        res.status(200).json(filtered);
      } else {
        res.status(200).json(findResult);
      }
    } catch (er) {
      res.status(500).json({ message: "اشکالی پیش آمده" });
    } finally {
      () => client.close();
    }
  }
    */}
    const run =async()=>{
     const {data}=  await raminBaseUrl.get("/products/") 
     return data

    }

  run();

  // res.status(200).json(allProductsMock);
}
