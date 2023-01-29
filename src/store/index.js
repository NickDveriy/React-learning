import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  // for multiple slices
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
