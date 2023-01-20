import React, { FC, ReactNode } from "react";
import { RadioGroup as RadioGroupMUI } from "@mui/material";

interface Props {
  value: string;
  onChange: () => void;
  children: ReactNode;
  dataTestId?: string;
}

export const RadioGroup: FC<Props> = ({
  value,
  onChange,
  children,
  dataTestId,
}) => {
  return (
    <RadioGroupMUI value={value} onChange={onChange} data-test-id={dataTestId}>
      {children}
    </RadioGroupMUI>
  );
};
