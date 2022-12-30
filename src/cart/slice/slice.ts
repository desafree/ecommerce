import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../../products/types";
import { RootState } from "../../_shared/store";
import { selectIProductsSlice } from "../../products";

const initialState: CartProduct[] = [
  { id: 1, qty: 10 },
  { id: 2, qty: 10 },
];

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart(state, action: PayloadAction<CartProduct[]>) {
      return action.payload;
    },
    addToCart(state, action: PayloadAction<CartProduct>) {
      const item = state.find(
        (cartProduct) => cartProduct.id === action.payload.id
      );
      if (item) {
        item.qty = item.qty + action.payload.qty;
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<{ id: number }>) {
      const item = state.find(
        (cartProduct) => cartProduct.id === action.payload.id
      );
      if (item && item.qty > 1) {
        item.qty--;
      } else if (item && item.qty === 1) {
        return state.filter((item) => {
          return item.id !== action.payload.id;
        });
        return;
      }
    },
    removeItemFromCart(state, action: PayloadAction<{ id: number }>) {
      return state.filter((product) => {
        return product.id !== action.payload.id;
      });
    },
    removeAllFromCart() {
      return [];
    },
  },
});

export const selectCartSlice = (state: RootState) => state.cart;

export const selectProductsFromCart = createSelector(
  [selectCartSlice, selectIProductsSlice],
  (items, products) => {
    const ids = items.map((item) => item.id);
    const itemsProducts = products.products.filter((product) =>
      ids.includes(product.id)
    );
    return itemsProducts.map((product, index) => {
      return {
        name: product.name,
        price: product.price,
        image: product.image.desktop,
        qty: items[index].qty,
        id: product.id,
      };
    });
  }
);

export const reducer = slice.reducer;
export const actions = slice.actions;
