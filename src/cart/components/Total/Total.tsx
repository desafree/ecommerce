import React, { FC } from "react";
import { TotalStyled } from "./Total.styled";
import { useTranslate } from "../../../_shared";
import { Typography } from "../../../_shared";

interface Props {
  total: number;
}

export const Total: FC<Props> = ({ total }) => {
  const translate = useTranslate();

  return (
    <TotalStyled>
      <Typography variant="h6">{translate("cart.total")}</Typography>
      <Typography variant="h6" dataTestId="cart-items-total">
        {"$ " + String(total)}
      </Typography>
    </TotalStyled>
  );
};
