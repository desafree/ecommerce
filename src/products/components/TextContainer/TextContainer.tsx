import React, { FC } from "react";
import { Box, Typography } from "../../../_shared";
import { Product } from "../../types";
import { ButtonProduct } from "../ButtonProduct";

interface Props {
  product: Product;
}

export const TextContainer: FC<Props> = ({ product }) => {
  return (
    <div>
      {product.new && (
        <Box mb={3}>
          <Typography variant={"overline"}>new product</Typography>
        </Box>
      )}
      <Box mb={3}>
        <Typography variant={"h2"}>{product.name}</Typography>
      </Box>
      <Box mb={3}>
        <Typography variant={"body1"}>{product.description}</Typography>
      </Box>
      <Box mb={3}>
        <Typography variant={"h5"}>{"$ " + String(product.price)}</Typography>
      </Box>
      <ButtonProduct></ButtonProduct>
    </div>
  );
};
