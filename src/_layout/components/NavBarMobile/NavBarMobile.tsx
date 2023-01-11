import React from "react";
import { NavBarMobileStyled } from "./NavBarMobile.styled";
import { Button, PopUpWrapper } from "../../../_shared";
import { CartPopup, useToggle } from "../../../cart";
import { NavBarLinksMobile } from "../NavBarLinksMobile";
import { Link } from "react-router-dom";

export const NavBarMobile = () => {
  const { on: activeMenu, toggle: openMenu } = useToggle();
  const { on: activeCart, toggle: openCart } = useToggle();

  return (
    <NavBarMobileStyled>
      <Button variant="text" onClick={openMenu}>
        <img
          src="/assets/shared/desktop/icon-menu.svg"
          alt=""
          style={{ width: "23px" }}
        />
      </Button>
      <Link to="/" className="logo">
        <img src="/assets/shared/desktop/logo.svg" alt="logo" />
      </Link>
      <Button variant="text" onClick={openCart}>
        <img
          src="/assets/shared/desktop/icon-cart.svg"
          alt=""
          style={{ width: "23px" }}
        />
      </Button>
      {activeCart && (
        /*          TODO: use popup component*/
        <PopUpWrapper>
          <CartPopup toggle={openCart} />
        </PopUpWrapper>
      )}
      {activeMenu && (
        /*          TODO: use popup component*/
        <PopUpWrapper>
          <NavBarLinksMobile toggle={openMenu} />
        </PopUpWrapper>
      )}
    </NavBarMobileStyled>
  );
};
