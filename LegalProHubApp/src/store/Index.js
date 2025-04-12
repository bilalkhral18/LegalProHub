import { configureStore } from "@reduxjs/toolkit";
import scrollSlice from "./ScrollSlice";
import loginsignupSlice from "./LoginSignUpSlice";
import commonFunctionsSlice from "./CommonFunctions";
import DataManagementSlice from "./DataManagement";
import FAQsSLice from "./FAQsSlice";
const Legalstore = configureStore({
  reducer: {
    scroll: scrollSlice.reducer,
    logsignup: loginsignupSlice.reducer,
    commonfunctions: commonFunctionsSlice.reducer,
    FAQs: FAQsSLice.reducer,
    DataSlice: DataManagementSlice.reducer,
  },
});

export default Legalstore;
