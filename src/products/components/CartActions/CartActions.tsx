import React from "react";
import { CartActionsStyled } from "./CartActions.styled";
import { Button, useTranslate } from "../../../_shared";
import { Quantity } from "../Quantity";

export const CartActions = () => {
  const translate = useTranslate();

  return (
    <CartActionsStyled>
      <Quantity />
      <Button variant="orange">{translate("productAction.add")}</Button>
    </CartActionsStyled>
  );
};
