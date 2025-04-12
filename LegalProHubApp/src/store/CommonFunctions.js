import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Enum
export const STATUS = Object.freeze({
  IDEL: "idel",
  ERROR: "error",
  LOADING: "loading",
});
export const getofficialemail = createAsyncThunk(
  "Email/fetchEmail",
  async (email) => {
    try {
      const subject = "Hello";
      const body = "I would like to get in touch with you.";
      const mailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.open(mailUrl, "_blank");
    } catch (error) {
      throw new Error("Failed to open email client");
    }
  }
);

export const getlocations = createAsyncThunk(
  "location/fetchlocation",
  async (location) => {
    const encodedLocation = encodeURIComponent(location);
    const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
    window.open(googleMapUrl, "_blank");
  }
);
const commonFunctionsSlice = createSlice({
  name: "commonfunctions",
  initialState: {
    STATUS: STATUS.IDEL,
  },
  reducers: {
    settingreducer: () => {
      STATUS = STATUS.IDEL;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getofficialemail.pending, (state) => {
        state.STATUS = STATUS.LOADING;
      })
      .addCase(getofficialemail.fulfilled, (state) => {
        state.STATUS = STATUS.IDEL;
      })
      .addCase(getofficialemail.rejected, (state) => {
        state.STATUS = STATUS.ERROR;
      })
      .addCase(getlocations.pending, (state) => {
        state.STATUS = STATUS.LOADING;
      })
      .addCase(getlocations.fulfilled, (state) => {
        state.STATUS = STATUS.IDEL;
      })
      .addCase(getlocations.rejected, (state) => {
        state.STATUS = STATUS.ERROR;
      });
  },
});
export default commonFunctionsSlice;
export const commonmethods = commonFunctionsSlice.actions;
