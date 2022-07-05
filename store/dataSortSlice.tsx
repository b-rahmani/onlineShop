import { createSlice } from "@reduxjs/toolkit";

export interface singleSortItemType {
  name: string;
  value: string;
}
export interface Allsort {
  allSort: singleSortItemType[] | [];
  selectedSort: singleSortItemType;
}

const initialState = {
  allSort: [],
  selectedSort: {} as singleSortItemType,
};

export const SortSlice = createSlice({
  name: "sortSlice",
  initialState,
  reducers: {
    initSorts: (state, action) => {
      state.allSort = action.payload;
    },
    changeSelectedSort: (state, action) => {
      state.selectedSort = action.payload;
    },
  },
});

export const { initSorts, changeSelectedSort } = SortSlice.actions;

export default SortSlice.reducer;
