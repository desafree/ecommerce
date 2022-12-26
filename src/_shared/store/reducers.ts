import { i18nReducer } from "../i18n/index";
import { productsReducer } from "../../products";
import { cartReducer } from "../../cart";

export const reducers = {
  i18n: i18nReducer,
  products: productsReducer,
  cart: cartReducer,
};
