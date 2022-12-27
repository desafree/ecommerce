import React, { FC } from "react";
import { HalfSectionProductStyled } from "./HalfSectionProduct.styled";
import { selectProductsBySlug } from "../../slice";
import { useSelector } from "react-redux";
import { Grid, Typography, Button, Box } from "../../../_shared";

interface Props {
  product: string;
  direction: "right" | "left";
}

export const HalfSectionProduct: FC<Props> = ({ product, direction }) => {
  const productData = useSelector((state) =>
    selectProductsBySlug(state, product)
  );

  return (
    <HalfSectionProductStyled>
      <Grid
        container={true}
        alignItems={"center"}
        justifyContent={"center"}
        direction={direction === "right" ? "row" : "row-reverse"}
      >
        <Grid item={true} xs={12} md={6} className="img-container">
          <Box
            mr={direction === "right" ? 5 : 0}
            ml={direction === "right" ? 0 : 5}
          >
            <img
              src={`/assets/product-${productData.slug}/desktop/image-product.jpg`}
              alt={productData.name}
            />
          </Box>
        </Grid>
        <Grid item={true} xs={12} md={6} className={"text"}>
          {productData.new && (
            <Box mb={3}>
              <Typography variant={"overline"}>new product</Typography>
            </Box>
          )}

          <Box mb={3}>
            <Typography variant={"h2"}>{productData.name}</Typography>
          </Box>
          <Box mb={3}>
            <Typography variant={"body1"}>{productData.description}</Typography>
          </Box>
          <Button variant={"orange"}>see product</Button>
        </Grid>
      </Grid>
    </HalfSectionProductStyled>
  );
};
