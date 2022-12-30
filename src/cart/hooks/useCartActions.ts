import { useDispatch } from "react-redux";
import { cartActions } from "../index";

export const useCartActions = () => {
  const dispatch = useDispatch();

  const addToCart = (id: number, qty = 1) => {
    dispatch(cartActions.addToCart({ id, qty }));
  };

  const removeFromCart = (id: number) => {
    dispatch(cartActions.removeFromCart({ id }));
  };

  const removeItemFromCart = (id: number) => {
    dispatch(cartActions.removeItemFromCart({ id }));
  };

  const removeAllFromCart = () => {
    dispatch(cartActions.removeAllFromCart());
  };

  return { addToCart, removeAllFromCart, removeFromCart, removeItemFromCart };
};
