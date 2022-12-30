import React, { FC, useRef } from "react";
import { CartPopupStyled } from "./CartPopup.styled";
import { Container } from "../../../_shared";
import { PopupContainer } from "../PopupContainer";
import { selectProductsFromCart } from "../../slice";
import { useSelector } from "react-redux";
import { useClickOutsideListener } from "../../../_shared";

interface Props {
  toggle: () => void;
}

export const CartPopup: FC<Props> = ({ toggle }) => {
  const items = useSelector(selectProductsFromCart);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutsideListener(ref, toggle);

  return (
    <CartPopupStyled>
      <Container maxWidth="lg">
        <PopupContainer items={items} ref={ref}></PopupContainer>
      </Container>
    </CartPopupStyled>
  );
};
