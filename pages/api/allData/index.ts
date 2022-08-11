import { MongoClient } from "mongodb";
import { NextApiResponse, NextApiRequest } from "next";

const handler=async(req: NextApiRequest, res: NextApiResponse) =>{
  const url = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.zisqoh9.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  const dbName = process.env.DB_NAME;


  async function run() {
    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection("allProducts");

      let findResult;
     
      

      findResult =await  collection.find({}).toArray();
      // }

      client.close()
       res.status(200).json(findResult);
    } catch (er) {
        client.close()
         res.status(500).json({ message: "اشکالی پیش آمده" });
    } 
  }

   run();

  // res.status(200).json(allProductsMock);
}


export default handler;