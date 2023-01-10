import React, { FC } from "react";
import { OrderDetailRecapStyled } from "./OrderDetailRecap.styled";
import { ItemType, useToggle } from "../../../cart";
import { OrderDetailItem } from "../OrderDetailItem";
import { Button, useTranslate } from "../../../_shared";

interface Props {
  items: ItemType[];
}

export const OrderDetailRecap: FC<Props> = ({ items }) => {
  const { on: viewMore, toggle } = useToggle();
  const translate = useTranslate();

  return (
    <OrderDetailRecapStyled>
      {!viewMore ? (
        <OrderDetailItem item={items[0]} />
      ) : (
        items.map((item) => {
          return <OrderDetailItem item={item} key={item.id} />;
        })
      )}
      <Button variant="text" onClick={toggle}>
        {viewMore
          ? translate("checkout.detail.view-less")
          : translate("checkout.detail.view-more")}
      </Button>
    </OrderDetailRecapStyled>
  );
};
