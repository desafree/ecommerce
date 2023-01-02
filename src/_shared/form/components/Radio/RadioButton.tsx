import React, { FC } from "react";
import { RadioButtonStyled } from "./RadioButton.styled";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Typography } from "../../../components";

interface Props {
  item: string;
  field: ControllerRenderProps<FieldValues, string>;
}

export const RadioButton: FC<Props> = ({ item, field }) => {
  return (
    <RadioButtonStyled>
      <input {...field} type="radio" id={item} value={item} />
      <label htmlFor={item}>
        <Typography variant={"smallBold"}>{item}</Typography>{" "}
      </label>
    </RadioButtonStyled>
  );
};
