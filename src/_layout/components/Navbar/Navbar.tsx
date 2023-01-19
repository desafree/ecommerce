import React from "react";
import { NavbarStyled } from "./Navbar.styled";
import { NavbarLinks } from "../NavbarLinks";
import {
  Container,
  PopUpWrapper,
  Button,
  usePreventScroll,
  Link,
} from "../../../_shared";
import { useToggle, CartPopup } from "../../../cart";
import { NavBarLinksMobile } from "../NavBarLinksMobile";

export const Navbar = () => {
  const { on: showCart, toggle: toggleCart } = useToggle();
  const { on: showMenu, toggle: toggleMenu } = useToggle();
  usePreventScroll(showCart);

  return (
    <NavbarStyled>
      <Container maxWidth="lg" className="desktop">
        <Link to="/">
          <img src="/assets/shared/desktop/logo.svg" alt="logo" />
        </Link>
        <NavbarLinks />
        <Button variant="text" onClick={toggleCart} dataTestId="cart-toggle">
          <img src="/assets/shared/desktop/icon-cart.svg" alt="" />
        </Button>
      </Container>

      <Container maxWidth="lg" className="mobile">
        <Button variant="text" onClick={toggleMenu}>
          <img
            src="/assets/shared/desktop/icon-menu.svg"
            alt=""
            style={{ width: "23px" }}
          />
        </Button>
        <Link to="/">
          <img src="/assets/shared/desktop/logo.svg" alt="logo" />
        </Link>
        <Button variant="text" onClick={toggleCart} dataTestId="cart-toggle">
          <img
            src="/assets/shared/desktop/icon-cart.svg"
            alt=""
            style={{ width: "23px" }}
          />
        </Button>
      </Container>

      {showCart && (
        <PopUpWrapper>
          <CartPopup toggle={toggleCart} />
        </PopUpWrapper>
      )}
      {showMenu && (
        <PopUpWrapper>
          <NavBarLinksMobile toggle={toggleMenu} />
        </PopUpWrapper>
      )}
    </NavbarStyled>
  );
};
