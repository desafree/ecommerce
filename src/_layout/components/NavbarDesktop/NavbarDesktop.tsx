import React from "react";
import { NavbarDesktopStyled } from "./NavbarDesktop.styled";
import { NavbarLinks } from "../NavbarLinks";
import {
  Container,
  PopUpWrapper,
  Button,
  usePreventScroll,
  Link,
} from "../../../_shared";
import { useToggle, CartPopup } from "../../../cart";

export const NavbarDesktop = () => {
  const { on: showCart, toggle: toggleCart } = useToggle();
  usePreventScroll(showCart);

  return (
    <NavbarDesktopStyled>
      <Container maxWidth="lg">
        <Link to="/">
          <img src="/assets/shared/desktop/logo.svg" alt="logo" />
        </Link>
        <NavbarLinks />
        <Button variant="text" onClick={toggleCart}>
          <img src="/assets/shared/desktop/icon-cart.svg" alt="" />
        </Button>
      </Container>
      {showCart && (
        <PopUpWrapper>
          <CartPopup toggle={toggleCart} />
        </PopUpWrapper>
      )}
    </NavbarDesktopStyled>
  );
};
