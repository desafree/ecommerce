import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { Product } from "../types";
import { RootState, Status } from "../../_shared";
import { getProducts } from "../apis";

const initialState: { products: Product[]; status: Status } = {
  products: [],
  status: "idle",
};

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  getProducts
);

export const selectProductsSlice = (state: RootState) => state.products;

export const selectProducts = createSelector(
  [selectProductsSlice],
  (state) => state.products
);

export const selectProductsStatus = createSelector(
  [selectProductsSlice],
  (state) => state.status
);

export const selectProductsByCategory = createSelector(
  [selectProductsSlice, (state, category) => category],
  (products, category) => {
    return products.products.filter((product) => product.category === category);
  }
);

export const selectProductsBySlug = createSelector(
  [selectProductsSlice, (state, slug) => slug],
  (products, slug) => {
    return products.products.find((product) => product.slug === slug);
  }
);

export const selectProductById = createSelector(
  [selectProductsSlice, (state, id) => id],
  (products, id) => {
    return products.products.find((product) => product.id === Number(id));
  }
);

export const selectProductsByIds = createSelector(
  [selectProductsSlice, (state, ids) => ids],
  (products, ids) => {
    return products.products.filter((product) => ids.includes(product.id));
  }
);

export const reducer = slice.reducer;
export const actions = slice.actions;
