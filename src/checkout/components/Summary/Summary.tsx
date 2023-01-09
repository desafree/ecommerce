import React from "react";
import { Button, Typography, useTranslate, Stack } from "../../../_shared";
import { ItemsSummary } from "../ItemsSummary";
import { Totals } from "../Totals";
import { useSelectProductsFromCart } from "../../../cart";
import { calculateTotals } from "../../utils";

export const Summary = () => {
  const translate = useTranslate();
  const items = useSelectProductsFromCart();
  const { total, shipping, vat, grandTotal } = calculateTotals(items);

  return (
    <Stack
      direction="column"
      spacing={4}
      style={{ padding: "32px", background: "white", borderRadius: "8px" }}
    >
      <Typography variant="h6">
        {translate("checkout.summary.title")}
      </Typography>
      <ItemsSummary items={items} />
      <Totals
        total={total}
        shipping={shipping}
        vat={vat}
        grandTotal={grandTotal}
      />
      <Button type="submit">{translate("checkout.summary.continue")}</Button>
    </Stack>
  );
};
