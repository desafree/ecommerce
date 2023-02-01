import React from "react";
import { HeaderStyled } from "./Header.styled";
import { useTranslate, Container, Typography, Link } from "../../../_shared";
import { Animated } from "../../../_shared/animation/Animated";

export const Header = () => {
  const translate = useTranslate();

  return (
    <HeaderStyled>
      <Animated
        Component={Container}
        maxWidth="lg"
        animationRef="fadeInStaggered"
      >
        <Typography
          variant="overline"
          style={{
            color: "rgba(255, 255, 255, 0.5)",
            marginBottom: "24px",
          }}
        >
          {translate("header.subtitle")}
        </Typography>
        <Typography
          variant="h1"
          style={{ color: "white", marginBottom: "24px", maxWidth: "400px" }}
        >
          {translate("header.title")}
        </Typography>
        <Typography
          variant="body1"
          style={{
            color: "rgba(255, 255, 255, 0.75)",
            marginBottom: "40px",
            maxWidth: "350px",
          }}
        >
          {translate("header.description")}
        </Typography>
        <Link variant="primary" to="/speakers/xx99-mark-two-headphones">
          {translate("header.button")}
        </Link>
      </Animated>
    </HeaderStyled>
  );
};
