import React from "react";
import { Link } from "react-router-dom";
import { NavbarDesktopStyled } from "./NavbarDesktop.styled";
import { NavbarLinks } from "../NavbarLinks";
import { Container } from "../../../_shared";

export const NavbarDesktop = () => {
  return (
    <NavbarDesktopStyled>
      <Container maxWidth="lg">
        <Link to="/" className="logo">
          <img src="/assets/shared/desktop/logo.svg" alt="logo" />
        </Link>
        <NavbarLinks />
        <button>
          <img src="/assets/shared/desktop/icon-cart.svg" alt="" />
        </button>
      </Container>
    </NavbarDesktopStyled>
  );
};
