import { selectProductsById } from "../../products";
import { selectCartSlice } from "../slice";
import { useSelector } from "react-redux";
import { ItemType } from "../types";

export const useSelectProductsFromCart = (): ItemType[] => {
  const cartItems = useSelector(selectCartSlice);
  const ids = cartItems.map((item) => item.id);
  const products = useSelector((state) => selectProductsById(state, ids));
  const productWithQuantity = products.map((product, index) => {
    return {
      name: product.name,
      price: product.price,
      image: product.image.desktop,
      qty: cartItems[index].qty,
      id: product.id,
    };
  });
  return productWithQuantity;
};
