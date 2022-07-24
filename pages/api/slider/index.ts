
import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";





export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const url=`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@online-shop.ps6bz.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(url);
const dbName=process.env.DB_NAME;
    async function run() {
      try {
 
        await client.connect();

 const db = client.db(dbName);
  const collection = db.collection('sliders');
 const findResult = await collection.find({}).toArray();
if(!findResult){
    console.log("not esist user")
    res.status(404).json({message:"اطلاعات یافت نشد"})
    
}

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