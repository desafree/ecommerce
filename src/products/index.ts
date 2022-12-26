import {
  fetchProducts,
  selectIProductsSlice,
  selectProducts,
  selectProductsStatus,
  selectProductsByCategory,
  selectProductsById,
  reducer,
  actions,
} from "./slice/slice";

import { Category, Product, Image } from "./types";

export {
  fetchProducts,
  selectIProductsSlice,
  selectProducts,
  selectProductsStatus,
  selectProductsByCategory,
  selectProductsById,
  reducer as productsReducer,
  actions,
  type Category,
  type Product,
  type Image,
};
