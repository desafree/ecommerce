import React, { FC } from "react";
import { FormControlLabel, Radio } from "@mui/material";

interface Props {
  item: string;
  label: string;
}

export const RadioButton: FC<Props> = ({ item, label }) => {
  return (
    <FormControlLabel
      label={label}
      value={item}
      control={<Radio />}
    ></FormControlLabel>
  );
};
