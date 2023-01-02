import { reducer, actions, selectProductsFromCart } from "./slice";
import { useToggle, useCartActions, useSelectProductsFromCart } from "./hooks";
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
  selectProductsFromCart,
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
