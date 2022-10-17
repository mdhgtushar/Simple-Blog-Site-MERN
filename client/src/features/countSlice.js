import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    inc: (state) => {
      state.count += 1;
    },
  },
});
export const { inc } = countSlice.actions;

export default countSlice.reducer;
