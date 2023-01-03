import React, { FC, ReactNode } from "react";
import { Button as ButtonMUI } from "@mui/material";
import { ButtonTypes } from "../../types";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  disabled?: boolean;
  variant?: ButtonTypes;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "button" | "reset";
}

const Button: FC<Props> = ({
  children,
  disabled = false,
  variant = "primary",
  href,
  onClick,
  type,
}) => {
  return (
    <ButtonMUI
      disabled={disabled}
      variant={variant}
      href={href}
      onClick={onClick}
      type={type}
    >
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
