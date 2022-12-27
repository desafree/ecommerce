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

export const selectIProductsSlice = (state: RootState) => state.products;

export const selectProducts = createSelector(
  [selectIProductsSlice],
  (state) => state.products
);

export const selectProductsStatus = createSelector(
  [selectIProductsSlice],
  (state) => state.status
);

export const selectProductsByCategory = createSelector(
  [selectIProductsSlice, (state, category) => category],
  (products, category) => {
    return products.products.filter((product) => product.category === category);
  }
);

export const selectProductsBySlug = createSelector(
  [selectIProductsSlice, (state, slug) => slug],
  (products, slug) => {
    return products.products.filter((product) => product.slug === slug)[0];
  }
);

export const selectProductsById = createSelector(
  [selectIProductsSlice, (state, id) => id],
  (products, id) => {
    return products.products.filter((product) => product.id === Number(id))[0];
  }
);
/*const items = useSelector(state => selectProductsByCategory(state, 'headphones'));*/

export const reducer = slice.reducer;
export const actions = slice.actions;
