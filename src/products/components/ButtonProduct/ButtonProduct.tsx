import React, { useState } from "react";
import { ButtonProductStyled } from "./ButtonProduct.styled";
import { Button } from "../../../_shared";

export const ButtonProduct = () => {
  const [qty, setQty] = useState(1);

  const handleCLickMinus = () => {
    if (qty === 1) return;
    setQty((prevState) => --prevState);
  };

  const handleClickPlus = () => {
    setQty((prevState) => ++prevState);
  };

  return (
    <ButtonProductStyled>
      <div>
        <button onClick={handleCLickMinus}>-</button>
        <p>{qty}</p>
        <button onClick={handleClickPlus}>+</button>
      </div>
      <Button variant={"orange"}>ADD TO CART</Button>
    </ButtonProductStyled>
  );
};
