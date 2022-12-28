import { Product } from "../types";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3001/items");
  if (!res.ok) {
    throw new Error("Something went wtrong");
  }

  return res.json();
}
