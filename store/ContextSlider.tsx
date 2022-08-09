import { createContext } from "react";

export interface SingleSliderDataTypes {
  id: number;
  image: string;
  title: string;
}

export type SliderType = SingleSliderDataTypes[];

export const SliderData = createContext<SliderType>([]);

interface Iprops {
  children: React.ReactNode;
}
const SliderDataProvider = (props: Iprops) => {
  const sliderData = Array.from(Array(10).keys()).map(
    (p: any, ind: number): SingleSliderDataTypes => ({
      id: ind + 1,
      image: `/images/sliders/s${ind + 1}.jpg`,
      title: (ind + 1).toString(),
    })
  );

  return (
    <SliderData.Provider value={sliderData}>
      {props.children}
    </SliderData.Provider>
  );
};

export default SliderDataProvider;
