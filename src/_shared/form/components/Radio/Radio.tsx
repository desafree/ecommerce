import React, { FC } from "react";
import { useController } from "react-hook-form";
import { RadioStyled } from "./Radio.styled";
import { Typography } from "../../../components";
import { RadioButton } from "./RadioButton";

interface Props {
  name: string;
  type?: "text" | "date" | "number";
  list: string[];
}

const Input: FC<Props> = ({ name, type = "text", list }) => {
  const {
    field,
    fieldState: { error, invalid },
  } = useController({
    name,
  });

  return (
    <RadioStyled>
      <Typography variant="smallBold">{name}</Typography>
      {list.map((item) => {
        return <RadioButton field={field} item={item} key={item} />;
      })}

      {invalid && (
        <Typography variant="body1">{error?.message || ""}</Typography>
      )}
    </RadioStyled>
  );
};

export default Input;
