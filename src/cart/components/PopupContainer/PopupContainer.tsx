import React, { FC } from "react";
import { PopupContainerStyled } from "./PopupContainer.styled";
import { CartInfo } from "../CartInfo";
import { Total } from "../Total";
import { Button, useTranslate } from "../../../_shared";
import { ItemType } from "../../types";
import { Items } from "../Items";
import { calculateTotalFromItems } from "../../utils";

interface Props {
  items: ItemType[];
}

export const PopupContainer: FC<Props> = ({ items }) => {
  const translate = useTranslate();

  return (
    <PopupContainerStyled>
      <CartInfo itemsNumber={items.length} />
      <Items items={items}></Items>
      <Total total={calculateTotalFromItems(items)} />
      <Button variant="orange">{translate("cart.checkout")}</Button>
    </PopupContainerStyled>
  );
};
