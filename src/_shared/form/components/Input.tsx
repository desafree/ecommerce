import React, { FC } from "react";
import { useController } from "react-hook-form";

interface Props {
  name: string;
  type: "text" | "date";
}

const Input: FC<Props> = ({ name, type }) => {
  const {
    field,
    fieldState: { error, invalid },
  } = useController({
    name,
  });

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input {...field} type={type} />
      {invalid && <p>{error?.message}</p>}
    </div>
  );
};

export default Input;
