
import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { Db } from "../../../utils/db-connect";





export default  function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const url=`mongodb+srv://${Db.USER}:${Db.PASSWORD}@cluster0.zisqoh9.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(url);
const dbName=Db.DB_NAME;
// const coll=process.env.SLIDERS_COLLECTION!;
  // const collection_P=process.env.USERS_COLLECTION_P;

    async function run() {
      try {
 
        await client.connect();

 const db = client.db(dbName);
  const collection = db.collection("sliders");
 const findResult = await collection.find({}).toArray();


res.status(200).json(findResult);
    }catch(er){
        res.status(500).json({message:"اشکالی پیش آمده"})
      }
      finally{
        () => client.close()
      }

    }

  if (req.method === "GET") {


    run()

  }

}