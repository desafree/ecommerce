import React from "react";
import { FooterStyled } from "./Footer.styled";
import { Container, useTranslate, Typography } from "../../../_shared";
import { FooterNavigation } from "../FooterNavigation";
import { FooterAbout } from "../FooterAbout";

export const Footer = () => {
  const translate = useTranslate();

  return (
    <FooterStyled>
      <Container maxWidth="lg">
        <FooterNavigation></FooterNavigation>
        <FooterAbout></FooterAbout>
        <Typography
          variant="body1"
          style={{ color: "rgba(255,255,255,0.5)", marginTop: "50px" }}
        >
          {translate("footer.copyright")}
        </Typography>
      </Container>
    </FooterStyled>
  );
};
