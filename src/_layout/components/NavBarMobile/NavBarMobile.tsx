import React from "react";
import { NavBarMobileStyled } from "./NavBarMobile.styled";
import { Button, PopUpWrapper, Popup } from "../../../_shared";
import { PopupContainer, useCartProducts, useToggle } from "../../../cart";
import { NavBarLinksMobile } from "../NavBarLinksMobile";
import { Link } from "react-router-dom";

export const NavBarMobile = () => {
  const { on: activeMenu, toggle: openMenu } = useToggle();
  const { on: activeCart, toggle: openCart } = useToggle();
  const items = useCartProducts();

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
        <Popup toggle={openCart}>
          <PopupContainer items={items} />
        </Popup>
      )}
      {activeMenu && (
        <PopUpWrapper>
          <NavBarLinksMobile toggle={openMenu} />
        </PopUpWrapper>
      )}
    </NavBarMobileStyled>
  );
};
