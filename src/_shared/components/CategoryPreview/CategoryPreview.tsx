import React, { FC } from "react";
import { Category } from "../../../products";
import { CategoryPreviewStyled } from "./CategoryPreview.styled";
import { Typography, Link } from "../index";
import { useTranslate } from "../../i18n";

interface Props {
  category: Category;
  imageUrl: string;
}

const CategoryPreview: FC<Props> = ({ category }) => {
  const translate = useTranslate();

  return (
    <CategoryPreviewStyled>
      <div className="img-container">
        <img
          src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
          alt={category}
        />
      </div>
      <Typography variant="h6">{category}</Typography>
      <Link variant="transparent" to={`/${category}`}>
        {translate("productAction.shop")}
      </Link>
    </CategoryPreviewStyled>
  );
};

export default CategoryPreview;
