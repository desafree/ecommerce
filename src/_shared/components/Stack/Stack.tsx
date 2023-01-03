import React, { FC, ReactNode } from "react";
import { Stack as StackMUI } from "@mui/material";

interface Props {
  children: ReactNode;
  wrap?: "nowrap" | "wrap-reverse" | "wrap";
  alignItems?:
    | "center"
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit";
  direction?: "column-reverse" | "column" | "row-reverse" | "row";
  spacing?: string;
  style?: React.CSSProperties;
}

export const Stack: FC<Props> = ({
  children,
  direction = "row",
  spacing,
  style,
  justifyContent = "flex-start",
  alignItems = "stretch",
}) => {
  return (
    <StackMUI
      spacing={spacing}
      direction={direction}
      sx={style}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </StackMUI>
  );
};
