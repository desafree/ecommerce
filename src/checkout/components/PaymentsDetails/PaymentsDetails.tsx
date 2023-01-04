import { Grid, Input, Typography, Radio, useTranslate } from "../../../_shared";

export const PaymentsDetails = () => {
  const translate = useTranslate();

  return (
    <Grid container columnSpacing="18px" rowSpacing="24px">
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          {translate("checkout.payment.title")}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Radio
          label={translate("checkout.payment.payment-method.title")}
          name="payment-method"
          items={[
            {
              value: "e-money",
              label: translate("checkout.payment.payment-method.e-money"),
            },
            {
              value: "cash-on-delivery",
              label: translate(
                "checkout.payment.payment-method.cash-on-delivery"
              ),
            },
          ]}
        />
      </Grid>
      <Grid item xs={6}>
        <Input
          label={translate("checkout.payment.e-money-number")}
          name="e-money-number"
        />
      </Grid>
      <Grid item xs={6}>
        <Input
          label={translate("checkout.payment.e-money-pin")}
          name="e-money-pin"
        />
      </Grid>
    </Grid>
  );
};
