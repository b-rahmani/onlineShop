import { NextApiRequest, NextApiResponse } from 'next';
import { UserDetails } from '../../../utils/db-connect';
 const handler =async(req:NextApiRequest,res:NextApiResponse)=>{



if(req.method==="GET"){

    const token=req.query.token;
    const userData =await  UserDetails(token as string);

    res.status(200).json(userData);
}

 }



 export default handler;