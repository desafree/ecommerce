import React from "react";
import { NavPopupContainerStyled } from "./NavPopupContainer.styled";
import { Link, useTranslate } from "../../../_shared";

export const NavPopupContainer = React.forwardRef<HTMLUListElement>(
  (props, ref) => {
    const translate = useTranslate();

    return (
      <NavPopupContainerStyled ref={ref}>
        <li>
          <Link to="/" variant="h6">
            {translate("navigation.headphones")}
          </Link>
        </li>
        <li>
          <Link to="/" variant="h6">
            {translate("navigation.speakers")}
          </Link>
        </li>
        <li>
          <Link to="/" variant="h6">
            {translate("navigation.earphones")}
          </Link>
        </li>
      </NavPopupContainerStyled>
    );
  }
);
