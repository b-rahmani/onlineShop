import { NextApiRequest, NextApiResponse } from "next";

import { dbConnect } from "../../utils/db-connect";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

//db connect
const data=await dbConnect();

    res.status(200).json({data});
  

}
