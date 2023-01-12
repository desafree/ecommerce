import React from "react";
import { NavbarLinksStyled } from "./NavbarLinks.styled";
import { Link, useTranslate } from "../../../_shared";

export const NavbarLinks = () => {
  const translate = useTranslate();

  return (
    <NavbarLinksStyled>
      <li>
        <Link to="/" variant="h6">
          {translate("navigation.home")}
        </Link>
      </li>
      <li>
        <Link to="/headphones" variant="h6">
          {translate("navigation.headphones")}
        </Link>
      </li>
      <li>
        <Link to="/speakers" variant="h6">
          {translate("navigation.speakers")}
        </Link>
      </li>
      <li>
        <Link to="/earphones" variant="h6">
          {translate("navigation.earphones")}
        </Link>
      </li>
    </NavbarLinksStyled>
  );
};
