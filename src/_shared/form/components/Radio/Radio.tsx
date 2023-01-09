import React, { FC } from "react";
import { Controller } from "react-hook-form";
import { Typography, RadioGroup } from "../../../components";
import { RadioButton } from "./RadioButton";
import { CheckoutItemRadio } from "../../../../checkout";

interface Props {
  name: string;
  items: CheckoutItemRadio[];
  label: string;
}

const Input: FC<Props> = ({ name, items, label }) => {
  return (
    <>
      <Typography variant="smallBold">{name}</Typography>
      <Controller
        name={name}
        render={({
          field: { onChange, value },
          fieldState: { invalid, error },
        }) => (
          <>
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
            {invalid && (
              <Typography variant="body1">{error?.message || ""}</Typography>
            )}
          </>
        )}
      ></Controller>
    </>
  );
};

export default Input;
