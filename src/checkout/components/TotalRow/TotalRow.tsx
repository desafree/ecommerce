import React, { FC } from "react";
import { TotalRowStyled } from "./TotalRow.styled";
import { Typography } from "../../../_shared";

interface Props {
  title: string;
  value: number;
}

export const TotalRow: FC<Props> = ({ title, value }) => {
  return (
    <TotalRowStyled>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h6">{"$" + value}</Typography>
    </TotalRowStyled>
  );
};
