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
  ProductDetail,
  ImageContainer,
  TextContainer,
  ProductImages,
  ProductsSuggestion,
  Quantity,
} from "./components";

import {
  fetchProducts,
  selectProductsSlice,
  selectProducts,
  selectProductsStatus,
  selectProductsByCategory,
  selectProductById,
  selectProductsBySlug,
  selectProductsByIds,
  reducer,
  actions,
} from "./slice";

import {
  Category,
  Product,
  Image,
  CartProduct,
  ProductSuggestion,
} from "./types";

import { Checkout, Category as CategoryPage, Detail, Home } from "./views";

import {
  useInitFetchProducts,
  useSelectProductBySlug,
  useSelectProductByCategory,
  useGoBack,
} from "./hooks";

export {
  getProducts,
  Header,
  Categories,
  ProductsThumbnail,
  Thumbnail1,
  Thumbnail2,
  Thumbnail3,
  ProductImages,
  ProductsSuggestion,
  CategoryHeader,
  Quantity,
  ProductDetail,
  ImageContainer,
  TextContainer,
  HalfSectionProduct,
  fetchProducts,
  Checkout,
  CategoryPage,
  Detail,
  Home,
  selectProductsSlice,
  selectProducts,
  selectProductsStatus,
  selectProductsByCategory,
  selectProductById,
  selectProductsByIds,
  selectProductsBySlug,
  useInitFetchProducts,
  useSelectProductBySlug,
  useSelectProductByCategory,
  useGoBack,
  reducer as productsReducer,
  actions,
  type Category,
  type Product,
  type Image,
  type CartProduct,
  type ProductSuggestion,
};
