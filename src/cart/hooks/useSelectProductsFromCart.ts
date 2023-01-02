import { useSelector } from "react-redux";
import { selectProductsFromCart } from "../slice";

export const useSelectProductsFromCart = () => {
  return useSelector(selectProductsFromCart);
};
