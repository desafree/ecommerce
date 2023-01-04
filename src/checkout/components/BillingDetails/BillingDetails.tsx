import { Grid, Input, Typography, useTranslate } from "../../../_shared";

export const BillingDetails = () => {
  const translate = useTranslate();

  return (
    <Grid container columnSpacing="18px" rowSpacing="24px">
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          {translate("checkout.billing.title")}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Input label={translate("checkout.billing.name")} name="name" />
      </Grid>
      <Grid item xs={6}>
        <Input label={translate("checkout.billing.email")} name="email" />
      </Grid>
      <Grid item xs={6}>
        <Input label={translate("checkout.billing.phone")} name="phone" />
      </Grid>
    </Grid>
  );
};
