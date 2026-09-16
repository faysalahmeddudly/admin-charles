import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";
import authReducer from "../slices/authSlice";
import productsReducer from "../slices/productSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
