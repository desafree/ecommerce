import React, { FC, forwardRef } from "react";
import { CategoryHeaderStyled } from "./CategoryHeader.styled";
import { Category } from "../../types";
import { Typography } from "../../../_shared";

interface Props {
  category: Category;
}

export const CategoryHeader = forwardRef<HTMLElement, Props>(
  ({ category }, ref) => {
    return (
      <CategoryHeaderStyled ref={ref}>
        <Typography variant="h2">{category}</Typography>
      </CategoryHeaderStyled>
    );
  }
);
