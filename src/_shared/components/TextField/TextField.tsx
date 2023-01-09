import { TextField as TextFieldMUI } from "@mui/material";
import { FC } from "react";
import { ChangeEventHandler, FocusEventHandler } from "react";

interface Props {
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  value: string;
  label: string;
  errorMessage: string;
  error: boolean;
}

export const TextField: FC<Props> = ({
  onChange,
  onBlur,
  value,
  label,
  errorMessage,
  error,
}) => {
  return (
    <TextFieldMUI
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      label={label}
      error={error}
      helperText={errorMessage}
    ></TextFieldMUI>
  );
};
