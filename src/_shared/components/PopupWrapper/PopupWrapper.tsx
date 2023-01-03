import React, { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
}

export const PopUpWrapper: FC<Props> = ({ children }) => {
  return <>{createPortal(children, document.getElementById("pop-up")!)}</>;
};
