import React, { FC, MouseEventHandler, ReactNode } from "react";
import { Button as ButtonMUI } from "@mui/material";
import { ButtonTypes } from "../../types";
import { defineStyleForButton } from "../../utils";

interface Props {
  children: ReactNode;
  disabled?: boolean;
  variant?: ButtonTypes;
  href?: string;
<<<<<<< HEAD
  onClick?: MouseEventHandler<HTMLButtonElement>;
=======
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
>>>>>>> ff37edd (feat: create popup cart)
}

const Button: FC<Props> = ({
  children,
  disabled = false,
  variant = "orange",
  href,
  onClick,
}) => {
  const style = defineStyleForButton(variant);

  return (
    <ButtonMUI disabled={disabled} sx={style} href={href} onClick={onClick}>
      {children}
      {variant === "transparent" ? (
        <span>
          <img
            src="/assets/shared/desktop/icon-arrow-right.svg"
            alt="arrow right"
          />
        </span>
      ) : (
        ""
      )}
    </ButtonMUI>
  );
};

export default Button;
