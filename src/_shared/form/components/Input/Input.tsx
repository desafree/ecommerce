import React, { FC } from "react";
import { useController } from "react-hook-form";
import { InputStyled } from "./Input.styled";
import { Typography } from "../../../components";

interface Props {
  name: string;
  type?: "text" | "date" | "number";
}

const Input: FC<Props> = ({ name, type = "text" }) => {
  const {
    field,
    fieldState: { error, invalid },
  } = useController({
    name,
  });

  return (
    <InputStyled>
      <label htmlFor={name}>{name}</label>
      <input {...field} type={type} />
      {invalid && (
        <Typography variant="body1">{error?.message || ""}</Typography>
      )}
    </InputStyled>
  );
};

export default Input;
