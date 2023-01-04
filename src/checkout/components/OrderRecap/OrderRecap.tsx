import React, { FC, useRef } from "react";
import { useClickOutsideListener } from "../../../_shared";
import { OrderRecapStyled } from "./OrderRecap.styled";
import { OrderRecapContainer } from "../OrderRecapContainer";

interface Props {
  toggle: () => void;
}

export const OrderRecap: FC<Props> = ({ toggle }) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutsideListener(ref, toggle);

  return (
    <OrderRecapStyled>
      <OrderRecapContainer ref={ref} />
    </OrderRecapStyled>
  );
};
