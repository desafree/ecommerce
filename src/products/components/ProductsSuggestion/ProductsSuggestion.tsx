import React, { FC } from "react";
import { ProductsSuggestionStyled } from "./ProductsSuggestion.styled";
import { ProductPreview } from "../../../_shared";
import { ProductSuggestion } from "../../types";

interface Props {
  suggestions: ProductSuggestion[];
}

export const ProductsSuggestion: FC<Props> = ({ suggestions }) => {
  return (
    <ProductsSuggestionStyled>
      {suggestions.map((suggestion) => {
        return <ProductPreview product={suggestion} key={suggestion.slug} />;
      })}
    </ProductsSuggestionStyled>
  );
};
