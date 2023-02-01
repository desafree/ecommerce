import { Container as ContainerMUI } from "@mui/material";
import { FC, forwardRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  maxWidth: "xs" | "sm" | "md" | "lg" | "xl";
  style?: React.CSSProperties;
  className?: string;
}

export const Container = forwardRef<HTMLDivElement, Props>(
  ({ children, maxWidth, style, className }, ref) => {
    return (
      <ContainerMUI
        maxWidth={maxWidth}
        sx={style}
        className={className}
        ref={ref}
      >
        {children}
      </ContainerMUI>
    );
  }
);
