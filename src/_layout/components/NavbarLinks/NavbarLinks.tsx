import React from "react";
import { NavbarLinksStyled } from "./NavbarLinks.styled";
import { Link } from "../../../_shared";

export const NavbarLinks = () => {
  return (
    <NavbarLinksStyled>
      <li>
        <Link to="/" variant="h6">
          Home
        </Link>
      </li>
      <li>
        <Link to="/headphones" variant="h6">
          Headphones
        </Link>
      </li>
      <li>
        <Link to="/speakers" variant="h6">
          Speakers
        </Link>
      </li>
      <li>
        <Link to="/earphones" variant="h6">
          Earphones
        </Link>
      </li>
    </NavbarLinksStyled>
  );
};
