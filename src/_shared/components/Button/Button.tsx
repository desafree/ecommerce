import React, { FC, MouseEventHandler, ReactNode } from "react";
import { Button as ButtonMUI } from "@mui/material";
import { ButtonTypes } from "../../types";

interface Props {
  children: ReactNode;
  disabled?: boolean;
  variant?: ButtonTypes;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = ({
  children,
  disabled = false,
  variant = "primary",
  href,
  onClick,
}) => {
  return (
    <ButtonMUI
      disabled={disabled}
      variant={variant}
      href={href}
      onClick={onClick}
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
