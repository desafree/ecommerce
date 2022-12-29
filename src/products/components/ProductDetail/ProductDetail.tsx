import React, { FC } from "react";
import { ProductDetailStyled } from "./ProductDetail.styled";
import { TextContainer } from "../TextContainer";
import { Grid } from "../../../_shared";
import { Product } from "../../types";
import { ImageContainer } from "../ImageContainer";
import { GoBack } from "../GoBack";

interface Props {
  productData: Product;
}

export const ProductDetail: FC<Props> = ({ productData }) => {
  return (
    <ProductDetailStyled>
      <GoBack />
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
