import React, { FC } from "react";
import { ProductDetailStyled } from "./ProductDetail.styled";
import { TextContainer } from "../TextContainer";
import { Grid, useTranslate } from "../../../_shared";
import { Product } from "../../types";
import { ImageContainer } from "../ImageContainer";
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
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <ImageContainer
            imgUrl={productData.image.desktop}
            name={productData.name}
          ></ImageContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextContainer product={productData}></TextContainer>
        </Grid>
      </Grid>
    </ProductDetailStyled>
  );
};
