import React, { FC } from "react";
import { ImageContainerStyled } from "./ImageContainer.styled";

interface Props {
  name: string;
  imgUrl: string;
}

export const ImageContainer: FC<Props> = ({ name, imgUrl }) => {
  return (
    <ImageContainerStyled>
      <img src={imgUrl} alt={name} />
    </ImageContainerStyled>
  );
};
