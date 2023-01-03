import React from "react";
import { Button, Typography, useTranslate, Stack } from "../../../_shared";
import { ItemsSummary } from "../ItemsSummary";
import { Totals } from "../Totals";
import {
  calculateTotalFromItems,
  useSelectProductsFromCart,
} from "../../../cart";

export const Summary = () => {
  const translate = useTranslate();
  const items = useSelectProductsFromCart();
  const total = calculateTotalFromItems(items);

  return (
    <Stack
      direction="column"
      spacing="32px"
      style={{ padding: "32px", background: "white", borderRadius: "8px" }}
    >
      <Typography variant="h6">
        {translate("checkout.summary.title")}
      </Typography>
      <ItemsSummary items={items} />
      <Totals total={total} />
      <Button type="submit">{translate("checkout.summary.continue")}</Button>
    </Stack>
  );
};
