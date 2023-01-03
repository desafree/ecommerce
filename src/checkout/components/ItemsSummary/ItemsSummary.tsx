import React from "react";
import { ItemsSummaryStyled } from "./ItemsSummary.styled";
import { ItemPreviewSummary } from "../ItemPreviewSummary";

/*TODO: after rebase*/
const itemsBoilerplate = [
  {
    name: "YX1 Wireless",
    price: 599,
    image:
      "/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg",
    qty: 2,
    id: 1,
  },
  {
    name: "XX59 Headphones",
    price: 599,
    image:
      "/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
    qty: 2,
    id: 2,
  },
];

export const ItemsSummary = () => {
  return (
    <ItemsSummaryStyled>
      {itemsBoilerplate.map((item) => {
        return <ItemPreviewSummary data={item} key={item.id} />;
      })}
    </ItemsSummaryStyled>
  );
};
