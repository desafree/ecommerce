import {
  createSelector,
  createSlice,
  createEntityAdapter,
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
    /*    itemUpdate: itemsAdapter.upsertOne,*/
    itemUpdate: itemsAdapter.upsertOne,
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
