import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./action";

const initialState = {
  loading: false,
  hasError: false,
  data: {}
};
const products = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getProducts.pending]: state => {
      state.loading = true;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.hasError = true;
      state.data = action.payload.values;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.values;
    },
  },
});

export const productsList = products.reducer;