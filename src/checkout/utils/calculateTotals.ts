import { calculateTotalFromItems, ItemType } from "../../cart";
import { calculateShipping } from "./calculateShipping";
import { calculateVat } from "./calculateVat";

export const calculateTotals = (items: ItemType[]) => {
  const total = calculateTotalFromItems(items);
  const shipping = calculateShipping(total);
  const vat = calculateVat(total);
  const grandTotal = total + shipping;
  return { total, shipping, vat, grandTotal };
};
