import React from "react";
import { CategoriesStyled } from "./Categories.styled";
import { CategoryPreview } from "../../../_shared";

export const Categories = () => {
  return (
    <CategoriesStyled>
      <CategoryPreview category="headphones" />
      <CategoryPreview category="speakers" />
      <CategoryPreview category="earphones" />
    </CategoriesStyled>
  );
};
