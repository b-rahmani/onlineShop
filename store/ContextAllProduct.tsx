import { createContext } from "react";
export type Dictionary = {
  rating: { rate: number; count: number };
  [key: string]: string | object | number;
};
export type AllProducts = Dictionary[];

export const AllProductContext = createContext<AllProducts>([]);
