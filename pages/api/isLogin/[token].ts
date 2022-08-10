import { NextApiRequest,NextApiResponse } from "next";

 const handler=async(req:NextApiRequest,res:NextApiResponse)=>{
const {token}=req.query;
const nowTime=new Date().getTime();
const tokent_time=new Date(+token);

// console.log("token",token)
if(+nowTime>+tokent_time){
    
    res.status(401).json({message:"your token is expire",result:+nowTime>+tokent_time})
}else{
    res.status(200).json({message:"valid token",result:+nowTime>+tokent_time})
}
    
}

export default handler;