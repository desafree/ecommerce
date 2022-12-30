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
  const { addToCart, removeFromCart } = useCartActions();

  return (
    <ButtonItemStyled>
      <Button
        variant="text"
        onClick={() => {
          removeFromCart(id);
        }}
      >
        <Typography variant="body1">-</Typography>
      </Button>
      <Typography variant="body1">{String(qty)}</Typography>
      <Button
        variant="text"
        onClick={() => {
          addToCart(id);
        }}
      >
        <Typography variant="body1">+</Typography>
      </Button>
    </ButtonItemStyled>
  );
};
