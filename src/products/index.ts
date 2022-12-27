import { getProducts } from "./apis";
import {
  Header,
  Categories,
  ProductsThumbnail,
  Thumbnail1,
  Thumbnail2,
  Thumbnail3,
} from "./components";

import {
  fetchProducts,
  selectIProductsSlice,
  selectProducts,
  selectProductsStatus,
  selectProductsByCategory,
  selectProductsById,
  reducer,
  actions,
} from "./slice";

import { Category, Product, Image, CartProduct } from "./types";

import { Checkout, Category as CategoryPages, Detail, Home } from "./views";

export {
  getProducts,
  Header,
  Categories,
  ProductsThumbnail,
  Thumbnail1,
  Thumbnail2,
  Thumbnail3,
  fetchProducts,
  Checkout,
  CategoryPages,
  Detail,
  Home,
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
  type CartProduct,
};
