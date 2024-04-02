import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: undefined,
  email: undefined,
  user: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.user = action.payload.user;
    },
    logout(state) {
      state.id = undefined;
      state.email = undefined;
      state.user = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
