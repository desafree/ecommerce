import { useSelector } from "react-redux";
import { selectProductsFromCart } from "../slice";

export const useCartProducts = () => {
  return useSelector(selectProductsFromCart);
};
