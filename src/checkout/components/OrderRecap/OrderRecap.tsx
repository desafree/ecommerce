import React, { FC, useRef } from "react";
import { useClickOutsideListener } from "../../../_shared";
import { OrderRecapContainer } from "../OrderRecapContainer";
import { Popup } from "../../../_shared";

interface Props {
  toggle: () => void;
}

export const OrderRecap: FC<Props> = ({ toggle }) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutsideListener(ref, toggle);

  return (
    <Popup toggle={toggle}>
      <OrderRecapContainer />
    </Popup>
  );
};
