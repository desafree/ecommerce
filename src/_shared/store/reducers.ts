import { reducer as i18nReducer } from "../i18n/slice/slice";
import { reducer as productsReducer } from "../../products/slice/slice";

export const reducers = {
  i18n: i18nReducer,
  products: productsReducer,
};
