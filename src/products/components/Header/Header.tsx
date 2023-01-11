import React from "react";
import { HeaderStyled } from "./Header.styled";
import { useTranslate, Container, Typography, Link } from "../../../_shared";

export const Header = () => {
  const translate = useTranslate();

  return (
    <HeaderStyled>
      <Container maxWidth="lg">
        <Typography variant="subtitle1">
          {translate("header.subtitle")}
        </Typography>
        <Typography variant="h1">{translate("header.title")}</Typography>
        <Typography variant="body1">
          {translate("header.description")}
        </Typography>
        <Link variant="primary" to="/speakers/xx99-mark-two-headphones">
          {translate("header.button")}
        </Link>
      </Container>
    </HeaderStyled>
  );
};
