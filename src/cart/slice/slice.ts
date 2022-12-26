import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../../products/types";
import { RootState } from "../../_shared/store";

const initialState: CartProduct[] = [{ id: 1, qty: 10 }];

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart(state, action: PayloadAction<CartProduct[]>) {
      return action.payload;
    },
    addToCart(state, action: PayloadAction<CartProduct>) {
      const index = state.findIndex(
        (cartProduct) => cartProduct.id === action.payload.id
      );
      if (index !== -1) {
        state[index].qty++;
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<{ id: number }>) {
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

export const reducer = slice.reducer;
export const actions = slice.actions;
