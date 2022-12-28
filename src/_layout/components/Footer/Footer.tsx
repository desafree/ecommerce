import React from "react";
import { FooterStyled } from "./Footer.styled";
import { Container, useTranslate } from "../../../_shared";
import { FooterNavigation } from "../FooterNavigation";
import { FooterAbout } from "../FooterAbout";

export const Footer = () => {
  const translate = useTranslate();

  return (
    <FooterStyled>
      <Container maxWidth="lg">
        <FooterNavigation></FooterNavigation>
        <FooterAbout></FooterAbout>
        <p>{translate("footer.copyright")}</p>
      </Container>
    </FooterStyled>
  );
};
