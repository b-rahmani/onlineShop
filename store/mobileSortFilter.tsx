import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MobileSF {
  isOpenFilter: boolean;
  isOpensort: boolean;
}

const initialState = {
  isOpenfilter: false,
  isOpensort: false,
};

export const SideBarSlice = createSlice({
  name: "MobileFilterSort",
  initialState,
  reducers: {
    toggleSort: (state) => {
      state.isOpensort = !state.isOpensort;
    },
    closeSort: (state) => {
      state.isOpensort = false;
    },
    toggleFilter: (state) => {
      state.isOpenfilter = !state.isOpenfilter;
    },
    closeFilter: (state) => {
      state.isOpenfilter = false;
    },
  },
});

export const { toggleFilter, toggleSort, closeFilter, closeSort } =
  SideBarSlice.actions;

export default SideBarSlice.reducer;
