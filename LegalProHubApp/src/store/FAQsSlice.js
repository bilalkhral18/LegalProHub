import { createSlice } from "@reduxjs/toolkit";

const FAQsSLice = createSlice({
  name: "FAQs",
  initialState: {
    condition: {},
  },
  reducers: {
    showAnswer: (state, action) => {
      const index = action.payload;
      state.condition[index] = !state.condition[index];
    },
  },
});
export default FAQsSLice;
export const FAQsactions = FAQsSLice.actions;
