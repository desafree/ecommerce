import React from "react";
import { FooterNavigationStyled } from "./FooterNavigation.styled";
import { Link } from "react-router-dom";

export const FooterNavigation = () => {
  return (
    <FooterNavigationStyled>
      <Link to="/">
        <img src="/assets/shared/desktop/logo.svg" alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/">headphones</Link>
        </li>
        <li>
          <Link to="/">speakers</Link>
        </li>
        <li>
          <Link to="/">earphones</Link>
        </li>
      </ul>
    </FooterNavigationStyled>
  );
};
