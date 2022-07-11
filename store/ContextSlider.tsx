import { createContext } from "react";

interface SingleSliderDataTypes {
  id: number;
  image: string;
  title: string;
}

type SliderType = SingleSliderDataTypes[];

export const SliderData = createContext<SliderType>([]);
