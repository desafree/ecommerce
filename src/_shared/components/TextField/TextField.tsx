import { TextField as TextFieldMUI } from "@mui/material";
import { FC } from "react";
import { ChangeEventHandler, FocusEventHandler } from "react";

interface Props {
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  value: string;
  label: string;
}

export const TextField: FC<Props> = ({ onChange, onBlur, value, label }) => {
  return (
    <TextFieldMUI
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      label={label}
    ></TextFieldMUI>
  );
};
