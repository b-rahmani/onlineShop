import { NextApiRequest, NextApiResponse } from "next";

import { allProductsMock } from "../allProduct";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const productID = req.query.productID;
  let product;

  product = allProductsMock.find((el) => el.id == productID);

  if (!product) {
    return res.status(404).json({ message: "محصول مورد نظر یافت نشد ." });
  }

  return res.status(200).json(product);
 
};

export default handler;
