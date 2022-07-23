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
    initialBasket: (state) => {
      if (window !== undefined && localStorage?.getItem("userBasket")) {
        const basketData = JSON.parse(localStorage.getItem("userBasket")!);
        state.basket = basketData;
      }
    },

    addToBasket: (state, action) => {
      const basketData = state.basket.concat({
        ...action.payload.product,
        selectedAttribute: action.payload.attribute,
        quantity: 1,
      });
      state.basket = basketData;
      localStorage.setItem("userBasket", JSON.stringify(basketData));
    },
    removeFromBasket: (state, action) => {
      const basketData = state.basket?.filter(
        (item: basketProductType) =>
          item.selectedAttribute?.value !== action.payload.attribute?.value ||
          //  &&
          item.id !== action.payload.product.id
      );
      state.basket = basketData;
      localStorage.setItem("userBasket", JSON.stringify(state.basket));
    },
    increase: (state, action) => {
      const basketData = state.basket?.map((item: basketProductType) =>
        item.id === action.payload.product.id &&
        item.selectedAttribute?.value === action.payload.attribute?.value
          ? { ...item, quantity: ++item.quantity }
          : item
      );
      localStorage.setItem("userBasket", JSON.stringify(basketData));
    },
    decrease: (state, action) => {
      const basketData = state.basket.map((item: basketProductType) =>
        item.id === action.payload.product.id &&
        item.selectedAttribute?.value === action.payload.attribute?.value
          ? { ...item, quantity: --item.quantity }
          : item
      );
      localStorage.setItem("userBasket", JSON.stringify(basketData));
    },
  },
});

export const {
  addToBasket,
  increase,
  removeFromBasket,
  decrease,
  initialBasket,
} = BasketSlice.actions;

export default BasketSlice.reducer;
