import React from "react";
import { Grid, Input, Typography, useTranslate } from "../../../_shared";

export const ShippingDetails = () => {
  const translate = useTranslate();

  return (
    <Grid container columnSpacing="18px" rowSpacing="24px">
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          {translate("checkout.shipping.title")}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Input name={translate("checkout.shipping.address")} />
      </Grid>
      <Grid item xs={6}>
        <Input name={translate("checkout.shipping.zip")} />
      </Grid>
      <Grid item xs={6}>
        <Input name={translate("checkout.shipping.city")} />
      </Grid>
      <Grid item xs={6}>
        <Input name={translate("checkout.shipping.country")} />
      </Grid>
    </Grid>
  );
};
