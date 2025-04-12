import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    IsVisible: true,
    lastScrollY: 0,
  },
  reducers: {
    updateScroll: (state, action) => {
      const currentScroll = action.payload;

      if (currentScroll > 280 && currentScroll > state.lastScrollY) {
        state.IsVisible = false;
      } else if (currentScroll <= 280 || currentScroll < state.lastScrollY) {
        state.IsVisible = true;
      }

      state.lastScrollY = currentScroll;
    },
  },
});

export const scrollSliceactions = scrollSlice.actions;
export default scrollSlice;
