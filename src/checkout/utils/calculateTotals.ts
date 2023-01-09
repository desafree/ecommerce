import { calculateTotalFromItems, ItemType } from "../../cart";

export const calculateTotals = (items: ItemType[]) => {
  const total = calculateTotalFromItems(items);
  const shipping = total > 200 ? 50 : 100;
  const vat = total * 0.2;
  const grandTotal = total + shipping;
  return { total, shipping, vat, grandTotal };
};
