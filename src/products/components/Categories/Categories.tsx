import React from "react";
import { CategoriesStyled } from "./Categories.styled";
import { CategoryPreview } from "../../../_shared";

export const Categories = () => {
  return (
    <CategoriesStyled>
      <CategoryPreview
        category="headphones"
        url="/assets/shared/desktop/image-category-thumbnail-headphones.png"
      />
      <CategoryPreview
        category="speakers"
        url="/assets/shared/desktop/image-category-thumbnail-speakers.png"
      />
      <CategoryPreview
        category="earphones"
        url="/assets/shared/desktop/image-category-thumbnail-earphones.png"
      />
    </CategoriesStyled>
  );
};
