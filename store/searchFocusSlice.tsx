import { createSlice } from "@reduxjs/toolkit";

export interface searchFocusType {
  isSearchFocus: boolean;
}

const initialState = {
  isSearchFocus: false,
};

export const SearchFocusSlice = createSlice({
  name: "SearchFocusSlice",
  initialState,
  reducers: {
    toggleFocusInput: (state) => {
      state.isSearchFocus = !state.isSearchFocus;
    },
    closeFocusInput: (state) => {
      state.isSearchFocus = false;
    },
    openFocusInput: (state) => {
      state.isSearchFocus = true;
    },
  },
});

export const { closeFocusInput, toggleFocusInput, openFocusInput } =
  SearchFocusSlice.actions;

export default SearchFocusSlice.reducer;
