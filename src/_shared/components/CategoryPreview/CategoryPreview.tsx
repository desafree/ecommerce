import React, { FC } from "react";
import { Category } from "../../../products";
import { CategoryPreviewStyled } from "./CategoryPreview.styled";
import { Typography, Link } from "../index";
import { useTranslate } from "../../i18n";
import { Animated } from "../../animation/Animated";

interface Props {
  category: Category;
  url: string;
}

const CategoryPreview: FC<Props> = ({ category, url }) => {
  const translate = useTranslate();

  return (
    <Animated component={CategoryPreviewStyled} animationRef="fadeOnView">
      <div className="img-container">
        <img src={url} alt={category} style={{ width: "100%" }} />
      </div>
      <Typography variant="h6" style={{ paddingTop: "110px" }}>
        {category}
      </Typography>
      <Link variant="transparent" to={`/${category}`}>
        {translate("productAction.shop")}
      </Link>
    </Animated>
  );
};

export default CategoryPreview;
