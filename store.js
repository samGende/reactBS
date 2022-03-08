import { configureStore } from "@reduxjs/toolkit";
import timeReducer from "./reducers/time";
import userReducer from "./reducers/user";

export default configureStore({
  reducer: {
    time: timeReducer,
    user: userReducer,
  },
});
