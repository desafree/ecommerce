import React, { FC } from "react";
import { ItemType } from "../../types";
import { CartItem } from "../CartItem";
import { Stack } from "../../../_shared";

interface Props {
  items: ItemType[];
}

export const Items: FC<Props> = ({ items }) => {
  return (
    <Stack direction="column" spacing={2} style={{ marginBottom: "32px" }}>
      {items.map((item) => {
        return <CartItem data={item} key={item.name} />;
      })}
    </Stack>
  );
};
