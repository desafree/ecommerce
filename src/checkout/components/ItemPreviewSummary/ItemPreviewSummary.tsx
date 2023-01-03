import React, { FC } from "react";
import { Typography, Stack } from "../../../_shared";
import { ItemType } from "../../../cart";

interface Props {
  data: ItemType;
}

export const ItemPreviewSummary: FC<Props> = ({ data }) => {
  return (
    <Stack alignItems="center" spacing="16px">
      <img src={data.image} alt="" style={{ width: "64px" }} />
      <Stack
        direction="column"
        alignItems="flex-start"
        style={{ marginRight: "auto !important" }}
      >
        <Typography variant="smallBold">{data.name}</Typography>
        <Typography variant="smallBold">{String(data.price)}</Typography>
      </Stack>
      <Typography variant="body1">{"x" + data.qty}</Typography>
    </Stack>
  );
};
