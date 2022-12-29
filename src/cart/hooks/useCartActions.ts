import { useDispatch } from "react-redux";
import { cartActions } from "../index";

export const useCartActions = () => {
  const dispatch = useDispatch();

  const addToCart = (id: number) => {
    dispatch(cartActions.addToCart({ id, qty: 1 }));
  };

  const removeFromCart = (id: number) => {
    dispatch(cartActions.removeFromCart({ id }));
  };

  const removeAllFromCart = () => {
    dispatch(cartActions.removeAllFromCart());
  };

  return { addToCart, removeAllFromCart, removeFromCart };
};
