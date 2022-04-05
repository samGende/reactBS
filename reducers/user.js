import { createslice } from "@reduxjs/toolkit";

const userslice = createslice({
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
