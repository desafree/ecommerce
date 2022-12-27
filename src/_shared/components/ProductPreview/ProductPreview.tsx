import React, { FC } from "react";
import { ProductPreviewStyled } from "./ProductPreview.styled";
import { Typography } from "../Typography";
import { Button } from "../Button";

interface Props {
  product: string;
}

export const ProductPreview: FC<Props> = ({ product }) => {
  return (
    <ProductPreviewStyled>
      <div className="img-container">
        <img
          src={`/assets/product-${product}/desktop/image-product.jpg`}
          alt={product}
        />
      </div>
      <Typography variant="h6">{product}</Typography>
      <Button variant="orange" href={`/${product}`}>
        Shop
      </Button>
    </ProductPreviewStyled>
  );
};
