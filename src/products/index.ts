import { getProducts } from "./apis";
import {
  Header,
  Categories,
  ProductsThumbnail,
  Thumbnail1,
  Thumbnail2,
  Thumbnail3,
  CategoryHeader,
  HalfSectionProduct,
} from "./components";

import {
  fetchProducts,
  selectIProductsSlice,
  selectProducts,
  selectProductsStatus,
  selectProductsByCategory,
  selectProductsById,
  selectProductsBySlug,
  reducer,
  actions,
} from "./slice";

import { Category, Product, Image, CartProduct } from "./types";

import { Checkout, Category as CategoryPage, Detail, Home } from "./views";
import { useInitFetchProducts } from "./hooks";

export {
  getProducts,
  Header,
  Categories,
  ProductsThumbnail,
  Thumbnail1,
  Thumbnail2,
  Thumbnail3,
  CategoryHeader,
  HalfSectionProduct,
  fetchProducts,
  Checkout,
  CategoryPage,
  Detail,
  Home,
  selectIProductsSlice,
  selectProducts,
  selectProductsStatus,
  selectProductsByCategory,
  selectProductsById,
  selectProductsBySlug,
  useInitFetchProducts,
  reducer as productsReducer,
  actions,
  type Category,
  type Product,
  type Image,
  type CartProduct,
};
