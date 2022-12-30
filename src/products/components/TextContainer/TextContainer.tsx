import React, { FC } from "react";
import { Box, Typography, useTranslate } from "../../../_shared";
import { Product } from "../../types";
import { CartActions } from "../CartActions";

interface Props {
  product: Product;
}

export const TextContainer: FC<Props> = ({ product }) => {
  const translate = useTranslate();

  return (
    <div>
      {product.new && (
        <Box mb={3}>
          <Typography variant="overline">
            {translate("productAction.new")}
          </Typography>
        </Box>
      )}
      <Box mb={3}>
        <Typography variant="h2">{product.name}</Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="body1">{product.description}</Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="h5">{"$ " + String(product.price)}</Typography>
      </Box>
      <CartActions></CartActions>
    </div>
  );
};
