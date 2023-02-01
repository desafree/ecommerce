import React from "react";
import { Stack } from "../../../_shared";
import { Link, useTranslate } from "../../../_shared";
import { Animated } from "../../../_shared/animation/Animated";

export const NavbarLinks = () => {
  const translate = useTranslate();

  return (
    <Animated
      Component={Stack}
      spacing={4}
      direction="row"
      component="ul"
      style={{ listStyle: "none" }}
      animationRef="fadeInStaggered"
    >
      <li>
        <Link to="/" variant="h6" style={{ color: "white !important" }}>
          {translate("navigation.home")}
        </Link>
      </li>
      <li>
        <Link
          to="/headphones"
          variant="h6"
          style={{ color: "white !important" }}
        >
          {translate("navigation.headphones")}
        </Link>
      </li>
      <li>
        <Link to="/speakers" variant="h6" style={{ color: "white !important" }}>
          {translate("navigation.speakers")}
        </Link>
      </li>
      <li>
        <Link
          to="/earphones"
          variant="h6"
          style={{ color: "white !important" }}
        >
          {translate("navigation.earphones")}
        </Link>
      </li>
    </Animated>
  );
};
