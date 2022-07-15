import { createSlice } from "@reduxjs/toolkit";
import { productType } from "../components/SingleProduct/SingleProduct";

export interface basketProductType extends productType {
  quantity: number;
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
      state.basket = state.basket.concat({ ...action.payload, quantity: 1 });
    },
    removeFromBasket: (state, action) => {
      state.basket = state.basket?.filter(
        (item: basketProductType) => item.id !== action.payload.id
      );
    },
    increase: (state, action) => {
      state.basket?.map((item: basketProductType) =>
        item.id === action.payload.id ? (item.quantity += 1) : item
      );
    },
    decrease: (state, action) => {
      state.basket.map((item: basketProductType) =>
        item.id === action.payload.id ? (item.quantity -= 1) : item
      );
    },
  },
});

export const { addToBasket, increase, removeFromBasket, decrease } =
  BasketSlice.actions;

export default BasketSlice.reducer;
