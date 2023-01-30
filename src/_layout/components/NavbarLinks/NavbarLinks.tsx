import React from "react";
import { Stack } from "../../../_shared";
import { Link, useTranslate } from "../../../_shared";
import { Animated } from "../../../_shared/animation/Animated";

export const NavbarLinks = () => {
  const translate = useTranslate();

  return (
    <Animated component="div" animationRef="fadeInStaggered" StaggeredContainer>
      <Stack
        spacing={4}
        direction="row"
        component="ul"
        style={{ listStyle: "none" }}
      >
        <Animated component="li" animationRef="fadeIn" StaggeredItem>
          <Link to="/" variant="h6" style={{ color: "white !important" }}>
            {translate("navigation.home")}
          </Link>
        </Animated>

        <Animated component="li" animationRef="fadeIn" StaggeredItem>
          <Link
            to="/headphones"
            variant="h6"
            style={{ color: "white !important" }}
          >
            {translate("navigation.headphones")}
          </Link>
        </Animated>

        <Animated component="li" animationRef="fadeIn" StaggeredItem>
          <Link
            to="/speakers"
            variant="h6"
            style={{ color: "white !important" }}
          >
            {translate("navigation.speakers")}
          </Link>
        </Animated>

        <Animated component="li" animationRef="fadeIn" StaggeredItem>
          <Link
            to="/earphones"
            variant="h6"
            style={{ color: "white !important" }}
          >
            {translate("navigation.earphones")}
          </Link>
        </Animated>
      </Stack>
    </Animated>
  );
};
