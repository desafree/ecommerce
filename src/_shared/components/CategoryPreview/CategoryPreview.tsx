import React, { FC } from "react";
import { Category } from "../../../products";
import { CategoryPreviewStyled } from "./CategoryPreview.styled";
import { Typography, Button } from "../index";

interface Props {
  category: Category;
  url: string;
}

const CategoryPreview: FC<Props> = ({ category, url }) => {
  return (
    <CategoryPreviewStyled>
      <div className="img-container">
        <img src={url} alt={category} style={{ width: "100%" }} />
      </div>
      <Typography variant="h6" style={{ paddingTop: "110px" }}>
        {category}
      </Typography>
      <Button variant="transparent" href={`/${category}`}>
        Shop
      </Button>
    </CategoryPreviewStyled>
  );
};

export default CategoryPreview;
