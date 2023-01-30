import React, { FC } from "react";
import { ProductsSuggestionStyled } from "./ProductsSuggestion.styled";
import { ProductPreview } from "../../../_shared";
import { ProductSuggestion } from "../../types";
import { Animated } from "../../../_shared/animation/Animated";

interface Props {
  suggestions: ProductSuggestion[];
}

export const ProductsSuggestion: FC<Props> = ({ suggestions }) => {
  return (
    <Animated component={ProductsSuggestionStyled} animationRef="fadeOnView">
      {suggestions.map((suggestion) => {
        return <ProductPreview product={suggestion} key={suggestion.slug} />;
      })}
    </Animated>
  );
};
