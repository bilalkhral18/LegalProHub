import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "./CommonFunctions";
import baseURL from "../components/authComponents/BaseUrl";
const initialState = {
  STATUS: STATUS.IDEL,
  clientData: [],
  LawyerData: [],
};

const DataManagementSlice = createSlice({
  name: "DataSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getClientData.pending, (state) => {
        state.STATUS = STATUS.LOADING;
      })
      .addCase(getClientData.fulfilled, (state, action) => {
        state.STATUS = STATUS.IDEL;
        state.clientData = action.payload;
      })
      .addCase(getClientData.rejected, (state, action) => {
        state.STATUS = STATUS.ERROR;
      })
      .addCase(getLawyerData.pending, (state) => {
        state.STATUS = STATUS.LOADING;
      })
      .addCase(getLawyerData.fulfilled, (state, action) => {
        state.STATUS = STATUS.IDEL;
        state.LawyerData = action.payload;
      })
      .addCase(getLawyerData.rejected, (state, action) => {
        state.STATUS = STATUS.ERROR;
      });
  },
});

export const getClientData = createAsyncThunk(
  "ClientData/getClientData",
  async () => {
    try {
      const response = await baseURL.get("/getclients");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getLawyerData = createAsyncThunk(
  "LawyerData/getLawyerData",
  async () => {
    try {
      const response = await baseURL.get("/getlawyer");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export default DataManagementSlice;
export const dataManagementMethods = DataManagementSlice.actions;
