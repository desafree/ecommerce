import React from "react";
import {
  Container,
  useForm,
  Form,
  Link,
  useTranslate,
  Grid,
  PopUpWrapper,
} from "../../../_shared";
import { CheckOutData } from "../../types";
import { schemaCheckoutForm, defaultValuesForm } from "../../utils";
import { FormOptions, Summary, OrderRecap } from "../../components";
import { useToggle } from "../../../cart";

export const Checkout = () => {
  const translate = useTranslate();
  const { toggle, on } = useToggle();

  const formContextValue = useForm<CheckOutData>({
    initialValues: defaultValuesForm,
    validationSchema: schemaCheckoutForm,
  });

  const onSubmit = () => {
    toggle();
  };

  return (
    <>
      <Container
        maxWidth="lg"
        style={{ marginBottom: "140px", marginTop: "80px" }}
      >
        <Link variant="goBack" to="/">
          {translate("productAction.back")}
        </Link>

        <Form formContextValue={formContextValue} onSubmit={onSubmit}>
          <Grid container columnSpacing={4}>
            <Grid item xs={8}>
              <FormOptions />
            </Grid>
            <Grid item xs={4}>
              <Summary />
            </Grid>
          </Grid>
        </Form>
      </Container>
      {on && (
        <PopUpWrapper>
          <OrderRecap toggle={toggle} />
        </PopUpWrapper>
      )}
    </>
  );
};
