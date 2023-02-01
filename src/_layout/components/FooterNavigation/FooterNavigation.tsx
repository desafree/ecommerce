import React from "react";
import { FooterNavigationStyled } from "./FooterNavigation.styled";
import { Link, useTranslate } from "../../../_shared";
import { Animated } from "../../../_shared/animation/Animated";

export const FooterNavigation = () => {
  const translate = useTranslate();

  return (
    <FooterNavigationStyled>
      <Animated Component={Link} animationRef="fadeInOnView" to="/">
        <img src="/assets/shared/desktop/logo.svg" alt="logo" />
      </Animated>
      <Animated Component="ul" animationRef="fadeInOnViewStaggered">
        <li>
          <Link to="/" variant="h6" style={{ color: "white !important" }}>
            {translate("navigation.home")}
          </Link>
        </li>
        <li>
          <Link
            to="/headphones"
            variant="h6"
            style={{ color: "white !important" }}
          >
            {translate("navigation.headphones")}
          </Link>
        </li>
        <li>
          <Link
            to="/speakers"
            variant="h6"
            style={{ color: "white !important" }}
          >
            {translate("navigation.speakers")}
          </Link>
        </li>
        <li>
          <Link
            to="/earphones"
            variant="h6"
            style={{ color: "white !important" }}
          >
            {translate("navigation.earphones")}
          </Link>
        </li>
      </Animated>
    </FooterNavigationStyled>
  );
};
