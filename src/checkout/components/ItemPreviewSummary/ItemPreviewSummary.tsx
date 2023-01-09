import React, { FC } from "react";
import { Typography, Stack } from "../../../_shared";
import { ItemType, removeLastWord } from "../../../cart";

interface Props {
  data: ItemType;
}

export const ItemPreviewSummary: FC<Props> = ({ data }) => {
  return (
    <Stack alignItems="center" spacing="16px">
      <img src={data.image} alt={data.name} style={{ width: "64px" }} />
      <Stack
        direction="column"
        alignItems="flex-start"
        style={{ marginRight: "auto !important" }}
      >
        <Typography variant="smallBold">{removeLastWord(data.name)}</Typography>
        <Typography variant="smallBold">{"$" + data.price}</Typography>
      </Stack>
      <Typography variant="body1">{"x" + data.qty}</Typography>
    </Stack>
  );
};
