import React from "react";
import { FooterNavigationStyled } from "./FooterNavigation.styled";
import { Link, Typography } from "../../../_shared";

export const FooterNavigation = () => {
  return (
    <FooterNavigationStyled>
      <Link to="/">
        <img src="/assets/shared/desktop/logo.svg" alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">
            {" "}
            <Typography
              variant="smallBold"
              style={{
                color: "white",
                textTransform: "uppercase",
              }}
            >
              home
            </Typography>
          </Link>
        </li>
        <li>
          <Link to="/headphones">
            <Typography
              variant="smallBold"
              style={{
                color: "white",
                textTransform: "uppercase",
              }}
            >
              headphones
            </Typography>
          </Link>
        </li>
        <li>
          <Link to="/speakers">
            <Typography
              variant="smallBold"
              style={{
                color: "white",
                textTransform: "uppercase",
              }}
            >
              speakers
            </Typography>
          </Link>
        </li>
        <li>
          <Link to="/earphones">
            <Typography
              variant="smallBold"
              style={{
                color: "white",
                textTransform: "uppercase",
              }}
            >
              earphones
            </Typography>
          </Link>
        </li>
      </ul>
    </FooterNavigationStyled>
  );
};
