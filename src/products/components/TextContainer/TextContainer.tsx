import React, { FC } from "react";
import { Stack, Typography, useTranslate } from "../../../_shared";
import { Product } from "../../types";
import { CartActions } from "../CartActions";

interface Props {
  product: Product;
}

export const TextContainer: FC<Props> = ({ product }) => {
  const translate = useTranslate();

  return (
    <Stack direction="column" spacing={4}>
      {product.new && (
        <Typography variant="overline">
          {translate("productAction.new")}
        </Typography>
      )}
      <Typography variant="h2" dataTestId="product-detail-name">
        {product.name}
      </Typography>
      <Typography variant="body1">{product.description}</Typography>
      <Typography variant="h5" dataTestId="product-detail-price">
        {"$ " + String(product.price)}
      </Typography>
      <CartActions id={product.id}></CartActions>
    </Stack>
  );
};
