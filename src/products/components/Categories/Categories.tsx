import React from "react";
import { CategoriesStyled } from "./Categories.styled";
import { CategoryPreview } from "../../../_shared";

export const Categories = () => {
  return (
    <CategoriesStyled>
      <CategoryPreview
        category="headphones"
        imageUrl="/assets/shared/desktop/image-category-thumbnail-headphones.png"
      />
      <CategoryPreview
        category="speakers"
        imageUrl="/assets/shared/desktop/image-category-thumbnail-speakers.png"
      />
      <CategoryPreview
        category="earphones"
        imageUrl="/assets/shared/desktop/image-category-thumbnail-earphones.png"
      />
    </CategoriesStyled>
  );
};
