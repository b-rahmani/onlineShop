import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

// import { dbConnect } from "../../utils/db-connect";



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  // check for netwirk access from vercel on mongodb atlas
//db connect
const url=`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.zisqoh9.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(url);
const dbName=process.env.DB_NAME;
// const coll=process.env.USERS_COLLECTION!;
  // const collection_P=process.env.USERS_COLLECTION_P;
  

async function main() {
  await client.connect();
  // console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection("users");
  const findResult = await collection.find({}).toArray();

  // console.log(findResult)
  return findResult;
}
main()
  .then(users=>{
    // console.log(users);
    res.status(200).json(users)
  })
  .catch(er=>res.status(500).json({er:er}))
  .finally(() => client.close());

    // res.status(200).json({data});
    

}
