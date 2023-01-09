import React from "react";
import { FormOptionsStyled } from "./FormOptions.styled";
import { BillingDetails } from "../BillingDetails";
import { ShippingDetails } from "../ShippingDetails";
import { Typography, Stack, useTranslate } from "../../../_shared";
import { PaymentsDetails } from "../PaymentsDetails";

export const FormOptions = () => {
  const translate = useTranslate();

  return (
    <FormOptionsStyled>
      <Typography variant="h2" style={{ marginBottom: "41px" }}>
        {translate("checkout.title")}
      </Typography>
      <Stack direction="column" spacing={4}>
        <BillingDetails />
        <ShippingDetails />
        <PaymentsDetails />
      </Stack>
    </FormOptionsStyled>
  );
};
