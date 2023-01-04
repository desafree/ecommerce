import React from "react";
import { Grid } from "../../../_shared";
import {
  calculateTotalFromItems,
  useSelectProductsFromCart,
} from "../../../cart";
import { OrderDetailRecap } from "../OrderDetailRecap";
import { OrderTotalRecap } from "../OrderTotalRecap";

export const ItemsRecap = () => {
  const items = useSelectProductsFromCart();
  const total = calculateTotalFromItems(items);

  return (
    <Grid container alignItems={"stretch"} style={{ margin: "33px 0 48px" }}>
      <Grid item xs={6}>
        <OrderDetailRecap items={items} />
      </Grid>
      <Grid item xs={6}>
        <OrderTotalRecap total={total} />
      </Grid>
    </Grid>
  );
};
