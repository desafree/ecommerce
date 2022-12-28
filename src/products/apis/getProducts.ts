import { Product } from "../types";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(process.env.REACT_APP_API_URL!);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}
