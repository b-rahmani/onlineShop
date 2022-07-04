import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface sideBar {
  isOpenSidebar: boolean;
}

const initialState = {
  isOpensidebar: false,
};

export const SideBarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    closeSidebar: (state) => {
      state.isOpensidebar = false;
    },
    toggleSidebar: (state) => {
      state.isOpensidebar = !state.isOpensidebar;
    },
  },
});

export const { closeSidebar, toggleSidebar } = SideBarSlice.actions;


export default SideBarSlice.reducer;