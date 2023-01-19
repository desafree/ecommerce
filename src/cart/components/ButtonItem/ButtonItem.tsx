import React, { FC } from "react";
import { ButtonItemStyled } from "./ButtonItem.styled";
import { Typography } from "../../../_shared";
import { Button } from "../../../_shared";
import { useCartActions } from "../../hooks";

interface Props {
  qty: number;
  id: number;
}

export const ButtonItem: FC<Props> = ({ qty, id }) => {
  const { removeOneQtyToItem, addOneQtyToItem } = useCartActions();

  return (
    <ButtonItemStyled>
      <Button
        variant="text"
        dataTestId="decrease-item-from-cart"
        onClick={() => {
          removeOneQtyToItem(id, qty);
        }}
      >
        <Typography variant="body1">-</Typography>
      </Button>
      <Typography variant="body1" dataTestId="cart-item-qty">
        {String(qty)}
      </Typography>
      <Button
        variant="text"
        dataTestId="increase-item-from-cart"
        onClick={() => {
          addOneQtyToItem(id, ++qty);
        }}
      >
        <Typography variant="body1">+</Typography>
      </Button>
    </ButtonItemStyled>
  );
};
