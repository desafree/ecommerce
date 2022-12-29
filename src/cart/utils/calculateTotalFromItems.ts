import { ItemType } from "../types";

export const calculateTotalFromItems = (items: ItemType[]) => {
  return items.reduce((prev, curr) => {
    return prev + curr.qty * curr.price;
  }, 0);
};
