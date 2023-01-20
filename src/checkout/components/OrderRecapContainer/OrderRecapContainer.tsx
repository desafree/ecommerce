import React from "react";
import { OrderRecapContainerStyled } from "./OrderRecapContainer.styled";
import { Typography, Button, useTranslate } from "../../../_shared";
import { ItemsRecap } from "../ItemsRecap";
import { useCartActions } from "../../../cart";
import { useGoTo } from "../../../_shared";

export const OrderRecapContainer = () => {
  const translate = useTranslate();
  const { removeAllFromCart } = useCartActions();
  const goHome = useGoTo("/");

  const handleCLick = () => {
    removeAllFromCart();
    goHome();
  };

  return (
    <OrderRecapContainerStyled>
      <img
        src="/assets/checkout/icon-order-confirmation.svg"
        alt="cart check"
      />
      <Typography
        variant="h3"
        style={{ marginBottom: "24px", marginTop: "33px" }}
        dataTestId="thank-you-notification"
      >
        {translate("checkout.detail.thanks")}
      </Typography>
      <Typography variant="body1">
        {translate("checkout.detail.notification")}
      </Typography>
      <ItemsRecap />
      <Button
        variant="primary"
        onClick={handleCLick}
        dataTestId="checkout-back-to-home"
      >
        {translate("checkout.detail.back")}
      </Button>
    </OrderRecapContainerStyled>
  );
};
