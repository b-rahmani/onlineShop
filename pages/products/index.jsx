import SwipBanner from "../../components/swipBanner/SwipBanner";
import MainProducts from "../../components/mainProduct/MainProduct";
import SortMobile from "../../components/sortProducts/SortMobile";
import FilterMobile from "../../components/FilterProducts/FilterMobile";
import Backdrop from "../../components/backdrop/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { closeFocusInput } from "../../store/searchFocusSlice";
import AllProductProvider, {
  AllProductContext,
} from "../../store/ContextAllProduct";

import SliderDataProvider, {
  SingleSliderDataTypes,
  SliderData,
  SliderType,
} from "../../store/ContextSlider";

const Index = (props) => {
  const dispatch = useDispatch();
  const isFocusInput = useSelector((state) => state.searchFocus.isSearchFocus);

  return (
    <>
      {/* when search is focusing */}
      {isFocusInput && (
        <Backdrop click={() => dispatch(closeFocusInput())} type="area" />
      )}
      <SliderDataProvider>
        <SwipBanner />
      </SliderDataProvider>

      <AllProductProvider>
        <MainProducts />
        <FilterMobile />
        <SortMobile />
      </AllProductProvider>
    </>
  );
};

export default Index;
