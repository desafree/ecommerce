import React, { FC } from "react";
import { HalfSectionProductStyled } from "./HalfSectionProduct.styled";
import { Grid, Typography, Link, Box, useTranslate } from "../../../_shared";
import { useSelectProductBySlug } from "../../hooks";

interface Props {
  product: string;
  direction: "right" | "left";
}

export const HalfSectionProduct: FC<Props> = ({ product, direction }) => {
  const productData = useSelectProductBySlug(product)!;

  const translate = useTranslate();

  return (
    <HalfSectionProductStyled>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction={direction === "right" ? "row" : "row-reverse"}
      >
        <Grid item xs={12} md={6} className="img-container">
          <Box
            mr={direction === "right" ? 5 : 0}
            ml={direction === "right" ? 0 : 5}
          >
            <img src={productData.image.desktop} alt={productData.name} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className="text">
          {productData.new && (
            <Box mb={3}>
              <Typography variant="overline">
                {translate("productAction.new")}
              </Typography>
            </Box>
          )}

          <Box mb={3}>
            <Typography variant="h2">{productData.name}</Typography>
          </Box>
          <Box mb={3}>
            <Typography variant="body1">{productData.description}</Typography>
          </Box>
          <Link
            variant="primary"
            to={`/${productData.category}/${productData.slug}`}
          >
            {translate("productAction.see")}
          </Link>
        </Grid>
      </Grid>
    </HalfSectionProductStyled>
  );
};
