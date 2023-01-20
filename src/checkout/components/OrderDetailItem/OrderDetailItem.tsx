import React, { FC } from "react";
import { Stack, Typography } from "../../../_shared";
import { ItemType, removeLastWord } from "../../../cart";

interface Props {
  item: ItemType;
}

export const OrderDetailItem: FC<Props> = ({ item }) => {
  return (
    <Stack spacing={2} style={{ marginBottom: "16px" }}>
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "50px", height: "50px" }}
      />
      <Stack direction="column" alignItems="flex-start">
        <Typography variant="smallBold" dataTestId="checkout-recap-item-name">
          {removeLastWord(item.name, " ")}
        </Typography>
        <Typography variant="smallBold" dataTestId="checkout-recap-item-price">
          {"$" + item.price}
        </Typography>
      </Stack>
      <Typography
        variant="smallBold"
        style={{ marginLeft: "auto !important" }}
        dataTestId="checkout-recap-item-qty"
      >
        {"x" + item.qty}
      </Typography>
    </Stack>
  );
};
