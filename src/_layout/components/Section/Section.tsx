import React, { FC, ReactNode } from "react";
import { SectionStyled } from "./Section.styled";
import { Animated } from "../../../_shared/animation/Animated";

interface Props {
  children: ReactNode;
}

export const Section: FC<Props> = ({ children }) => {
  return (
    <Animated animationRef="comeFromBottomOnView" Component={SectionStyled}>
      {children}
    </Animated>
  );
};
