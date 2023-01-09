import React, { FC } from "react";
import { Stack, Typography, formatNumber } from "../../../_shared";

interface Props {
  title: string;
  value: number;
}

export const TotalRow: FC<Props> = ({ title, value }) => {
  return (
    <Stack justifyContent="space-between">
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h6">{"$" + formatNumber(value)}</Typography>
    </Stack>
  );
};
