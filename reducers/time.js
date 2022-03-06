import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
  name: "time",
  initialState: { value: { time: 0, hours: 0, minutes: 0 } },
  reducers: {
    checkIn: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { checkIn } = timeSlice.actions;
export default timeSlice.reducer;
