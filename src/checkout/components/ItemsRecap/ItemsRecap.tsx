import React from "react";
import { Grid } from "../../../_shared";
import { calculateTotalFromItems, useCartProducts } from "../../../cart";
import { OrderDetailRecap } from "../OrderDetailRecap";
import { OrderTotalRecap } from "../OrderTotalRecap";

export const ItemsRecap = () => {
  const items = useCartProducts();
  const total = calculateTotalFromItems(items);

  return (
    <Grid container style={{ marginTop: "33px", marginBottom: "48px" }}>
      <Grid item xs={6}>
        <OrderDetailRecap items={items} />
      </Grid>
      <Grid item xs={6}>
        <OrderTotalRecap total={total} />
      </Grid>
    </Grid>
  );
};
