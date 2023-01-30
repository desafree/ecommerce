import React from "react";
import { OrderRecapContainerStyled } from "./OrderRecapContainer.styled";
import { Typography, Button, useTranslate } from "../../../_shared";
import { ItemsRecap } from "../ItemsRecap";
import { useCartActions } from "../../../cart";
import { useGoTo } from "../../../_shared";
import { Check } from "../OrderRecap/Check";
import { Animated } from "../../../_shared/animation/Animated";

export const OrderRecapContainer = () => {
  const translate = useTranslate();
  const { removeAllFromCart } = useCartActions();
  const goHome = useGoTo("/");

  const handleCLick = () => {
    removeAllFromCart();
    goHome();
  };

  return (
    <Animated animationRef="fadeIn" component={OrderRecapContainerStyled}>
      <Check />
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
    </Animated>
  );
};
