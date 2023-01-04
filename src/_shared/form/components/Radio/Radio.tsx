import React, { FC } from "react";
import { useController, Controller } from "react-hook-form";
import { Typography, RadioGroup } from "../../../components";
import { RadioButton } from "./RadioButton";
import { CheckoutItemRadio } from "../../../../checkout";

interface Props {
  name: string;
  items: CheckoutItemRadio[];
  label: string;
}

const Input: FC<Props> = ({ name, items, label }) => {
  const {
    fieldState: { error, invalid },
  } = useController({
    name,
  });

  return (
    <>
      <Typography variant="smallBold">{name}</Typography>
      <Controller
        name={name}
        render={({ field: { onChange, value } }) => (
          <RadioGroup value={value} onChange={onChange}>
            {items.map((item) => {
              return (
                <RadioButton
                  item={item.value}
                  label={item.label}
                  key={item.value}
                />
              );
            })}
          </RadioGroup>
        )}
      ></Controller>
      {invalid && (
        <Typography variant="body1">{error?.message || ""}</Typography>
      )}
    </>
  );
};

export default Input;
