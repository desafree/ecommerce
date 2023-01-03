import React, { FC } from "react";
import { Stack } from "../../../_shared";
import { Typography } from "../../../_shared";

interface Props {
  title: string;
  value: number;
}

export const TotalRow: FC<Props> = ({ title, value }) => {
  return (
    <Stack justifyContent="space-between">
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h6">{"$" + value}</Typography>
    </Stack>
  );
};
