import React, { FC } from "react";
import { ItemsStyled } from "./Items.styled";
import { ItemType } from "../../types";
import { CartItem } from "../CartItem";

interface Props {
  items: ItemType[];
}

export const Items: FC<Props> = ({ items }) => {
  return (
    <ItemsStyled>
      {items.map((item) => {
        return <CartItem data={item} key={item.name} />;
      })}
    </ItemsStyled>
  );
};
