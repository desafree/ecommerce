import React, { FC } from "react";
import { CartPopupStyled } from "./CartPopup.styled";
import { Container } from "../../../_shared";
import { PopupContainer } from "../PopupContainer";
import { useSelectProductsFromCart } from "../../hooks/useSelectProductsFromCart";

interface Props {
  toggle: () => void;
}

export const CartPopup: FC<Props> = ({ toggle }) => {
  const items = useSelectProductsFromCart();

  return (
    <CartPopupStyled>
      <Container maxWidth="lg">
        <PopupContainer items={items}></PopupContainer>
      </Container>
    </CartPopupStyled>
  );
};
