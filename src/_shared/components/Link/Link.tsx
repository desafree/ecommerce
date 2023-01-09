import { Link as LinkMUI } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import { TypographyProps } from "@mui/material/Typography";

interface Props {
  children: ReactNode;
  to: string;
  variant?: TypographyProps["variant"];
}

export const Link: FC<Props> = ({ children, to, variant = "smallBold" }) => {
  return (
    <LinkMUI component={RouterLink} to={to} variant={variant}>
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
    </LinkMUI>
  );
};
