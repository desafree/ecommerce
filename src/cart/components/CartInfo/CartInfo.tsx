import React, { FC } from "react";
import { CartInfoStyled } from "./CartInfo.styled";
import { Typography, useTranslate } from "../../../_shared";
import { Button } from "../../../_shared";
import { useCartActions } from "../../hooks";

interface Props {
  itemsNumber: number;
}

export const CartInfo: FC<Props> = ({ itemsNumber }) => {
  const { removeAllFromCart } = useCartActions();
  const translate = useTranslate();

  return (
    <CartInfoStyled>
      <Typography variant="h6">{`cart (${itemsNumber})`}</Typography>
      <Button variant="text" onClick={removeAllFromCart}>
        {translate("productAction.removeAll")}
      </Button>
    </CartInfoStyled>
  );
};
