import React, { FC, useRef } from "react";
import { CartPopupStyled } from "./CartPopup.styled";
import { useClickOutsideListener } from "../../../_shared";
import { PopupContainer } from "../PopupContainer";
import { useCartProducts } from "../../hooks";

interface Props {
  toggle: () => void;
}

export const CartPopup: FC<Props> = ({ toggle }) => {
  const items = useCartProducts();
  const ref = useRef<HTMLDivElement>(null);
  useClickOutsideListener(ref, toggle);

  return (
    <CartPopupStyled>
      <PopupContainer items={items} ref={ref}></PopupContainer>
    </CartPopupStyled>
  );
};
