import React, { FC } from "react";
import { OrderRecapContainer } from "../OrderRecapContainer";
import { Popup } from "../../../_shared";

interface Props {
  toggle: () => void;
}

export const OrderRecap: FC<Props> = ({ toggle }) => {
  return (
    <Popup toggle={toggle}>
      <OrderRecapContainer />
    </Popup>
  );
};
