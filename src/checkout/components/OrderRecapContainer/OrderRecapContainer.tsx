import React from "react";
import { OrderRecapContainerStyled } from "./OrderRecapContainer.styled";
import { Typography, Button, useTranslate } from "../../../_shared";
import { ItemsRecap } from "../ItemsRecap";
import { useCartActions } from "../../../cart";
import { useGoHome } from "../../hooks";

export const OrderRecapContainer = React.forwardRef<HTMLDivElement>(
  (props, ref) => {
    const translate = useTranslate();
    const { removeAllFromCart } = useCartActions();
    const goHome = useGoHome();

    const handleCLick = () => {
      removeAllFromCart();
      goHome();
    };

    return (
      <OrderRecapContainerStyled ref={ref}>
        <img
          src="/assets/checkout/icon-order-confirmation.svg"
          alt="cart check"
        />
        <Typography
          variant="h3"
          style={{ marginBottom: "24px", marginTop: "33px" }}
        >
          {translate("checkout.detail.thanks")}
        </Typography>
        <Typography variant="body1">
          {translate("checkout.detail.notification")}
        </Typography>
        <ItemsRecap />
        <Button variant="primary" onClick={handleCLick}>
          {translate("checkout.detail.back")}
        </Button>
      </OrderRecapContainerStyled>
    );
  }
);
