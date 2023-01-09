import { Container as ContainerMUI } from "@mui/material";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  maxWidth: "xs" | "sm" | "md" | "lg" | "xl";
  style?: React.CSSProperties;
}

export const Container: FC<Props> = ({ children, maxWidth, style }) => {
  return (
    <ContainerMUI maxWidth={maxWidth} sx={style}>
      {children}
    </ContainerMUI>
  );
};
