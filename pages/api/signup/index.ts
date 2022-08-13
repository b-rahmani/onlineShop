import { MongoClient } from "mongodb";
import { NextApiRequest,NextApiResponse } from "next";
import { Db } from "../../../utils/db-connect";


const handler=async (req:NextApiRequest,res:NextApiResponse)=>{
const {name,password,confirmPassword}=req.body;


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
if(findResult){
  // console.log(" esist user")
  res.status(409).json({message:"این نام کاربری قبلا استفاده شده "})
  
}else if(password!==confirmPassword){
// console.log("رمز عبور و تکرار رمز  عبور مطابقت ندارد")
res.status(409).json({message:"رمز عبور و تکرار رمز  عبور مطابقت ندارد"})
}else{
    const nowTime=new Date().getTime()
    const token=(nowTime+1000*60*5).toString();
    const user={name,password,token}
    const userCreate=await collection.insertOne(user);
    res.status(201).json({message:"کاربری با موفقیت ایجاد شد", data:user})
}
  }catch(er){
      res.status(500).json({message:"اشکالی پیش آمده"})
    }
    finally{
      () => client.close()
    }

  }

if(req.method==="POST"){
run();
}


}



export default handler;