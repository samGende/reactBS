import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { value: { uid: "L" } },

  reducers: {
    signIn: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { signIn } = userSlice.actions;
export default userSlice.reducer;
