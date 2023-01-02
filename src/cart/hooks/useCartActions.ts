import { useDispatch } from "react-redux";
import { cartActions } from "../index";

export const useCartActions = () => {
  const dispatch = useDispatch();

  const updateItemFromCart = (id: number, qty: number) => {
    dispatch(cartActions.itemUpdate({ id, qty }));
  };

  const removeItemFromCart = (id: number) => {
    dispatch(cartActions.itemRemove(id));
  };

  const removeAllFromCart = () => {
    dispatch(cartActions.itemsRemoveAll());
  };

  return { updateItemFromCart, removeAllFromCart, removeItemFromCart };
};
