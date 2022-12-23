import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/Product";
import { RootState } from "../../_shared/store";

const initialState: Product[] = [];

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

const selectIProductsSlice = (state: RootState) => state.products;

export const selectProductHeadphones = createSelector(
  selectIProductsSlice,
  (s) => s.filter((product) => product.category === "headphones")
);

export const reducer = slice.reducer;
export const actions = slice.actions;
