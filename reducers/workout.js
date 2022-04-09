import { createSlice } from "@reduxjs/toolkit";

const workoutSlice = createSlice({
  name: "workout",
  initialState: { exercises: [] },
  reducers: {
    addExercise: (state, action) => {
      return {
        exercises: [...state.exercises, action.payload],
      };
    },
  },
});

export const { addExercise } = workoutSlice.actions;
export default workoutSlice.reducer;
