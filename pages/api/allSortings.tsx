import { NextApiResponse, NextApiRequest } from "next";

const allSorting = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    { name: "جدید ترین", value: "" },
    { name: "پربازدید ترین", value: "-rate" },
    { name: "ارزان ترین", value: "price" },
    { name: "گران ترین", value: "-price" },
  ]);
};

export default allSorting;


// { name: "مرتبط ترین", value: "22" },
// { name: "پرفروش ترین", value: "7" },