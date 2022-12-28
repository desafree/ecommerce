import React, { FC } from "react";
import { CategoryHeaderStyled } from "./CategoryHeader.styled";
import { Category } from "../../types";
import { Typography } from "../../../_shared";

interface Props {
  category: Category;
}

export const CategoryHeader: FC<Props> = ({ category }) => {
  return (
    <CategoryHeaderStyled>
      <Typography variant="h2">{category}</Typography>
    </CategoryHeaderStyled>
  );
};
