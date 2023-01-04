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
          />
        )}
      ></Controller>
      {invalid && error && error.message && (
        <Typography variant="body1">{translate(error.message)}</Typography>
      )}
    </Stack>
  );
};

export default Input;
