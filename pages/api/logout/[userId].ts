import { vercelClient } from './../../../utils/axios';

import { MongoClient, ObjectId } from 'mongodb';
import { NextApiRequest,NextApiResponse } from 'next';
import { Db } from '../../../utils/db-connect';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
 const {userId}=req.query;
 const url=`mongodb+srv://${Db.USER}:${Db.PASSWORD}@cluster0.zisqoh9.mongodb.net/?retryWrites=true&w=majority`
 const client = new MongoClient(url);
 const dbName=Db.DB_NAME;
//  const coll=process.env.USERS_COLLECTION!;
  // const collection_P=process.env.USERS_COLLECTION_P;
     async function run() {
       try {
  
         await client.connect();
 
  const db = client.db(dbName);
   const collection = db.collection("users");
  const findResult = await collection.findOne({_id:new ObjectId(userId.toString())})
 if(!findResult){
    //  console.log("not esist user")
     res.status(404).json({message:"کاربری با این مشخصات یافت نشد"})
     
 
 }else {
     
     collection.updateOne({_id:findResult._id},{$unset:{token:1}})
     
     res.status(200).json({message:"از کاربری خود خارج شدید",})
       }
     }catch(er){
         res.status(500).json({message:"اشکالی پیش آمده"})
       }
       finally{
         () => client.close()
       }
 
     }

 if(req.method==="GET"){

run();
 }

  }



  // logout sample

  // vercelClient.get(`/api/logout/21121540552`)