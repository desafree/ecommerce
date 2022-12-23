import React, { FC } from "react";
import { useController } from "react-hook-form";

interface Props {
  name: string;
  values: (string | number)[];
}

const Select: FC<Props> = ({ name, values }) => {
  const {
    field,
    fieldState: { error, invalid },
  } = useController({
    name,
  });

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <select id={name} {...field}>
        {values.map((value) => {
          return (
            <option value={value} key={value}>
              {value}
            </option>
          );
        })}
      </select>
      {invalid && <p>{error?.message}</p>}
    </div>
  );
};

export default Select;
