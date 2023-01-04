import React from "react";
import { OrderRecapContainerStyled } from "./OrderRecapContainer.styled";
import { Typography, Button, useTranslate } from "../../../_shared";
import { ItemsRecap } from "../ItemsRecap";
import { useNavigate } from "react-router-dom";
import { useCartActions } from "../../../cart";

export const OrderRecapContainer = React.forwardRef<HTMLDivElement>(
  (props, ref) => {
    const translate = useTranslate();
    const { removeAllFromCart } = useCartActions();
    const navigate = useNavigate();

    const handleCLick = () => {
      removeAllFromCart();
      navigate("/");
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
