import React, { FC, ReactNode } from "react";
import { SectionStyled } from "./Section.styled";

interface Props {
  children: ReactNode;
}

export const Section: FC<Props> = ({ children }) => {
  return <SectionStyled>{children}</SectionStyled>;
};
