import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../features/categorySlice";
import countSlice from "../features/countSlice";
import postSlice from "../features/postSlice";

const store = configureStore({
  reducer: {
    counter: countSlice,
    posts: postSlice,
    category: categorySlice,
  },
});
export default store;
