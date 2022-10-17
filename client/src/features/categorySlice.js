import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    {
      name: "Bussness Stadies",
      numberOfPosts: 14,
    },
    {
      name: "Website Developement",
      numberOfPosts: 1,
    },
    {
      name: "Communication (English, Bangla)",
      numberOfPosts: 122,
    },
  ],
};

const categorySlice = createSlice({
  name: "cagegory",
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
