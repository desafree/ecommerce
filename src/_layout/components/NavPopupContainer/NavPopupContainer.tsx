import React from "react";
import { NavPopupContainerStyled } from "./NavPopupContainer.styled";
import { Link } from "../../../_shared";

export const NavPopupContainer = React.forwardRef<HTMLUListElement>(
  (props, ref) => {
    return (
      <NavPopupContainerStyled ref={ref}>
        <li>
          <Link to="/" variant="h6">
            Headphones
          </Link>{" "}
        </li>
        <li>
          <Link to="/" variant="h6">
            Speakers
          </Link>{" "}
        </li>
        <li>
          <Link to="/" variant="h6">
            Earphones
          </Link>{" "}
        </li>
      </NavPopupContainerStyled>
    );
  }
);
