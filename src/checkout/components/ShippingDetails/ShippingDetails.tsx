import React from "react";
import { Grid, Input, Typography, useTranslate } from "../../../_shared";

export const ShippingDetails = () => {
  const translate = useTranslate();

  return (
    <Grid
      container
      columnSpacing={2}
      rowSpacing={3}
      style={{ marginBottom: "30px" }}
    >
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          {translate("checkout.shipping.title")}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Input label={translate("checkout.shipping.address")} name="address" />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Input label={translate("checkout.shipping.zip")} name="zip" />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Input label={translate("checkout.shipping.city")} name="city" />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Input label={translate("checkout.shipping.country")} name="country" />
      </Grid>
    </Grid>
  );
};
