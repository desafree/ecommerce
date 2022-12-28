import React, { FC } from "react";
import { ProductPreviewStyled } from "./ProductPreview.styled";
import { Typography } from "../Typography";
import { Button } from "../Button";
import { Product } from "../../../products";

interface Props {
  product: Product;
}

export const ProductPreview: FC<Props> = ({ product }) => {
  return (
    <ProductPreviewStyled>
      <div className="img-container">
        <img src={product.image.desktop} alt={product.name} />
      </div>
      <Typography variant="h6">{product.name}</Typography>
      <Button variant="orange" href={`/${product.slug}`}>
        Shop
      </Button>
    </ProductPreviewStyled>
  );
};
