import { configureStore } from "@reduxjs/toolkit";
import timeReducer from "./reducers/time";
import userReducer from "./reducers/user";
import workoutReducer from "./reducers/workout";

export default configureStore({
  reducer: {
    time: timeReducer,
    user: userReducer,
    workout: workoutReducer,
  },
});
