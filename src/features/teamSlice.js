import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  team: "",
  users: [],
  saved: false,
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addUser(state, action) {
      if (state.users.includes(action.payload)) return;
      state.users.push(action.payload);
    },
    changeTeamName(state, action) {
      state.team = action.payload;
    },
    emptyTeam(state) {
      state.users = [];
    },
  },
});

export const { changeTeamName, addUser, emptyTeam } = teamSlice.actions;
export default teamSlice.reducer;
