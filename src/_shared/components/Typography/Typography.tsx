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
  dataTestId?: string;
}

export const Typography: FC<Props> = ({
  variant = "h1",
  align = "inherit",
  children,
  style,
  dataTestId,
}) => {
  return (
    <TypographyMUI
      variant={variant}
      sx={style}
      align={align}
      data-test-id={dataTestId}
    >
      {children}
    </TypographyMUI>
  );
};
