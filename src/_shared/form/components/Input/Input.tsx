import React, { FC } from "react";
import { Controller } from "react-hook-form";
import { TextField } from "../../../components";
import { Stack } from "../../../components";
import { useTranslate } from "../../../i18n";

interface Props {
  name: string;
  label: string;
}

const Input: FC<Props> = ({ name, label }) => {
  const translate = useTranslate();

  return (
    <Stack direction="column">
      <Controller
        name={name}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { invalid, error },
        }) => (
          <TextField
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            label={label}
            error={invalid}
            errorMessage={
              invalid && error && error.message ? translate(error.message) : ""
            }
          />
        )}
      ></Controller>
    </Stack>
  );
};

export default Input;
