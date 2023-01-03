import React, { FC } from "react";
import { Typography, useTranslate, Button, Stack } from "../../../_shared";
import { useCartActions } from "../../hooks";

interface Props {
  itemsNumber: number;
}

export const CartInfo: FC<Props> = ({ itemsNumber }) => {
  const { removeAllFromCart } = useCartActions();
  const translate = useTranslate();

  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      style={{ marginBottom: "32px" }}
    >
      <Typography variant="h6">{`cart (${itemsNumber})`}</Typography>
      <Button variant="text" onClick={removeAllFromCart}>
        {translate("productAction.removeAll")}
      </Button>
    </Stack>
  );
};
