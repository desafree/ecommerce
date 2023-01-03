import React, { FC } from "react";
import { ItemsSummaryStyled } from "./ItemsSummary.styled";
import { ItemPreviewSummary } from "../ItemPreviewSummary";
import { ItemType, useSelectProductsFromCart } from "../../../cart";

interface Props {
  items: ItemType[];
}

export const ItemsSummary: FC<Props> = ({ items }) => {
  return (
    <ItemsSummaryStyled>
      {items.map((item) => {
        return <ItemPreviewSummary data={item} key={item.id} />;
      })}
    </ItemsSummaryStyled>
  );
};
