import React from "react";
import { Container, useForm, Form, Link, useTranslate, Grid } from "../../../_shared";
import { CheckOutData } from "../../types";
import { schemaCheckoutForm, defaultValuesForm } from "../../utils";
import { FormOptions, Summary } from "../../components";

export const Checkout = () => {
  const translate = useTranslate();

  const formContextValue = useForm<CheckOutData>({
    initialValues: defaultValuesForm,
    validationSchema: schemaCheckoutForm,
  });

  const onSubmit = (data: CheckOutData) => {
    console.log(data);
  };

  return (
    <Container
      maxWidth="lg"
      style={{ marginBottom: "140px", marginTop: "80px" }}
    >
      <Link variant="goBack" to="/">
        {translate("productAction.back")}
      </Link>

      <Form formContextValue={formContextValue} onSubmit={onSubmit}>
        <Grid container columnSpacing="30px">
          <Grid item xs={8}>
            <FormOptions />
          </Grid>
          <Grid item xs={4}>
            <Summary />
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};
