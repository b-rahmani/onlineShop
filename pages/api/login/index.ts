
import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { Db } from "../../../utils/db-connect";





export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {name,password}=req.body;
  const url=`mongodb+srv://${Db.USER}:${Db.PASSWORD}@cluster0.zisqoh9.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(url);
const dbName=Db.DB_NAME;
// const coll=process.env.USERS_COLLECTION!;
  // const collection_P=process.env.USERS_COLLECTION_P;
    async function run() {
      try {
 
        await client.connect();
// console.log('Connected successfully to server');
 const db = client.db(dbName);
  const collection = db.collection("users");
 const findResult = await collection.findOne({name:name})
if(!findResult){
    // console.log("not esist user")
    res.status(404).json({message:"کاربری با این مشخصات یافت نشد"})
    
}else if(findResult.password!==password){
// console.log("اطلاعات شما درست نیست")
res.status(500).json({message:"اطلاعات شما درست نیست"})
}else if(findResult.password===password){
    // console.log("login successfull");
    const nowTime=new Date().getTime()
    const token=(nowTime+1000*60*5).toString();
    // console.log("valid until",new Date(+token).getDate())
    collection.updateOne({name:name},{$set:{token:token}})
    const userData={name:findResult.name,id:findResult._id,token:token}
    res.status(200).json({message:"ورود موفق", data:userData})
      }
    }catch(er){
        res.status(500).json({message:"اشکالی پیش آمده"})
      }
      finally{
        () => client.close()
      }

    }

  if (req.method === "POST") {


    run()

  }

}