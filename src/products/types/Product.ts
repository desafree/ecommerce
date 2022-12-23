import { Image } from "./Image";
import { Category } from "./Category";

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: Image;
  category: Category;
  categoryImage: Image;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: { quantity: number; item: string }[];
  gallery: { first: Image; second: Image; third: Image };
  others: {
    slug: string;
    name: string;
    image: Image;
  }[];
}
