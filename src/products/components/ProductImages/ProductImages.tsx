import React, { FC } from "react";
import { ProductImagesStyled } from "./ProductImages.styled";

interface Props {
  imageList: [string, string, string];
}

export const ProductImages: FC<Props> = ({ imageList }) => {
  return (
    <ProductImagesStyled imageList={imageList}>
      <div className="container1"></div>
      <div className="container2"></div>
      <div className="container3"></div>
    </ProductImagesStyled>
  );
};
