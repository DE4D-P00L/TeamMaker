import { configureStore } from "@reduxjs/toolkit";
import teamReducer from "./teamSlice";
import domainReducer from "./domainSlice.js";
import userReducer from "./userSlice.js";

export default configureStore({
  reducer: {
    user: userReducer,
    team: teamReducer,
    domain: domainReducer,
  },
});
