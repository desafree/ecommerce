import { Container as ContainerMUI } from "@mui/material";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  maxWidth: "xs" | "sm" | "md" | "lg" | "xl";
  style?: React.CSSProperties;
  className?: string;
}

export const Container: FC<Props> = ({
  children,
  maxWidth,
  style,
  className,
}) => {
  return (
    <ContainerMUI maxWidth={maxWidth} sx={style} className={className}>
      {children}
    </ContainerMUI>
  );
};
