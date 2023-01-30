import { Container as ContainerMUI } from "@mui/material";
import { FC, ReactNode } from "react";
import { animationMap } from "../../animation/animationMap";
import { motion } from "framer-motion";
import { Link } from "../Link";

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

type Animations = keyof typeof animationMap;

interface PropsEnhanced extends Props {
  animationRef: Animations;
}

const ContainerAnimatable = motion(Container, { forwardMotionProps: true });

export const EnhancedContainer: FC<PropsEnhanced> = ({
  children,
  maxWidth,
  style,
  className,
  animationRef,
}) => {
  return (
    <ContainerAnimatable
      maxWidth={maxWidth}
      style={style}
      className={className}
      variants={animationMap[animationRef]}
      initial="hidden"
      animate="visible"
      whileInView="onView"
      exit="hidden"
    >
      {children}
    </ContainerAnimatable>
  );
};
