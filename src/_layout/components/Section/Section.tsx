import React, { FC, forwardRef, ReactNode } from "react";
import { SectionStyled } from "./Section.styled";
import { Animated } from "../../../_shared/animation/Animated";

interface Props {
  children: ReactNode;
}

export const Section = forwardRef<HTMLElement, Props>(({ children }, ref) => {
  return (
    <Animated animationRef="fadeOnView" component={SectionStyled}>
      {children}
    </Animated>
  );
});
