import React, { FC, useState } from "react";
import { QuantityStyled } from "./Quantity.styled";
import { Button, Typography } from "../../../_shared";

interface Props {
  qty: number;
  handleCLickMinus: () => void;
  handleClickPlus: () => void;
}

export const Quantity: FC<Props> = ({
  qty,
  handleClickPlus,
  handleCLickMinus,
}) => {
  return (
    <QuantityStyled>
      <Button onClick={handleCLickMinus}>
        <Typography variant="smallBold">-</Typography>
      </Button>
      <Typography variant="smallBold" dataTestId="quantity-to-add">
        {String(qty)}
      </Typography>
      <Button onClick={handleClickPlus}>
        <Typography variant="smallBold">+</Typography>
      </Button>
    </QuantityStyled>
  );
};
