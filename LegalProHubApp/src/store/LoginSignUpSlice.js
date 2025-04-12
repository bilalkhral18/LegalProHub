import { createSlice } from "@reduxjs/toolkit";

const loginsignupSlice = createSlice({
  name: "logsignup",
  initialState: {
    islogin: false,
    issignup: false,
    setModal: false,
    setTerms: false,
  },
  reducers: {
    showloginform: (state) => {
      state.islogin = true;
      state.setModal = true;
      state.issignup = false;
    },
    showsignupform: (state) => {
      state.issignup = true;
      state.islogin = false;
      state.setModal = true;
    },
    cancelModal: (state) => {
      state.setModal = false;
    },
    termsAndConditions: (state) => {
      state.setTerms = true;
      state.issignup = false;
    },
  },
});
export default loginsignupSlice;
export const loginsignupactions = loginsignupSlice.actions;
