import React, { FC, forwardRef, ReactNode } from "react";
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
  spacing?: 1 | 2 | 3 | 4 | 5;
  style?: React.CSSProperties;
  component?: React.ElementType;
}

export const Stack = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      direction = "row",
      spacing,
      style,
      justifyContent = "flex-start",
      alignItems = "stretch",
      component = "div",
    },
    ref
  ) => {
    return (
      <StackMUI
        spacing={spacing}
        direction={direction}
        sx={style}
        justifyContent={justifyContent}
        alignItems={alignItems}
        component={component}
        ref={ref}
      >
        {children}
      </StackMUI>
    );
  }
);
