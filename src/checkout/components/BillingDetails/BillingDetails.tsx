import { Grid, Input, Typography, useTranslate } from "../../../_shared";

export const BillingDetails = () => {
  const translate = useTranslate();

  return (
    <Grid
      container
      columnSpacing={2}
      rowSpacing={3}
      style={{ marginBottom: "30px" }}
    >
      <Grid item xs={12} lg={12}>
        <Typography variant="subtitle1">
          {translate("checkout.billing.title")}
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Input
          label={translate("checkout.billing.name")}
          name="name"
          dataTestId="name-input"
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Input
          label={translate("checkout.billing.email")}
          name="email"
          dataTestId="email-input"
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Input
          label={translate("checkout.billing.phone")}
          name="phone"
          dataTestId="phone-input"
        />
      </Grid>
    </Grid>
  );
};
