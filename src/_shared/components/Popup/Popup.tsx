import React, { FC, ReactElement, useRef } from "react";
import { PopupStyled } from "./Popup.styled";
import { PopUpWrapper } from "../PopupWrapper";
import { useClickOutsideListener } from "../../hooks";

interface Props {
  toggle: () => void;
  children: ReactElement;
}

export const Popup: FC<Props> = ({ toggle, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutsideListener(ref, toggle);

  return (
    <PopUpWrapper>
      <PopupStyled>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child as React.ReactElement<any>, {
            ref,
          });
        })}
      </PopupStyled>
    </PopUpWrapper>
  );
};
