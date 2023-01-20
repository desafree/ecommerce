import React, { FC } from "react";
import { Stack, Typography, formatNumber } from "../../../_shared";

interface Props {
  title: string;
  value: number;
  dataTestId: string;
}

export const TotalRow: FC<Props> = ({ title, value, dataTestId }) => {
  return (
    <Stack justifyContent="space-between">
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h6" dataTestId={dataTestId}>
        {"$" + formatNumber(value)}
      </Typography>
    </Stack>
  );
};
