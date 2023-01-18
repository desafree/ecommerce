import React, { FC } from "react";
import { Category } from "../../../products";
import { CategoryPreviewStyled } from "./CategoryPreview.styled";
import { Typography, Link } from "../index";
import { useTranslate } from "../../i18n";

interface Props {
  category: Category;
  url: string;
}

const CategoryPreview: FC<Props> = ({ category, url }) => {
  const translate = useTranslate();

  return (
    <CategoryPreviewStyled>
      <div className="img-container">
        <img src={url} alt={category} style={{ width: "100%" }} />
      </div>
      <Typography variant="h6" style={{ paddingTop: "110px" }}>
        {category}
      </Typography>
      <Link
        variant="transparent"
        to={`/${category}`}
        dataTestId={`${category}-go-to`}
      >
        {translate("productAction.shop")}
      </Link>
    </CategoryPreviewStyled>
  );
};

export default CategoryPreview;
