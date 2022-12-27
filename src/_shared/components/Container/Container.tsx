import { Container as ContainerMUI } from "@mui/material";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  maxWidth: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Container: FC<Props> = ({ children, maxWidth }) => {
  return <ContainerMUI maxWidth={maxWidth}>{children}</ContainerMUI>;
};
