import React from "react";
import { Link } from "react-router-dom";
import { NavbarDesktopStyled } from "./NavbarDesktop.styled";
import { NavbarLinks } from "../NavbarLinks";
import { Container, PopUpWrapper, Button } from "../../../_shared";
import { useToggle, CartPopup } from "../../../cart";

export const NavbarDesktop = () => {
  const { on, onClick, toggle } = useToggle();

  return (
    <NavbarDesktopStyled>
      <Container maxWidth="lg">
        <Link to="/" className="logo">
          <img src="/assets/shared/desktop/logo.svg" alt="logo" />
        </Link>
        <NavbarLinks />
        <Button variant="text" onClick={onClick}>
          <img src="/assets/shared/desktop/icon-cart.svg" alt="" />
        </Button>
      </Container>
      {on && (
        <PopUpWrapper>
          <CartPopup toggle={toggle} />
        </PopUpWrapper>
      )}
    </NavbarDesktopStyled>
  );
};
