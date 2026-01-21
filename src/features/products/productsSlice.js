import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
