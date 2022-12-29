import React, { FC } from "react";
import { CartInfoStyled } from "./CartInfo.styled";
import { Typography } from "../../../_shared";
import { Button } from "../../../_shared";
import { useCartActions } from "../../hooks";

interface Props {
  itemsNumber: number;
}

export const CartInfo: FC<Props> = ({ itemsNumber }) => {
  const { removeAllFromCart } = useCartActions();

  return (
    <CartInfoStyled>
      <Typography variant="h6">{`cart (${itemsNumber})`}</Typography>
      <Button variant="text" onClick={removeAllFromCart}>
        Remove all
      </Button>
    </CartInfoStyled>
  );
};
