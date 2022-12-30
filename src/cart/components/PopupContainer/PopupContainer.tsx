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

export const PopupContainer = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const translate = useTranslate();

    return (
      <PopupContainerStyled ref={ref}>
        <CartInfo itemsNumber={props.items.length} />
        <Items items={props.items}></Items>
        <Total total={calculateTotalFromItems(props.items)} />
        <Button variant="orange">{translate("cart.checkout")}</Button>
      </PopupContainerStyled>
    );
  }
);
