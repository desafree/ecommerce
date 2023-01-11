import { Image } from "./Image";

export interface ProductSuggestion {
  slug: string;
  name: string;
  image: Image;
  category: string;
}
