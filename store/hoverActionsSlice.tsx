import { createSlice } from "@reduxjs/toolkit";

export interface HoverActionType {
  share: { isShare: boolean; link: string };
  extend: { isExtend: boolean; image: string };
}

const initialState = {
  share: { isShare: false, link: "" },
  extend: { isExtend: false, image: "" },
};

export const HoverActionSlice = createSlice({
  name: "HoverActionSlice",
  initialState,
  reducers: {
    openShare: (state, action) => {
      state.share.isShare = true;
      state.share.link = action.payload;
    },
    closeIsShare: (state) => {
      state.share.isShare = false;
      state.share.link = "";
    },
    openIsExtend: (state, action) => {
      state.extend.isExtend = true;
      image: action.payload;
    },
    closeIsExtend: (state) => {
      state.extend.isExtend = false;
    },
  },
});

export const { closeIsExtend, closeIsShare, openIsExtend, openShare } =
  HoverActionSlice.actions;

export default HoverActionSlice.reducer;
