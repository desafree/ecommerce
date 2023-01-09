import React, { FC } from "react";
import { Typography as TypographyMUI } from "@mui/material";

interface Props {
  variant?:
    | "body1"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "overline"
    | "subtitle1"
    | "smallBold";
  align?: "center" | "inherit" | "justify" | "left" | "right";
  children: string;
  style?: React.CSSProperties;
}

export const Typography: FC<Props> = ({
  variant = "h1",
  align = "inherit",
  children,
  style,
}) => {
  return (
    <TypographyMUI variant={variant} sx={style} align={align}>
      {children}
    </TypographyMUI>
  );
};
