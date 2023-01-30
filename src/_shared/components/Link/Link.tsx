import { Link as LinkMUI } from "@mui/material";
import React, { forwardRef, ReactNode, FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { TypographyProps } from "@mui/material/Typography";
import { motion } from "framer-motion";
import { animationMap } from "../../animation/animationMap";

interface Props {
  children: ReactNode;
  to: string;
  variant?: TypographyProps["variant"];
  style?: React.CSSProperties;
}

export const Link = forwardRef<HTMLAnchorElement, Props>(
  ({ children, to, variant = "smallBold", style }, ref) => {
    return (
      <LinkMUI
        component={RouterLink}
        to={to}
        variant={variant}
        sx={style}
        ref={ref}
      >
        {children}
        {variant === "transparent" ? (
          <span>
            <img
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt="arrow right"
            />
          </span>
        ) : (
          ""
        )}
      </LinkMUI>
    );
  }
);

type Animations = keyof typeof animationMap;

interface PropsEnhanced extends Props {
  animationRef: Animations;
}

const LinkAnimatable = motion(Link, { forwardMotionProps: true });

export const EnhancedLink: FC<PropsEnhanced> = ({
  children,
  to,
  variant = "smallBold",
  animationRef,
  style,
}) => {
  return (
    <LinkAnimatable
      style={style}
      to={to}
      variant={variant}
      variants={animationMap[animationRef]}
      initial="hidden"
      animate="visible"
      whileInView="onView"
      exit="hidden"
    >
      {children}
    </LinkAnimatable>
  );
};
