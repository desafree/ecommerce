import React, { FC } from "react";
import { ProductPreviewStyled } from "./ProductPreview.styled";
import { Typography } from "../Typography";
import { Link } from "../Link";
import { ProductSuggestion } from "../../../products";
import { useTranslate } from "../../i18n";

interface Props {
  product: ProductSuggestion;
}

export const ProductPreview: FC<Props> = ({ product }) => {
  const translate = useTranslate();

  return (
    <ProductPreviewStyled>
      <div className="img-container">
        <img src={product.image.desktop} alt={product.name} />
      </div>
      <Typography variant="h6">{product.name}</Typography>
      <Link variant="primary" to={`/suggestion/${product.slug}`}>
        {translate("productAction.see")}
      </Link>
    </ProductPreviewStyled>
  );
};
