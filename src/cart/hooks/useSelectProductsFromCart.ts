import { selectProductsByIds } from "../slice";
import { useSelector } from "react-redux";
import { ItemType } from "../types";

export const useSelectProductsFromCart = (): ItemType[] => {
  return useSelector(selectProductsByIds);
};
