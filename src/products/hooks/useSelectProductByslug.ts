import { useSelector } from "react-redux";
import { selectProductsBySlug } from "../slice";

export const useSelectProductBySlug = (slug: string) => {
  return useSelector((state) => selectProductsBySlug(state, slug));
};
