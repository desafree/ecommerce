import React from "react";
import { FormOptionsStyled } from "./FormOptions.styled";
import { BillingDetails } from "../BillingDetails";
import { ShippingDetails } from "../ShippingDetails";
import { Typography, Box, useTranslate } from "../../../_shared";
import { PaymentsDetails } from "../PaymentsDetails";

export const FormOptions = () => {
  const translate = useTranslate();

  return (
    <FormOptionsStyled>
      <Typography variant="h2" style={{ marginBottom: "41px" }}>
        {translate("checkout.title")}
      </Typography>
      <Box mb={5}>
        <BillingDetails />
      </Box>
      <Box mb={5}>
        <ShippingDetails />
      </Box>
      <Box mb={5}>
        <PaymentsDetails />
      </Box>
    </FormOptionsStyled>
  );
};
