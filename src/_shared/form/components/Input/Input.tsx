import React, { FC } from "react";
import { useController, Controller } from "react-hook-form";
import { Typography, TextField } from "../../../components";
import { Stack } from "../../../components";
import { useTranslate } from "../../../i18n";

interface Props {
  name: string;
  label: string;
}

const Input: FC<Props> = ({ name, label }) => {
  const translate = useTranslate();

  const {
    fieldState: { error, invalid },
  } = useController({
    name,
  });

  return (
    <Stack direction="column">
      <Controller
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
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
