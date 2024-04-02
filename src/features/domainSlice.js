import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  domain: [],
};

const domainSlice = createSlice({
  name: "domain",
  initialState,
  reducers: {
    addDomain(state, action) {
      state.domain.push(action.payload);
    },
    RemoveDomain(state, action) {
      const copyDomain = state.domain.filter((d) => d !== action.payload);
      console.log(copyDomain.length);
    },
  },
});

export const { addDomain, RemoveDomain } = domainSlice.actions;
export default domainSlice.reducer;
