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
  const { updateItemFromCart } = useCartActions();

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
        variant="primary"
        onClick={() => {
          updateItemFromCart(id, qty);
        }}
        dataTestId="add-to-cart"
      >
        {translate("productAction.add")}
      </Button>
    </CartActionsStyled>
  );
};
