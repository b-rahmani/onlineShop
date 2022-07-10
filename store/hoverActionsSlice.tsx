import { createSlice } from "@reduxjs/toolkit";

export interface HoverActionType {
  share: { isShare: boolean; link: string };
  extend: { isExtend: boolean; image: string; id: string };
}

const initialState = {
  share: { isShare: false, link: "" },
  extend: { isExtend: false, image: "", id: "" },
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
      state.extend.image = action.payload.image;
      state.extend.id = action.payload.id;
    },
    closeIsExtend: (state) => {
      state.extend.isExtend = false;
      state.extend.image = "";
      state.extend.id = "";
    },
  },
});

export const { closeIsExtend, closeIsShare, openIsExtend, openShare } =
  HoverActionSlice.actions;

export default HoverActionSlice.reducer;
