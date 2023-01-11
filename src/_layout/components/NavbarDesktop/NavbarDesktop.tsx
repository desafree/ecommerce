import React from "react";
import { Link } from "react-router-dom";
import { NavbarDesktopStyled } from "./NavbarDesktop.styled";
import { NavbarLinks } from "../NavbarLinks";
import {
  Container,
  PopUpWrapper,
  Button,
  usePreventScroll,
} from "../../../_shared";
import { useToggle, CartPopup } from "../../../cart";

export const NavbarDesktop = () => {
  const { on, toggle } = useToggle();
  usePreventScroll(on);

  return (
    <NavbarDesktopStyled>
      <Container maxWidth="lg">
        <Link to="/" className="logo">
          <img src="/assets/shared/desktop/logo.svg" alt="logo" />
        </Link>
        <NavbarLinks />
        <Button variant="text" onClick={toggle}>
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
