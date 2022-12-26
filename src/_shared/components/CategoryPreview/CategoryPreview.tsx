import React, { FC } from "react";
import { Category } from "../../../products";
import { CategoryPreviewStyled } from "./CategoryPreview.styled";
import { Typography } from "../Typography";
import { Button } from "../index";

interface Props {
  category: Category;
}

const CategoryPreview: FC<Props> = ({ category }) => {
  return (
    <CategoryPreviewStyled>
      <div className="img-container">
        <img
          src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
          alt={category}
        />
      </div>
      <Typography variant="h6">{category}</Typography>
      <Button variant="transparent" href={`/${category}`}>
        Shop
      </Button>
    </CategoryPreviewStyled>
  );
};

export default CategoryPreview;
