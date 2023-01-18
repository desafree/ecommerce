import { useDispatch } from "react-redux";
import { cartActions } from "../index";

export const useCartActions = () => {
  const dispatch = useDispatch();

  const updateItemFromCart = (id: number, qty: number) => {
    dispatch(cartActions.itemUpdate({ id, qty }));
  };

  const addOneQtyToItem = (id: number, qty: number) => {
    dispatch(cartActions.itemAddOne({ id, qty }));
  };

  const removeOneQtyToItem = (id: number, qty: number) => {
    dispatch(cartActions.itemRemoveOne({ id, qty }));
  };

  const removeItemFromCart = (id: number) => {
    dispatch(cartActions.itemRemove(id));
  };

  const removeAllFromCart = () => {
    dispatch(cartActions.itemsRemoveAll());
  };

  return {
    updateItemFromCart,
    removeAllFromCart,
    removeItemFromCart,
    removeOneQtyToItem,
    addOneQtyToItem,
  };
};
