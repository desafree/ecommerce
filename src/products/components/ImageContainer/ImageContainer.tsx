import React, { FC } from "react";
import { ImageContainerStyled } from "./ImageContainer.styled";

interface Props {
  name: string;
  slug: string;
}

export const ImageContainer: FC<Props> = ({ name, slug }) => {
  return (
    <ImageContainerStyled>
      <img
        src={`/assets/product-${slug}/desktop/image-product.jpg`}
        alt={name}
      />
    </ImageContainerStyled>
  );
};
