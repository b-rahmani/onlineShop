
import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";





export default  function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const url=`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.zisqoh9.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(url);
const dbName=process.env.DB_NAME;
const coll=process.env.USERS_COLLECTION!;
  // const collection_P=process.env.USERS_COLLECTION_P;

    async function run() {
      try {
 
        await client.connect();

 const db = client.db(dbName);
  const collection = db.collection(coll);
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