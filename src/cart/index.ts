import {
  reducer,
  actions,
  selectCartSlice,
  selectProductsFromCart,
} from "./slice";
import { useToggle, useCartActions } from "./hooks";
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
  selectProductsFromCart,
  useToggle,
  useCartActions,
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
