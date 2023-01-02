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
  const { updateItemFromCart, removeItemFromCart } = useCartActions();

  return (
    <ButtonItemStyled>
      <Button
        variant="text"
        onClick={() => {
          if (qty === 1) {
            removeItemFromCart(id);
          } else {
            updateItemFromCart(id, --qty);
          }
        }}
      >
        <Typography variant="body1">-</Typography>
      </Button>
      <Typography variant="body1">{String(qty)}</Typography>
      <Button
        variant="text"
        onClick={() => {
          updateItemFromCart(id, ++qty);
        }}
      >
        <Typography variant="body1">+</Typography>
      </Button>
    </ButtonItemStyled>
  );
};
