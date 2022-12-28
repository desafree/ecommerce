import { useSelector } from "react-redux";
import { selectProductsByCategory } from "../slice";
import { Category } from "../types";

export const useSelectProductByCategory = (category: Category) => {
  return useSelector((state) => selectProductsByCategory(state, category));
};
