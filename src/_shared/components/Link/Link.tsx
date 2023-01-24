import { Link as LinkMUI } from "@mui/material";
import React, { FC, forwardRef, ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import { TypographyProps } from "@mui/material/Typography";

interface Props {
  children: ReactNode;
  to: string;
  variant?: TypographyProps["variant"];
  style?: React.CSSProperties;
}

export const Link = forwardRef<HTMLAnchorElement, Props>(
  ({ children, to, variant = "smallBold", style }, ref) => {
    return (
      <LinkMUI
        component={RouterLink}
        to={to}
        variant={variant}
        sx={style}
        ref={ref}
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
      </LinkMUI>
    );
  }
);

/*export const Link: FC<Props> = ({
  children,
  to,
  variant = "smallBold",
  style,
}) => {
  return (
    <LinkMUI component={RouterLink} to={to} variant={variant} sx={style}>
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
};*/
