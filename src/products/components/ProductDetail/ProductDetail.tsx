import React, { FC } from "react";
import { ProductDetailStyled } from "./ProductDetail.styled";
import { TextContainer } from "../TextContainer";
import { Grid, useTranslate, ImageContainer } from "../../../_shared";
import { Product } from "../../types";
import { Link } from "../../../_shared";

interface Props {
  productData: Product;
}

export const ProductDetail: FC<Props> = ({ productData }) => {
  const translate = useTranslate();

  return (
    <ProductDetailStyled>
      <Link variant="goBack" to="/">
        {translate("productAction.back")}
      </Link>
      <Grid container alignItems="center" justifyContent="center" spacing={4}>
        <Grid item xs={12} md={6}>
          <ImageContainer
            size="contain"
            url={productData.image.desktop}
            position="center"
            style={{ minHeight: "500px" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextContainer product={productData}></TextContainer>
        </Grid>
      </Grid>
    </ProductDetailStyled>
  );
};
