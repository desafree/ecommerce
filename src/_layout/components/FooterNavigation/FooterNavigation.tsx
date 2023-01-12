import React from "react";
import { FooterNavigationStyled } from "./FooterNavigation.styled";
import { Link, useTranslate } from "../../../_shared";

export const FooterNavigation = () => {
  const translate = useTranslate();

  return (
    <FooterNavigationStyled>
      <Link to="/">
        <img src="/assets/shared/desktop/logo.svg" alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/" variant="h6" style={{ color: "white" }}>
            {translate("navigation.home")}
          </Link>
        </li>
        <li>
          <Link to="/headphones" variant="h6" style={{ color: "white" }}>
            {translate("navigation.headphones")}
          </Link>
        </li>
        <li>
          <Link to="/speakers" variant="h6" style={{ color: "white" }}>
            {translate("navigation.speakers")}
          </Link>
        </li>
        <li>
          <Link to="/earphones" variant="h6" style={{ color: "white" }}>
            {translate("navigation.earphones")}
          </Link>
        </li>
      </ul>
    </FooterNavigationStyled>
  );
};
