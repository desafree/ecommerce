import { Grid, Input, Typography, Radio, useTranslate } from "../../../_shared";

export const PaymentsDetails = () => {
  const translate = useTranslate();

  return (
    <Grid container columnSpacing={2} rowSpacing={3}>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          {translate("checkout.payment.title")}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Radio
          label={translate("checkout.payment.payment-method.title")}
          name="payment-method"
          dataTestId="payment-method-radio"
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
      <Grid item xs={12} lg={6}>
        <Input
          label={translate("checkout.payment.e-money-number")}
          name="e-money-number"
          dataTestId="e-money-number-input"
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Input
          label={translate("checkout.payment.e-money-pin")}
          name="e-money-pin"
          dataTestId="e-money-pin-input"
        />
      </Grid>
    </Grid>
  );
};
