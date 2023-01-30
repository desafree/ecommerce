import React, { FC } from "react";
import { ProductImagesStyled } from "./ProductImages.styled";
import { Animated } from "../../../_shared/animation/Animated";

interface Props {
  imageList: [string, string, string];
}

export const ProductImages: FC<Props> = ({ imageList }) => {
  return (
    <Animated
      animationRef="fadeOnView"
      component={ProductImagesStyled}
      imageList={imageList}
    >
      <div className="container1" />
      <div className="container2" />
      <div className="container3" />
    </Animated>
  );
};
