import React from "react";
import { ProductsThumbnailStyled } from "./ProductsThumbnail.styled";
import { Section } from "../../../_layout";
import { Thumbnail1 } from "../Thumbnail1";
import { Thumbnail2 } from "../Thumbnail2";
import { Thumbnail3 } from "../Thumbnail3";

export const ProductsThumbnail = () => {
  return (
    <Section>
      <ProductsThumbnailStyled>
        <Thumbnail1 />
        <Thumbnail2 />
        <Thumbnail3 />
      </ProductsThumbnailStyled>
    </Section>
  );
};
