import { MongoClient } from "mongodb";



export const Db={
    USER:"admin",
    PASSWORD:"admin1234",
    DB_NAME:"new",
}

export const allProductDb=async()=>{
    const url = `mongodb+srv://${Db.USER}:${Db.PASSWORD}@cluster0.zisqoh9.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(url);
    const dbName = Db.DB_NAME;
  
    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection("allProducts");
  
      let findResult;
  
      findResult = await collection.find({}).toArray();
    
      client.close();
      
      const converted = await findResult.map((item: any) => ({
        ...item,
        _id: item._id.toString(),
      }));
      
      return  await converted;
    } catch (er) {
      client.close();
  
      throw er;
    }
}
export const UserDetails=async(token:string)=>{
    const url = `mongodb+srv://${Db.USER}:${Db.PASSWORD}@cluster0.zisqoh9.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(url);
    const dbName = Db.DB_NAME;
  
    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection("users");
  
      let findResult;
  
      findResult = await collection.find({}).toArray();
      interface Iuser {
        name:string;
        token:string;
        _id:any;
        

        [key: string]: any;
    }

    const user=await findResult.find(u=>u.token ===token)!;
    const newuser={...user,password:undefined};
   
    
      client.close();
      
      
      
      return  await newuser ;
    } catch (er) {
      client.close();
  
      throw er;
    }
}

