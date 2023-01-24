import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { ComponentType } from "react";

interface Props {
  children: string | ComponentType<{ children?: ReactNode }>;
}

export const GoUp: FC<Props> = ({ children }) => {
  const MotionComponent = motion(children, { forwardMotionProps: true });

  return <MotionComponent animate={{ x: 100 }} />;
};

export default GoUp;
