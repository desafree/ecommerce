import React, { FC, ReactNode } from "react";
import { Button as ButtonMUI } from "@mui/material";
import { ButtonTypes } from "../../types";
import { defineStyleForButton } from "../../utils";

interface Props {
  children: ReactNode;
  disabled?: boolean;
  variant?: ButtonTypes;
  href?: string;
}

const Button: FC<Props> = ({
  children,
  disabled = false,
  variant = "orange",
  href,
}) => {
  const style = defineStyleForButton(variant);

  return (
    <ButtonMUI disabled={disabled} sx={style} href={href}>
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
