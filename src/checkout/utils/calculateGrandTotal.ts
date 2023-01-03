import { calculateShipping } from "./calculateShipping";

export function calculateGrandTotal(total: number) {
  return total + calculateShipping(total);
}
