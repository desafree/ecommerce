import React, { FC, useRef } from "react";
import { NavBarLinksMobileStyled } from "./NavBarLinksMobile.styled";
import {
  useClickOutsideListener,
  Stack,
  CategoryPreview,
} from "../../../_shared";
import { NavPopupContainer } from "../NavPopupContainer";

interface Props {
  toggle: () => void;
}

export const NavBarLinksMobile: FC<Props> = ({ toggle }) => {
  const ref = useRef<HTMLUListElement>(null);
  useClickOutsideListener(ref, toggle);

  return (
    <NavBarLinksMobileStyled>
      <NavPopupContainer ref={ref} />
    </NavBarLinksMobileStyled>
  );
};
