import React from "react";
import { FooterNavigationStyled } from "./FooterNavigation.styled";
import { Link } from "../../../_shared";

export const FooterNavigation = () => {
  return (
    <FooterNavigationStyled>
      <Link to="/">
        <img src="/assets/shared/desktop/logo.svg" alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/" variant="h6">
            home
          </Link>
        </li>
        <li>
          <Link to="/headphones" variant="h6">
            headphones
          </Link>
        </li>
        <li>
          <Link to="/speakers" variant="h6">
            speakers
          </Link>
        </li>
        <li>
          <Link to="/earphones" variant="h6">
            earphones
          </Link>
        </li>
      </ul>
    </FooterNavigationStyled>
  );
};
