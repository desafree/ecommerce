import {
  createSelector,
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";
import { CartProduct } from "../../products/types";
import { RootState } from "../../_shared/store";
import { selectProducts } from "../../products";

const itemsAdapter = createEntityAdapter<CartProduct>({
  selectId: (items) => items.id,
});

const initialState = itemsAdapter.getInitialState();
const selectors = itemsAdapter.getSelectors((state: RootState) => state.cart);

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    itemUpdate: (state, action: PayloadAction<{ id: number; qty: number }>) => {
      if (state.entities[action.payload.id]) {
        state.entities[action.payload.id]!.qty += action.payload.qty;
      } else {
        itemsAdapter.addOne(state, action.payload);
      }
    },
    itemAddOne: (state, action: PayloadAction<{ id: number; qty: number }>) => {
      state.entities[action.payload.id]!.qty += 1;
    },
    itemRemoveOne: (
      state,
      action: PayloadAction<{ id: number; qty: number }>
    ) => {
      if (action.payload.qty === 1) {
        itemsAdapter.removeOne(state, action.payload.id);
      } else {
        state.entities[action.payload.id]!.qty -= 1;
      }
    },
    itemRemove: itemsAdapter.removeOne,
    itemsRemoveAll: itemsAdapter.removeAll,
  },
});

export const selectProductsFromCart = createSelector(
  [selectors.selectEntities, selectors.selectIds, selectProducts],
  (entities, ids, products) => {
    const itemsProducts = products.filter((product) =>
      ids.includes(product.id)
    );
    return itemsProducts.map((product, index) => {
      return {
        name: product.name,
        price: product.price,
        image: product.image.desktop,
        qty: entities[product.id]!.qty,
        id: product.id,
      };
    });
  }
);

export const reducer = slice.reducer;
export const actions = slice.actions;
