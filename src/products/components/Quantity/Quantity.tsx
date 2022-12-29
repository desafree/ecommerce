import React, { useState } from "react";
import { QuantityStyled } from "./Quantity.styled";
import { Button, Typography } from "../../../_shared";

export const Quantity = () => {
  const [qty, setQty] = useState(1);

  const handleCLickMinus = () => {
    if (qty === 1) return;
    setQty((prevState) => --prevState);
  };

  const handleClickPlus = () => {
    setQty((prevState) => ++prevState);
  };

  return (
    <QuantityStyled>
      <Button onClick={handleCLickMinus}>
        <Typography variant="smallBold">-</Typography>
      </Button>
      <Typography variant="smallBold">{String(qty)}</Typography>
      <Button onClick={handleClickPlus}>
        <Typography variant="smallBold">+</Typography>
      </Button>
    </QuantityStyled>
  );
};
