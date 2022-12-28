import React, { FC } from "react";
import { ProductDetailStyled } from "./ProductDetail.styled";
import { TextContainer } from "../TextContainer";
import { Grid } from "../../../_shared";
import { Product } from "../../types";
import { ImageContainer } from "../ImageContainer";
import { useGoBack } from "../../hooks";

interface Props {
  productData: Product;
}

export const ProductDetail: FC<Props> = ({ productData }) => {
  const handleClick = useGoBack();

  return (
    <ProductDetailStyled>
      <button onClick={handleClick}>Go back</button>
      <Grid container={true} alignItems={"center"} justifyContent={"center"}>
        <Grid item={true} xs={12} md={6}>
          <ImageContainer
            slug={productData.slug}
            name={productData.name}
          ></ImageContainer>
        </Grid>
        <Grid item={true} xs={12} md={6}>
          <TextContainer product={productData}></TextContainer>
        </Grid>
      </Grid>
    </ProductDetailStyled>
  );
};