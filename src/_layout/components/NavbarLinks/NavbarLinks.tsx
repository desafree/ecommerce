import React from "react";
import { NavbarLinksStyled } from "./NavbarLinks.styled";
import { Link } from "react-router-dom";

export const NavbarLinks = () => {
  return (
    <NavbarLinksStyled>
      <li>
        <Link to={"/"}>Home</Link>{" "}
      </li>
      <li>
        <Link to={"/"}>Headphones</Link>{" "}
      </li>
      <li>
        <Link to={"/"}>Speakers</Link>{" "}
      </li>
      <li>
        <Link to={"/"}>Earphones</Link>{" "}
      </li>
    </NavbarLinksStyled>
  );
};
