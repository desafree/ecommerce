import {
  reducer,
  actions,
  selectCartSlice,
  selectProductsByIds,
} from "./slice";
import { useToggle, useSelectProductsFromCart, useCartActions } from "./hooks";
import {
  CartPopup,
  CartInfo,
  CartItem,
  ButtonItem,
  PopupContainer,
  Items,
  Total,
} from "./components";
import { removeLastWord, calculateTotalFromItems } from "./utils";

import { ItemType } from "./types";

export {
  reducer as cartReducer,
  actions as cartActions,
  selectCartSlice,
  selectProductsByIds,
  useToggle,
  useCartActions,
  useSelectProductsFromCart,
  CartPopup,
  CartInfo,
  CartItem,
  ButtonItem,
  PopupContainer,
  Items,
  Total,
  type ItemType,
  removeLastWord,
  calculateTotalFromItems,
};
