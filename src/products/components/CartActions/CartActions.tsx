import React, { FC, useState } from "react";
import { CartActionsStyled } from "./CartActions.styled";
import { Button, useTranslate } from "../../../_shared";
import { Quantity } from "../Quantity";
import { useCartActions } from "../../../cart";

interface Props {
  id: number;
}

export const CartActions: FC<Props> = ({ id }) => {
  const translate = useTranslate();
  const [qty, setQty] = useState(1);
  const { addToCart } = useCartActions();

  const handleCLickMinus = () => {
    if (qty === 1) return;
    setQty((prevState) => --prevState);
  };

  const handleClickPlus = () => {
    setQty((prevState) => ++prevState);
  };

  return (
    <CartActionsStyled>
      <Quantity
        qty={qty}
        handleCLickMinus={handleCLickMinus}
        handleClickPlus={handleClickPlus}
      />
      <Button
        variant="orange"
        onClick={() => {
          addToCart(id, qty);
        }}
      >
        {translate("productAction.add")}
      </Button>
    </CartActionsStyled>
  );
};
