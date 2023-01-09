import React, { FC } from "react";
import { Stack } from "../../../_shared";
import { ItemPreviewSummary } from "../ItemPreviewSummary";
import { ItemType } from "../../../cart";

interface Props {
  items: ItemType[];
}

export const ItemsSummary: FC<Props> = ({ items }) => {
  return (
    <Stack direction="column" spacing={3}>
      {items.map((item) => {
        return <ItemPreviewSummary data={item} key={item.id} />;
      })}
    </Stack>
  );
};
