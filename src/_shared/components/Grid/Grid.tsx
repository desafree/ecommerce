import React, { FC, ReactNode } from "react";
import { Grid as GridMUI } from "@mui/material";

export type GridDirection = "row" | "row-reverse" | "column" | "column-reverse";

interface Props {
  children: ReactNode;
  spacing?: number | string;
  columnSpacing?: number | string;
  rowSpacing?: number | string;
  container?: boolean;
  item?: boolean;
  direction?: GridDirection | undefined;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  className?: string;
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
}

export const Grid: FC<Props> = ({
  children,
  columnSpacing,
  container = false,
  item = false,
  rowSpacing,
  xs = 12,
  sm = xs,
  md = sm,
  lg = md,
  xl = lg,
  spacing,
  wrap = "wrap",
  direction = "row",
  justifyContent = "flex-start",
  alignItems = "stretch",
  className,
}) => {
  if (container) {
    return (
      <GridMUI
        columnSpacing={columnSpacing}
        container={container}
        rowSpacing={rowSpacing}
        spacing={spacing}
        wrap={wrap}
        direction={direction}
        alignItems={alignItems}
        justifyContent={justifyContent}
        className={className}
      >
        {children}
      </GridMUI>
    );
  }

  return (
    <GridMUI
      item={item}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      className={className}
    >
      {children}
    </GridMUI>
  );
};
