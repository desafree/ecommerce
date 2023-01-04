import React, { FC, ReactNode } from "react";
import { RadioGroup as RadioGroupMUI } from "@mui/material";

interface Props {
  value: string;
  onChange: () => void;
  children: ReactNode;
}

export const RadioGroup: FC<Props> = ({ value, onChange, children }) => {
  return (
    <RadioGroupMUI value={value} onChange={onChange}>
      {children}
    </RadioGroupMUI>
  );
};
