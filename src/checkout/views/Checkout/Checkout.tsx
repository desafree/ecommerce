import React from "react";
import { Container, useForm, Form, Link, useTranslate } from "../../../_shared";
import { FormData } from "../../types";
import { schemaCheckoutForm, defaultValuesForm } from "../../utils";
import { FormOptions } from "../../components";
import { Grid } from "../../../_shared";

export const Checkout = () => {
  const translate = useTranslate();

  const formContextValue = useForm<FormData>({
    initialValues: defaultValuesForm,
    validationSchema: schemaCheckoutForm,
  });

  const onSubmit = (data: FormData) => {
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
        <Grid container>
          <Grid item xs={9}>
            <FormOptions />
          </Grid>
          <Grid item xs={3}>
            {/*TODO summary cart and checkout functionality*/}
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};
