import React, { FC } from "react";
import { useController } from "react-hook-form";
import { Typography } from "../../../components";
import { RadioButton } from "./RadioButton";
import { Box } from "../../../components";

interface Props {
  name: string;
  list: string[];
}

const Input: FC<Props> = ({ name, list }) => {
  const {
    field,
    fieldState: { error, invalid },
  } = useController({
    name,
  });

  return (
    <Box>
      <Typography variant="smallBold">{name}</Typography>
      {list.map((item) => {
        return <RadioButton field={field} item={item} key={item} />;
      })}

      {invalid && (
        <Typography variant="body1">{error?.message || ""}</Typography>
      )}
    </Box>
  );
};

export default Input;
