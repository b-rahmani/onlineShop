import { NextApiResponse, NextApiRequest } from "next";

const allSorting = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    { name: "پرفروش ترین", value: "7" },
    { name: "مرتبط ترین", value: "22" },
    { name: "پربازدید ترین", value: "4" },
    { name: "جدید ترین", value: "1" },
    { name: "ارزان ترین", value: "20" },
    { name: "گران ترین", value: "21" },
  ]);
};

export default allSorting;
