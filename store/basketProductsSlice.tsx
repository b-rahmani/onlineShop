import { createSlice } from "@reduxjs/toolkit";
import { productType } from "../components/SingleProduct/SingleProduct";

export interface basketProductType extends productType {
  quantity: number;
  selectedAttribute: { name: string; value: string };
}

export interface basketTypes {
  basket: basketProductType[];
}

const initialState: basketTypes = {
  basket: [],
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basket = state.basket.concat({
        ...action.payload.product,
        selectedAttribute: action.payload.attribute,
        quantity: 1,
      });
    },
    removeFromBasket: (state, action) => {
      state.basket = state.basket?.filter(
        (item: basketProductType) =>
          item.selectedAttribute.value !== action.payload.attribute.value ||
          //  &&
          item.id !== action.payload.product.id
      );
    },
    increase: (state, action) => {
      state.basket?.map((item: basketProductType) =>
        item.id === action.payload.product.id &&
        item.selectedAttribute.value === action.payload.attribute.value
          ? (item.quantity += 1)
          : item
      );
    },
    decrease: (state, action) => {
      state.basket.map((item: basketProductType) =>
        item.id === action.payload.product.id &&
        item.selectedAttribute.value === action.payload.attribute.value
          ? (item.quantity -= 1)
          : item
      );
    },
  },
});

export const { addToBasket, increase, removeFromBasket, decrease } =
  BasketSlice.actions;

export default BasketSlice.reducer;
